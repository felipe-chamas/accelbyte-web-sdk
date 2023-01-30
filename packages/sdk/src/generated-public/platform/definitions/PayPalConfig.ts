/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PayPalConfig = z.object({
  clientID: z.string().nullish(),
  clientSecret: z.string().nullish(),
  webHookId: z.string().nullish(),
  returnUrl: z.string().nullish()
})

export type PayPalConfig = z.TypeOf<typeof PayPalConfig>
