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
import { UserStatCycleItemPagingSlicedResult } from '../definitions/UserStatCycleItemPagingSlicedResult.js'

export class UserStatisticCycle$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * List user&#39;s statCycleItems by statCycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycle items&lt;/li&gt;&lt;/ul&gt;
   */
  getStatCycleitemsMeUsers_ByCycleId(
    cycleId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; statCodes?: string[] }
  ): Promise<IResponseWithSync<UserStatCycleItemPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/me/statCycles/{cycleId}/statCycleitems'
      .replace('{namespace}', this.namespace)
      .replace('{cycleId}', cycleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserStatCycleItemPagingSlicedResult, 'UserStatCycleItemPagingSlicedResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * List user&#39;s statCycleItems by statCycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycle items&lt;/li&gt;&lt;/ul&gt;
   */
  getStatCycleitems_ByUserId_ByCycleId(
    userId: string,
    cycleId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; statCodes?: string | null }
  ): Promise<IResponseWithSync<UserStatCycleItemPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/{userId}/statCycles/{cycleId}/statCycleitems'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{cycleId}', cycleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserStatCycleItemPagingSlicedResult, 'UserStatCycleItemPagingSlicedResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
