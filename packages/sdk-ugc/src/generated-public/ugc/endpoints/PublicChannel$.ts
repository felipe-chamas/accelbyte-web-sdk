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
import { ChannelResponse } from '../definitions/ChannelResponse.js'
import { PaginatedGetChannelResponse } from '../definitions/PaginatedGetChannelResponse.js'
import { PublicChannelRequest } from '../definitions/PublicChannelRequest.js'
import { UpdateChannelRequest } from '../definitions/UpdateChannelRequest.js'

export class PublicChannel$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CHANNEL [READ]&lt;/b&gt;
   */
  getChannels_ByUserId(
    userId: string,
    queryParams?: { limit?: number; name?: string | null; offset?: number }
  ): Promise<IResponseWithSync<PaginatedGetChannelResponse>> {
    const params = { limit: 1000, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/channels'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PaginatedGetChannelResponse, 'PaginatedGetChannelResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CHANNEL [CREATE]&lt;/b&gt;
   */
  createChannel_ByUserId(userId: string, data: PublicChannelRequest): Promise<IResponse<ChannelResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/channels'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, ChannelResponse, 'ChannelResponse')
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CHANNEL [DELETE]&lt;/b&gt;
   */
  deleteChannel_ByUserId_ByChannelId(userId: string, channelId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CHANNEL [UPDATE]&lt;/b&gt;
   */
  updateChannel_ByUserId_ByChannelId(userId: string, channelId: string, data: UpdateChannelRequest): Promise<IResponse<ChannelResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, ChannelResponse, 'ChannelResponse')
  }
}
