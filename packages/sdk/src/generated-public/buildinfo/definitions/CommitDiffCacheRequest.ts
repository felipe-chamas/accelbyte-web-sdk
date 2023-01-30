/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CommitDiffCacheRequest = z.object({ sourceBuildId: z.string().nullish(), destinationBuildId: z.string().nullish() })

export type CommitDiffCacheRequest = z.TypeOf<typeof CommitDiffCacheRequest>
