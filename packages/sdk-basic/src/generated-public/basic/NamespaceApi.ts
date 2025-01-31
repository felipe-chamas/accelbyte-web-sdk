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
import { Namespace$ } from './endpoints/Namespace$.js'
import { NamespaceInfoArray } from './definitions/NamespaceInfoArray.js'
import { NamespacePublisherInfo } from './definitions/NamespacePublisherInfo.js'

export function NamespaceApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Get all namespaces.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11303&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of namespaces&lt;/li&gt;&lt;/ul&gt;
   */
  async function getNamespaces(queryParams?: { activeOnly?: boolean | null }): Promise<NamespaceInfoArray> {
    const $ = new Namespace$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getNamespaces(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get namespace info related publisher namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;NAMESPACE:{namespace}:NAMESPACE&#34;&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11305&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Namespace info related publisher namespace&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPublisher(): Promise<NamespacePublisherInfo> {
    const $ = new Namespace$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPublisher()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getNamespaces,
    getPublisher
  }
}
