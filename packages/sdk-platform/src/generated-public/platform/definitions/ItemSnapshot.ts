/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { LootBoxConfig } from './LootBoxConfig.js'
import { OptionBoxConfig } from './OptionBoxConfig.js'
import { Recurring } from './Recurring.js'
import { RegionDataItem } from './RegionDataItem.js'
import { SaleConfig } from './SaleConfig.js'

export const ItemSnapshot = z.object({
  itemId: z.string(),
  appId: z.string().nullish(),
  appType: z.enum(['GAME', 'SOFTWARE', 'DLC', 'DEMO']).nullish(),
  seasonType: z.enum(['PASS', 'TIER']).nullish(),
  baseAppId: z.string().nullish(),
  sku: z.string().nullish(),
  namespace: z.string(),
  name: z.string(),
  listable: z.boolean().nullish(),
  purchasable: z.boolean().nullish(),
  sectionExclusive: z.boolean().nullish(),
  entitlementType: z.enum(['DURABLE', 'CONSUMABLE']),
  useCount: z.number().int().nullish(),
  stackable: z.boolean().nullish(),
  itemType: z.enum([
    'APP',
    'COINS',
    'INGAMEITEM',
    'BUNDLE',
    'CODE',
    'SUBSCRIPTION',
    'SEASON',
    'MEDIA',
    'OPTIONBOX',
    'EXTENSION',
    'LOOTBOX'
  ]),
  thumbnailUrl: z.string().nullish(),
  targetNamespace: z.string().nullish(),
  targetCurrencyCode: z.string().nullish(),
  targetItemId: z.string().nullish(),
  title: z.string(),
  description: z.string().nullish(),
  regionDataItem: RegionDataItem.nullish(),
  recurring: Recurring.nullish(),
  itemIds: z.array(z.string()).nullish(),
  itemQty: z.record(z.number().int()).nullish(),
  features: z.array(z.string()).nullish(),
  maxCountPerUser: z.number().int().nullish(),
  maxCount: z.number().int().nullish(),
  boothName: z.string().nullish(),
  region: z.string(),
  language: z.string(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  optionBoxConfig: OptionBoxConfig.nullish(),
  lootBoxConfig: LootBoxConfig.nullish(),
  sellable: z.boolean().nullish(),
  saleConfig: SaleConfig.nullish()
})

export interface ItemSnapshot extends z.TypeOf<typeof ItemSnapshot> {}
