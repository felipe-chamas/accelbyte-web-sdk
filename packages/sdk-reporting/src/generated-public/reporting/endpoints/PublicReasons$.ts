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
import { PublicReasonListResponse } from '../definitions/PublicReasonListResponse.js'
import { ReasonGroupListResponse } from '../definitions/ReasonGroupListResponse.js'

export class PublicReasons$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  getReasons(queryParams?: {
    group?: string | null
    limit?: number
    offset?: number
    title?: string | null
  }): Promise<IResponseWithSync<PublicReasonListResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/reporting/v1/public/namespaces/{namespace}/reasons'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PublicReasonListResponse, 'PublicReasonListResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Return list of reason groups ID and title under given namespace.
   */
  getReasonGroups(queryParams?: { limit?: number; offset?: number }): Promise<IResponseWithSync<ReasonGroupListResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/reporting/v1/public/namespaces/{namespace}/reasonGroups'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ReasonGroupListResponse, 'ReasonGroupListResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
