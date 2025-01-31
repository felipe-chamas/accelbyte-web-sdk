/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ResetPasswordRequestV3 = z.object({ code: z.string(), emailAddress: z.string(), newPassword: z.string() })

export interface ResetPasswordRequestV3 extends z.TypeOf<typeof ResetPasswordRequestV3> {}
