/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { ListMatchFunctionsResponse } from '../definitions/ListMatchFunctionsResponse.js'
import { MatchFunctionConfig } from '../definitions/MatchFunctionConfig.js'
import { MatchFunctionRequest } from '../definitions/MatchFunctionRequest.js'

export class MatchFunctions$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Required Permission: NAMESPACE:{namespace}:MATCHMAKING:FUNCTIONS [READ] Required Scope: social List existing match functions.
   */
  getMatchFunctions(queryParams?: { limit?: number; offset?: number }): Promise<IResponseWithSync<ListMatchFunctionsResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-functions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ListMatchFunctionsResponse, 'ListMatchFunctionsResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   *  Required Permission: NAMESPACE:{namespace}:MATCHMAKING:FUNCTIONS [CREATE] Required Scope: social Creates a new matchmaking function.
   */
  createMatchFunction(data: MatchFunctionRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-functions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required Permission: NAMESPACE:{namespace}:MATCHMAKING:FUNCTIONS [DELETE] Required Scope: social Deletes an existing match function.
   */
  deleteMatchFunction_ByName(name: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-functions/{name}'.replace('{namespace}', this.namespace).replace('{name}', name)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   *  Required Permission: NAMESPACE:{namespace}:MATCHMAKING:FUNCTIONS [UPDATE] Required Scope: social Update existing matchmaking function.
   */
  updateMatchFunction_ByName(name: string, data: MatchFunctionRequest): Promise<IResponse<MatchFunctionConfig>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-functions/{name}'.replace('{namespace}', this.namespace).replace('{name}', name)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, MatchFunctionConfig, 'MatchFunctionConfig')
  }
}
