/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RegisteredDomain = z.object({
  affectedClientIDs: z.array(z.string()),
  domain: z.string(),
  namespaces: z.array(z.string()),
  roleId: z.string()
})

export interface RegisteredDomain extends z.TypeOf<typeof RegisteredDomain> {}
