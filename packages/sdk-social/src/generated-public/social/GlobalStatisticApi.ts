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
import { GlobalStatItemInfo } from './definitions/GlobalStatItemInfo.js'
import { GlobalStatItemPagingSlicedResult } from './definitions/GlobalStatItemPagingSlicedResult.js'
import { GlobalStatistic$ } from './endpoints/GlobalStatistic$.js'

export function GlobalStatisticApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * List global statItems by pagination.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:STATITEM&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
   */
  async function getGlobalstatitems(queryParams?: {
    limit?: number
    offset?: number
    statCodes?: string | null
  }): Promise<GlobalStatItemPagingSlicedResult> {
    const $ = new GlobalStatistic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getGlobalstatitems(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get global statItem by stat code.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:STATITEM&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: global stat item&lt;/li&gt;&lt;/ul&gt;
   */
  async function getGlobalstatitem_ByStatCode(statCode: string): Promise<GlobalStatItemInfo> {
    const $ = new GlobalStatistic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getGlobalstatitem_ByStatCode(statCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getGlobalstatitems,
    getGlobalstatitem_ByStatCode
  }
}
