/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Achievement = z.object({ id: z.string().nullish(), value: z.number().int().nullish() })

export interface Achievement extends z.TypeOf<typeof Achievement> {}
