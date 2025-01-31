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
import { RetrieveDiffCacheResponse } from '../definitions/RetrieveDiffCacheResponse.js'

export class Caching$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * This API is used to retrieve detailed diff cache.&lt;br/&gt;The response will contains list of diff cache files along with its download url.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;/ul&gt;
   */
  getDestCacheDiff_BySourceBuildId_ByDestinationBuildId(
    sourceBuildId: string,
    destinationBuildId: string
  ): Promise<IResponseWithSync<RetrieveDiffCacheResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/diff/cache/source/{sourceBuildId}/dest/{destinationBuildId}'
      .replace('{namespace}', this.namespace)
      .replace('{sourceBuildId}', sourceBuildId)
      .replace('{destinationBuildId}', destinationBuildId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RetrieveDiffCacheResponse, 'RetrieveDiffCacheResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
