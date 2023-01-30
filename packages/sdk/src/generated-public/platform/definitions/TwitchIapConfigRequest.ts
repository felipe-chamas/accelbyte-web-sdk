/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TwitchIapConfigRequest = z.object({
  clientId: z.string().nullish(),
  clientSecret: z.string().nullish(),
  organizationId: z.string().nullish()
})

export type TwitchIapConfigRequest = z.TypeOf<typeof TwitchIapConfigRequest>
