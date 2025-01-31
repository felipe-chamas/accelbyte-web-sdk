/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { UpdatePlayTimeWeightRequest } from '../definitions/UpdatePlayTimeWeightRequest.js'
import { UpdatePlayerPlaytimeWeightResponse } from '../definitions/UpdatePlayerPlaytimeWeightResponse.js'

export class SocialMatchmaking$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Required Permission: NAMESPACE:{namespace}:MATCHMAKING:CHANNEL [UPDATE] Required Scope: social Update a connection weight between player and playtime. This endpoint is intended to be called by admin for debugging purpose on social matchmaking rule.
   */
  patchSocialPlaytimeWeight(data: UpdatePlayTimeWeightRequest): Promise<IResponse<UpdatePlayerPlaytimeWeightResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/matchmaking/social/playtime/namespaces/{namespace}/weight'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => resultPromise, UpdatePlayerPlaytimeWeightResponse, 'UpdatePlayerPlaytimeWeightResponse')
  }
}
