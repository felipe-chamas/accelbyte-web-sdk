/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { TransactionAmountDetails } from './TransactionAmountDetails.js'

export const WalletTransactionInfo = z.object({
  amount: z.number().int(),
  reason: z.string().nullish(),
  namespace: z.string(),
  userId: z.string(),
  operator: z.string(),
  walletAction: z.enum(['CREDIT', 'PAYMENT', 'DEBIT']).nullish(),
  currencyCode: z.string(),
  balanceSource: z.string().nullish(),
  transactionAmountDetails: z.array(TransactionAmountDetails).nullish(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export interface WalletTransactionInfo extends z.TypeOf<typeof WalletTransactionInfo> {}
