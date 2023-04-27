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
import { CreatePartyRequest } from './definitions/CreatePartyRequest.js'
import { JoinByCodeRequest } from './definitions/JoinByCodeRequest.js'
import { KickResponse } from './definitions/KickResponse.js'
import { Party$ } from './endpoints/Party$.js'
import { PartySessionResponse } from './definitions/PartySessionResponse.js'
import { PartySessionResponseArray } from './definitions/PartySessionResponseArray.js'
import { PromoteLeaderRequest } from './definitions/PromoteLeaderRequest.js'
import { SessionInviteRequest } from './definitions/SessionInviteRequest.js'
import { UpdatePartyRequest } from './definitions/UpdatePartyRequest.js'

export function PartyApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * A join code will be autogenerated if the party is joinable. Creator will be removed from previous party (if any) and automatically join into the created party as a leader. Party members will be sent invitation to join the party. Session configuration name is optional. Default configuration name if empty: { "name": "default", "type": "NONE", "joinability": "OPEN", "minPlayers": 1, "maxPlayers": 8, "inviteTimeout": 60, "inactiveTimeout": 60, "textChat": false } Supported platforms: 1. STEAM 2. PSN 3. XBOX Reserved attributes key: 1. preference: used to store preference of the leader and it is non-replaceable to keep the initial behavior of the session regardless the leader changes. 2. NATIVESESSIONTITLE: used for session sync, to define name of session displayed on PlayStation system UI.
   */
  async function createParty(data: CreatePartyRequest): Promise<PartySessionResponse> {
    const $ = new Party$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createParty(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query user's parties. By default, API will return a list of user's active parties.
   */
  async function getUsersMeParties(queryParams?: {
    status?: string | null
    orderBy?: string | null
    order?: string | null
  }): Promise<PartySessionResponseArray> {
    const $ = new Party$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeParties(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get party details.
   */
  async function getParty_ByPartyId(partyId: string): Promise<PartySessionResponse> {
    const $ = new Party$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getParty_ByPartyId(partyId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Updates party blob, this endpoint will override stored party data. Join type can only be updated by the party's leader. To update only specified fields, please use following endpoint: method : PATCH API : /session/v1/public/namespaces/{namespace}/gamesessions/{sessionId} Reserved attributes key: 1. preference: used to store preference of the leader and it is non-replaceable to keep the initial behavior of the session regardless the leader changes. 2. NATIVESESSIONTITLE: used for session sync, to define name of session displayed on PlayStation system UI.
   */
  async function updateParty_ByPartyId(partyId: string, data: UpdatePartyRequest): Promise<PartySessionResponse> {
    const $ = new Party$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateParty_ByPartyId(partyId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update specified fields from party data. Note: Join type can only be updated by the party's leader. Reserved attributes key: 1. preference: used to store preference of the leader and it is non-replaceable to keep the initial behavior of the session regardless the leader changes. 2. NATIVESESSIONTITLE: used for session sync, to define name of session displayed on PlayStation system UI.
   */
  async function patchParty_ByPartyId(partyId: string, data: UpdatePartyRequest): Promise<PartySessionResponse> {
    const $ = new Party$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchParty_ByPartyId(partyId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Generate a new code for the party. Only leader can generate a code.
   */
  async function createCode_ByPartyId(partyId: string): Promise<PartySessionResponse> {
    const $ = new Party$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createCode_ByPartyId(partyId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Revoke code of the party. Only leader can revoke a code.
   */
  async function deleteCode_ByPartyId(partyId: string): Promise<PartySessionResponse> {
    const $ = new Party$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteCode_ByPartyId(partyId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Invite a user to a party. platformID represents the native platform of the invitee. API will return the corresponding native platform's userID. supported platforms: - STEAM - XBOX - PSN
   */
  async function createInvite_ByPartyId(partyId: string, data: SessionInviteRequest): Promise<unknown> {
    const $ = new Party$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createInvite_ByPartyId(partyId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Promotes a party member to be a party leader. Only leader can promote a new leader.
   */
  async function createLeader_ByPartyId(partyId: string, data: PromoteLeaderRequest): Promise<PartySessionResponse> {
    const $ = new Party$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createLeader_ByPartyId(partyId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Join a party by code. The user can join a party as long as the code is valid
   */
  async function createPartyUserMeJoinCode(data: JoinByCodeRequest): Promise<PartySessionResponse> {
    const $ = new Party$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createPartyUserMeJoinCode(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Join a party. The user can either join a party they have been invited to, or any party with an "open" joinable setting.
   */
  async function createUserMeJoin_ByPartyId(partyId: string): Promise<PartySessionResponse> {
    const $ = new Party$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeJoin_ByPartyId(partyId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Leave a party
   */
  async function deleteUserMeLeave_ByPartyId(partyId: string): Promise<unknown> {
    const $ = new Party$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteUserMeLeave_ByPartyId(partyId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Reject a party invitation.
   */
  async function deleteUserMeReject_ByPartyId(partyId: string): Promise<unknown> {
    const $ = new Party$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteUserMeReject_ByPartyId(partyId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Kick a player from a party. Requires invoker to be the party leader.
   */
  async function deleteKick_ByPartyId_ByUserId(partyId: string, userId: string): Promise<KickResponse> {
    const $ = new Party$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteKick_ByPartyId_ByUserId(partyId, userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createParty,
    getUsersMeParties,
    getParty_ByPartyId,
    updateParty_ByPartyId,
    patchParty_ByPartyId,
    createCode_ByPartyId,
    deleteCode_ByPartyId,
    createInvite_ByPartyId,
    createLeader_ByPartyId,
    createPartyUserMeJoinCode,
    createUserMeJoin_ByPartyId,
    deleteUserMeLeave_ByPartyId,
    deleteUserMeReject_ByPartyId,
    deleteKick_ByPartyId_ByUserId
  }
}
