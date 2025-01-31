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
import { Achievements$ } from './endpoints/Achievements$.js'
import { PublicAchievementResponse } from './definitions/PublicAchievementResponse.js'
import { PublicAchievementsResponse } from './definitions/PublicAchievementsResponse.js'

export function AchievementsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * &lt;p&gt;Required permission &lt;code&gt;NAMESPACE:{namespace}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
   */
  async function getAchievements(queryParams: {
    language: string | null
    global?: boolean | null
    limit?: number
    offset?: number
    sortBy?:
      | 'listOrder'
      | 'listOrder:asc'
      | 'listOrder:desc'
      | 'createdAt'
      | 'createdAt:asc'
      | 'createdAt:desc'
      | 'updatedAt'
      | 'updatedAt:asc'
      | 'updatedAt:desc'
    tags?: string[]
  }): Promise<PublicAchievementsResponse> {
    const $ = new Achievements$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getAchievements(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required permission &lt;code&gt;NAMESPACE:{namespace}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
   */
  async function getAchievement_ByAchievementCode(
    achievementCode: string,
    queryParams: { language: string | null }
  ): Promise<PublicAchievementResponse> {
    const $ = new Achievements$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getAchievement_ByAchievementCode(achievementCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getAchievements,
    getAchievement_ByAchievementCode
  }
}
