/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { BulkAddFriendsRequest } from './definitions/BulkAddFriendsRequest.js'
import { Friends$ } from './endpoints/Friends$.js'
import { GetUserFriendsResponseArray } from './definitions/GetUserFriendsResponseArray.js'
import { GetUserIncomingFriendsResponseArray } from './definitions/GetUserIncomingFriendsResponseArray.js'
import { GetUserOutgoingFriendsResponseArray } from './definitions/GetUserOutgoingFriendsResponseArray.js'
import { ListBulkUserPlatformsResponse } from './definitions/ListBulkUserPlatformsResponse.js'
import { LoadIncomingFriendsWithTimeResponseArray } from './definitions/LoadIncomingFriendsWithTimeResponseArray.js'
import { LoadOutgoingFriendsWithTimeResponseArray } from './definitions/LoadOutgoingFriendsWithTimeResponseArray.js'
import { UserAcceptFriendRequest } from './definitions/UserAcceptFriendRequest.js'
import { UserCancelFriendRequest } from './definitions/UserCancelFriendRequest.js'
import { UserGetFriendshipStatusResponse } from './definitions/UserGetFriendshipStatusResponse.js'
import { UserRejectFriendRequest } from './definitions/UserRejectFriendRequest.js'
import { UserRequestFriendRequest } from './definitions/UserRequestFriendRequest.js'
import { UserUnfriendRequest } from './definitions/UserUnfriendRequest.js'

export function FriendsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  async function getFriendsMe(queryParams?: { limit?: number; offset?: number }): Promise<GetUserFriendsResponseArray> {
    const $ = new Friends$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getFriendsMe(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Client should provide either friendID or friendPublicID. If both are provided, friendID will be chosen to be used.
   */
  async function createFriendMeRequest(data: UserRequestFriendRequest): Promise<unknown> {
    const $ = new Friends$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createFriendMeRequest(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getFriendsMeIncoming(): Promise<GetUserIncomingFriendsResponseArray> {
    const $ = new Friends$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getFriendsMeIncoming()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getFriendsMeOutgoing(): Promise<GetUserOutgoingFriendsResponseArray> {
    const $ = new Friends$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getFriendsMeOutgoing()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createFriendMeUnfriend(data: UserUnfriendRequest): Promise<unknown> {
    const $ = new Friends$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createFriendMeUnfriend(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getFriendsMePlatforms(): Promise<ListBulkUserPlatformsResponse> {
    const $ = new Friends$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getFriendsMePlatforms()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getFriendsMeIncomingTime(): Promise<LoadIncomingFriendsWithTimeResponseArray> {
    const $ = new Friends$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getFriendsMeIncomingTime()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getFriendsMeOutgoingTime(): Promise<LoadOutgoingFriendsWithTimeResponseArray> {
    const $ = new Friends$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getFriendsMeOutgoingTime()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createFriendMeRequestAccept(data: UserAcceptFriendRequest): Promise<unknown> {
    const $ = new Friends$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createFriendMeRequestAccept(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createFriendMeRequestCancel(data: UserCancelFriendRequest): Promise<unknown> {
    const $ = new Friends$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createFriendMeRequestCancel(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createFriendMeRequestReject(data: UserRejectFriendRequest): Promise<unknown> {
    const $ = new Friends$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createFriendMeRequestReject(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getFriendMeStatu_ByFriendId(friendId: string): Promise<UserGetFriendshipStatusResponse> {
    const $ = new Friends$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getFriendMeStatu_ByFriendId(friendId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission : &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:FRIENDS [CREATE]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;friends request in a namespace.
   */
  async function createAddBulkFriend_ByUserId(userId: string, data: BulkAddFriendsRequest): Promise<unknown> {
    const $ = new Friends$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createAddBulkFriend_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getFriendsMe,
    createFriendMeRequest,
    getFriendsMeIncoming,
    getFriendsMeOutgoing,
    createFriendMeUnfriend,
    getFriendsMePlatforms,
    getFriendsMeIncomingTime,
    getFriendsMeOutgoingTime,
    createFriendMeRequestAccept,
    createFriendMeRequestCancel,
    createFriendMeRequestReject,
    getFriendMeStatu_ByFriendId,
    createAddBulkFriend_ByUserId
  }
}
