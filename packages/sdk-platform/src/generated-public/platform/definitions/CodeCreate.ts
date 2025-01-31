/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CodeCreate = z.object({ quantity: z.number().int() })

export interface CodeCreate extends z.TypeOf<typeof CodeCreate> {}
