/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DiffCacheObject } from './DiffCacheObject.js'

export const RetrieveDiffCacheResponse = z.object({
  baseUrls: z.array(z.string()),
  diffCaches: z.array(DiffCacheObject),
  summaryFile: z.string()
})

export interface RetrieveDiffCacheResponse extends z.TypeOf<typeof RetrieveDiffCacheResponse> {}
