/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentRequest = z.object({
  amount: z.number().int(),
  walletPlatform: z.enum(['Epic', 'GooglePlay', 'IOS', 'Nintendo', 'Other', 'Playstation', 'Steam', 'Xbox']).nullish()
})

export interface PaymentRequest extends z.TypeOf<typeof PaymentRequest> {}
