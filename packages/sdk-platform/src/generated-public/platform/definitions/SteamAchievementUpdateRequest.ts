/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Achievement } from './Achievement.js'

export const SteamAchievementUpdateRequest = z.object({ achievements: z.array(Achievement).nullish(), steamUserId: z.string().nullish() })

export interface SteamAchievementUpdateRequest extends z.TypeOf<typeof SteamAchievementUpdateRequest> {}
