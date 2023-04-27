/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EntitlementLootBoxReward } from './EntitlementLootBoxReward.js'
import { ItemSnapshot } from './ItemSnapshot.js'

export const EntitlementDecrementResult = z.object({
  id: z.string(),
  namespace: z.string(),
  clazz: z.enum(['APP', 'ENTITLEMENT', 'CODE', 'SUBSCRIPTION', 'MEDIA', 'OPTIONBOX', 'LOOTBOX']),
  type: z.enum(['DURABLE', 'CONSUMABLE']),
  status: z.enum(['ACTIVE', 'INACTIVE', 'CONSUMED', 'REVOKED', 'SOLD']),
  appId: z.string().nullish(),
  appType: z.enum(['GAME', 'SOFTWARE', 'DLC', 'DEMO']).nullish(),
  sku: z.string().nullish(),
  userId: z.string(),
  storeId: z.string().nullish(),
  itemId: z.string(),
  grantedCode: z.string().nullish(),
  itemNamespace: z.string(),
  name: z.string(),
  features: z.array(z.string()).nullish(),
  useCount: z.number().int().nullish(),
  source: z.enum(['PURCHASE', 'IAP', 'PROMOTION', 'ACHIEVEMENT', 'REFERRAL_BONUS', 'REDEEM_CODE', 'REWARD', 'GIFT', 'OTHER']),
  itemSnapshot: ItemSnapshot.nullish(),
  startDate: z.string().nullish(),
  endDate: z.string().nullish(),
  stackable: z.boolean().nullish(),
  grantedAt: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  requestId: z.string().nullish(),
  replayed: z.boolean().nullish(),
  rewards: z.array(EntitlementLootBoxReward).nullish()
})

export interface EntitlementDecrementResult extends z.TypeOf<typeof EntitlementDecrementResult> {}
