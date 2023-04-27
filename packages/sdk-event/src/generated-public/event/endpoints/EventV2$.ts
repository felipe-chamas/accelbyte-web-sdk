/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { EventResponseV2 } from '../definitions/EventResponseV2.js'

export class EventV2$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * <p>Requires valid user access token</p>
   */
  getEvent_ByUserId(
    userId: string,
    queryParams?: { pageSize?: number; startDate?: string | null; endDate?: string | null; offset?: number; eventName?: string | null }
  ): Promise<IResponseWithSync<EventResponseV2>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/event/v2/public/namespaces/{namespace}/users/{userId}/event'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, EventResponseV2, 'EventResponseV2')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>Available Type: </p> <ul> <li>email</li> <li>password</li> <li>displayname</li> <li>dateofbirth</li> <li>country</li> <li>language</li> </ul> <p>Requires a valid user access token</p>
   */
  getEdithistory_ByUserId(
    userId: string,
    queryParams?: { pageSize?: number; startDate?: string | null; endDate?: string | null; offset?: number; type?: string | null }
  ): Promise<IResponseWithSync<EventResponseV2>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/event/v2/public/namespaces/{namespace}/users/{userId}/edithistory'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, EventResponseV2, 'EventResponseV2')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
