/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EventType = z.object({ Description: z.string(), EventType: z.number().int() })

export interface EventType extends z.TypeOf<typeof EventType> {}
