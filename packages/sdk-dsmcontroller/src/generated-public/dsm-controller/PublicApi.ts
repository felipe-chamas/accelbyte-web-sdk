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
import { DefaultProvider } from './definitions/DefaultProvider.js'
import { Public$ } from './endpoints/Public$.js'

export function PublicApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * This endpoints returns list of supported providers. Armada is the default provider.
   */
  async function getProviders(): Promise<unknown> {
    const $ = new Public$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getProviders()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoints returns the default provider.
   */
  async function getProviderDefault(): Promise<DefaultProvider> {
    const $ = new Public$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getProviderDefault()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint returns the providers by region.
   */
  async function getProviderRegion_ByRegion(region: string): Promise<DefaultProvider> {
    const $ = new Public$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getProviderRegion_ByRegion(region)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getProviders,
    getProviderDefault,
    getProviderRegion_ByRegion
  }
}
