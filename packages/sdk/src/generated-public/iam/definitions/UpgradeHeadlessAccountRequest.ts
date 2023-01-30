/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpgradeHeadlessAccountRequest = z.object({ LoginID: z.string(), Password: z.string() })

export type UpgradeHeadlessAccountRequest = z.TypeOf<typeof UpgradeHeadlessAccountRequest>
