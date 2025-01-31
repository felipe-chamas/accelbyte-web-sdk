/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AxiosError, AxiosResponse } from 'axios'
import { z, ZodError } from 'zod'
import { Logger } from './Logger'

export type IResponseError = Error | AxiosError

// AxiosResponse
export type IDataStatus<D> = {
  data: D
  status: number
}

export type IResponse<D> =
  | {
      response: IDataStatus<D>
      error: null
    }
  | {
      response: null
      error: IResponseError
    }

export type IResponseWithSync<D> =
  | {
      response: IDataStatus<D>
      error: null
      onSync: (syncedData: (_: IResponse<D>) => void) => void
    }
  | {
      response: null
      error: IResponseError
      onSync: (syncedData: (_: IResponse<D>) => void) => void
    }

export class Validate {
  //
  static responseType<D>(networkCall: () => Promise<AxiosResponse<D>>, Codec: z.ZodType<D>, modelName: string) {
    return wrapNetworkCallSafely<D>(async () => {
      const response = await networkCall()
      const decodeResult = Codec.safeParse(response.data)
      if (!decodeResult.success) {
        throw new DecodeError({ error: decodeResult.error, response, modelName })
      }
      return response
    })
  }

  static safeParse<D>(data: unknown, Codec: z.ZodType<D>): D | null {
    const result = Codec.safeParse(data)
    if (result.success) {
      return result.data
    }
    return null
  }
}

async function wrapNetworkCallSafely<D>(networkCallFunction: () => Promise<AxiosResponse<D>>): Promise<IResponse<D>> {
  try {
    const response = await networkCallFunction()
    // Cleanup so we avoid polluting the response
    // @ts-ignore
    delete response.headers // perhaps this may be required?
    // @ts-ignore
    delete response.statusText
    // @ts-ignore
    delete response.config // axios specific
    delete response.request
    return { response, error: null }
  } catch (error) {
    return { response: null, error: <Error>error }
  }
}

export class DecodeError extends Error {
  constructor({ error, response, modelName }: { error: ZodError; response: AxiosResponse; modelName: string }) {
    const msg = `response from url "${response.config.url}" doesn't match model "${modelName}"`
    super(msg)

    Logger.error(msg, error)
  }
}
