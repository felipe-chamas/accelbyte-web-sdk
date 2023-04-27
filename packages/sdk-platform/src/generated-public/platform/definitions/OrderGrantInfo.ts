/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreditSummary } from './CreditSummary.js'
import { EntitlementSummary } from './EntitlementSummary.js'

export const OrderGrantInfo = z.object({ entitlements: z.array(EntitlementSummary).nullish(), credits: z.array(CreditSummary).nullish() })

export interface OrderGrantInfo extends z.TypeOf<typeof OrderGrantInfo> {}
