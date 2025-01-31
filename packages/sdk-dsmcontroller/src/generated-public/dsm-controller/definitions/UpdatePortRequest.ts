/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdatePortRequest = z.object({ name: z.string(), port: z.number().int() })

export interface UpdatePortRequest extends z.TypeOf<typeof UpdatePortRequest> {}
