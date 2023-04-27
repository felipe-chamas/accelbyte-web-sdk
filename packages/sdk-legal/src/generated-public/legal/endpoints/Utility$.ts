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
import { LegalReadinessStatusResponse } from '../definitions/LegalReadinessStatusResponse.js'

export class Utility$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Readiness status defined as at least one legal basePolicy is present and having active basePolicy.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:LEGAL", action=2 (READ)</li></ul>
   */
  getReadiness(): Promise<IResponseWithSync<LegalReadinessStatusResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/readiness'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, LegalReadinessStatusResponse, 'LegalReadinessStatusResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
