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
import { PaginatedGetTagResponse } from '../definitions/PaginatedGetTagResponse.js'

export class PublicTag$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Publicly accessible
   */
  getTags(queryParams?: { limit?: number; offset?: number }): Promise<IResponseWithSync<PaginatedGetTagResponse>> {
    const params = { limit: 1000, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/tags'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PaginatedGetTagResponse, 'PaginatedGetTagResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
