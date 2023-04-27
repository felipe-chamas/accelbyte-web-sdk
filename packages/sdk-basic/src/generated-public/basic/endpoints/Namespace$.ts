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
import { NamespaceInfoArray } from '../definitions/NamespaceInfoArray.js'
import { NamespacePublisherInfo } from '../definitions/NamespacePublisherInfo.js'

export class Namespace$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Get all namespaces.<br>Other detail info: <ul><li><i>Required permission</i>: login user</li><li><i>Action code</i>: 11303</li><li><i>Returns</i>: list of namespaces</li></ul>
   */
  getNamespaces(queryParams?: { activeOnly?: boolean | null }): Promise<IResponseWithSync<NamespaceInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/basic/v1/public/namespaces'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, NamespaceInfoArray, 'NamespaceInfoArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get namespace info related publisher namespace.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:NAMESPACE"</b>, action=2 <b>(READ)</b></li><li><i>Action code</i>: 11305</li><li><i>Returns</i>: Namespace info related publisher namespace</li></ul>
   */
  getPublisher(): Promise<IResponseWithSync<NamespacePublisherInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/publisher'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, NamespacePublisherInfo, 'NamespacePublisherInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
