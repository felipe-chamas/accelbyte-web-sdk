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
import { CreateDeploymentRequest } from '../definitions/CreateDeploymentRequest.js'
import { DeploymentWithOverride } from '../definitions/DeploymentWithOverride.js'
import { ListDeploymentResponse } from '../definitions/ListDeploymentResponse.js'

export class DeploymentConfig$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a all deployments in a namespace Parameter Offset and Count is Required
   */
  getConfigsDeployments(queryParams: {
    count: number
    offset: number
    name?: string | null
  }): Promise<IResponseWithSync<ListDeploymentResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/configs/deployments'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ListDeploymentResponse, 'ListDeploymentResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server deployment in a namespace
   */
  deleteConfigDeployment_ByDeployment(deployment: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/configs/deployments/{deployment}'
      .replace('{namespace}', this.namespace)
      .replace('{deployment}', deployment)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint create a dedicated servers deployment in a namespace.
   */
  createConfigDeployment_ByDeployment(deployment: string, data: CreateDeploymentRequest): Promise<IResponse<DeploymentWithOverride>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/configs/deployments/{deployment}'
      .replace('{namespace}', this.namespace)
      .replace('{deployment}', deployment)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, DeploymentWithOverride, 'DeploymentWithOverride')
  }
}
