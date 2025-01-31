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
import { ClaimableUserSeasonInfo } from '../definitions/ClaimableUserSeasonInfo.js'
import { LocalizedSeasonInfo } from '../definitions/LocalizedSeasonInfo.js'

export class Season$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * This API is used to get current published season, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: localized season data&lt;/li&gt;&lt;/ul&gt;
   */
  getSeasonsCurrent(queryParams?: { language?: string | null }): Promise<IResponseWithSync<LocalizedSeasonInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/seasonpass/public/namespaces/{namespace}/seasons/current'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, LocalizedSeasonInfo, 'LocalizedSeasonInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to get current user season data, it will auto enroll if there&#39;s no user season but active published season exist, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
   */
  getSeasonsCurrentData_ByUserId(userId: string): Promise<IResponseWithSync<ClaimableUserSeasonInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/public/namespaces/{namespace}/users/{userId}/seasons/current/data'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ClaimableUserSeasonInfo, 'ClaimableUserSeasonInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to get user season data, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
   */
  getData_ByUserId_BySeasonId(userId: string, seasonId: string): Promise<IResponseWithSync<ClaimableUserSeasonInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/public/namespaces/{namespace}/users/{userId}/seasons/{seasonId}/data'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{seasonId}', seasonId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ClaimableUserSeasonInfo, 'ClaimableUserSeasonInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
