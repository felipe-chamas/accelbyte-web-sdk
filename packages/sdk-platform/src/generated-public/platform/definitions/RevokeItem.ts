/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RevokeItem = z.object({
  itemIdentity: z.string().nullish(),
  itemIdentityType: z.enum(['ITEM_ID', 'ITEM_SKU']).nullish(),
  origin: z.enum(['Epic', 'GooglePlay', 'IOS', 'Nintendo', 'Other', 'Playstation', 'Steam', 'System', 'Twitch', 'Xbox']).nullish()
})

export interface RevokeItem extends z.TypeOf<typeof RevokeItem> {}
