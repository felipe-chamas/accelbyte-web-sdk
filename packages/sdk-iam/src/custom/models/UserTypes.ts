/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserResponseV4 } from '../../generated-public/iam/definitions/UserResponseV4.js'

export const BanType = z.enum(['ORDER_AND_PAYMENT'])
export type BanType = z.infer<typeof BanType>

export const EligibleUser = UserResponseV4.pick({
  userId: true,
  emailVerified: true,
  displayName: true,
  country: true,
  emailAddress: true,
  bans: true,
  username: true,
  newEmailAddress: true,
  oldEmailAddress: true,
  deletionStatus: true
})

export type EligibleUser = z.TypeOf<typeof EligibleUser>
