/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ReadyPlayerMe = z.object({
  renders: z.array(z.string())
})
export type ReadyPlayerMe = z.TypeOf<typeof ReadyPlayerMe>
