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
import { Attribute } from '../definitions/Attribute.js'
import { GameProfileHeaderArray } from '../definitions/GameProfileHeaderArray.js'
import { GameProfileInfo } from '../definitions/GameProfileInfo.js'
import { GameProfileRequest } from '../definitions/GameProfileRequest.js'
import { UserGameProfilesArray } from '../definitions/UserGameProfilesArray.js'

export class GameProfile$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Returns all profiles for specified users.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:GAMEPROFILE&#34;, action=2 (READ) &lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of profiles&lt;/ul&gt;
   */
  getProfiles(queryParams: { userIds: string[] }): Promise<IResponseWithSync<UserGameProfilesArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/social/public/namespaces/{namespace}/profiles'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserGameProfilesArray, 'UserGameProfilesArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Returns all profiles&#39; header for a user.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:GAMEPROFILE&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of profiles&lt;/li&gt;&lt;/ul&gt;
   */
  getProfiles_ByUserId(userId: string): Promise<IResponseWithSync<GameProfileHeaderArray>> {
    const params = {} as SDKRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/profiles'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GameProfileHeaderArray, 'GameProfileHeaderArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Create new profile for user.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/li&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:GAMEPROFILE&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/li&gt;: created game profile&lt;/li&gt;&lt;/ul&gt;
   */
  createProfile_ByUserId(userId: string, data: GameProfileRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/profiles'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Deletes game profile.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:GAMEPROFILE&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  deleteProfile_ByUserId_ByProfileId(userId: string, profileId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/profiles/{profileId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{profileId}', profileId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Returns profile for a user.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:GAMEPROFILE&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: game profile info&lt;/li&gt;&lt;/ul&gt;
   */
  getProfile_ByUserId_ByProfileId(userId: string, profileId: string): Promise<IResponseWithSync<GameProfileInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/profiles/{profileId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{profileId}', profileId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GameProfileInfo, 'GameProfileInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Updates user game profile, returns updated profile.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:GAMEPROFILE&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated game profile&lt;/li&gt;&lt;/ul&gt;
   */
  updateProfile_ByUserId_ByProfileId(userId: string, profileId: string, data: GameProfileRequest): Promise<IResponse<GameProfileInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/profiles/{profileId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{profileId}', profileId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, GameProfileInfo, 'GameProfileInfo')
  }

  /**
   * Returns game profile attribute.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:GAMEPROFILE&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: attribute info&lt;/li&gt;&lt;/ul&gt;
   */
  getAttribute_ByUserId_ByProfileId_ByAttributeName(
    userId: string,
    profileId: string,
    attributeName: string
  ): Promise<IResponseWithSync<Attribute>> {
    const params = {} as SDKRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/profiles/{profileId}/attributes/{attributeName}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{profileId}', profileId)
      .replace('{attributeName}', attributeName)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, Attribute, 'Attribute')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Updates game profile attribute, returns updated profile.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:GAMEPROFILE&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated attribute&lt;/li&gt;&lt;/ul&gt;
   */
  updateAttribute_ByUserId_ByProfileId_ByAttributeName(
    userId: string,
    profileId: string,
    attributeName: string,
    data: Attribute
  ): Promise<IResponse<GameProfileInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/profiles/{profileId}/attributes/{attributeName}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{profileId}', profileId)
      .replace('{attributeName}', attributeName)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, GameProfileInfo, 'GameProfileInfo')
  }
}
