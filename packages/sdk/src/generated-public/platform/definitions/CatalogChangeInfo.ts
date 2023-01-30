/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CatalogChangeInfo = z.object({
  changeId: z.string(),
  namespace: z.string(),
  storeId: z.string(),
  categoryPath: z.string().nullish(),
  itemId: z.string().nullish(),
  itemType: z
    .enum(['APP', 'COINS', 'INGAMEITEM', 'BUNDLE', 'CODE', 'SUBSCRIPTION', 'SEASON', 'MEDIA', 'OPTIONBOX', 'EXTENSION', 'LOOTBOX'])
    .nullish(),
  type: z.enum(['STORE', 'CATEGORY', 'ITEM', 'VIEW', 'SECTION']).nullish(),
  title: z.string().nullish(),
  sku: z.string().nullish(),
  action: z.enum(['CREATE', 'UPDATE', 'DELETE']),
  status: z.enum(['UNPUBLISHED', 'PUBLISHED']),
  publishedAt: z.string().nullish(),
  description: z.string().nullish(),
  selected: z.boolean(),
  viewId: z.string().nullish(),
  sectionId: z.string().nullish(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type CatalogChangeInfo = z.TypeOf<typeof CatalogChangeInfo>
