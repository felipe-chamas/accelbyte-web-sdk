/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const MatchTicketRequest = z.object({
  attributes: z.record(z.any()),
  latencies: z.record(z.number().int()),
  matchPool: z.string(),
  sessionID: z.string()
})

export interface MatchTicketRequest extends z.TypeOf<typeof MatchTicketRequest> {}
