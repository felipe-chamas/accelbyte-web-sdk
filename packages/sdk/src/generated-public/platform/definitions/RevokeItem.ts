/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RevokeItem = z.object({
  itemIdentityType: z.enum(['ITEM_ID', 'ITEM_SKU']).nullish(),
  itemIdentity: z.string().nullish(),
  origin: z.enum(['Playstation', 'Xbox', 'Steam', 'Epic', 'IOS', 'GooglePlay', 'Twitch', 'Nintendo', 'System', 'Other']).nullish()
})

export type RevokeItem = z.TypeOf<typeof RevokeItem>
