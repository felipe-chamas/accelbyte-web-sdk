/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DebitRequest = z.object({ amount: z.number().int(), reason: z.string().nullish() })

export interface DebitRequest extends z.TypeOf<typeof DebitRequest> {}
