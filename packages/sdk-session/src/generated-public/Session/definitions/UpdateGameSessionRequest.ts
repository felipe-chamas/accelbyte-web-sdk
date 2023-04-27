/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Team } from './Team.js'

export const UpdateGameSessionRequest = z.object({
  attributes: z.record(z.any()),
  backfillTicketID: z.string(),
  clientVersion: z.string(),
  deployment: z.string(),
  inactiveTimeout: z.number().int(),
  inviteTimeout: z.number().int(),
  joinability: z.string(),
  matchPool: z.string(),
  maxPlayers: z.number().int(),
  minPlayers: z.number().int(),
  requestedRegions: z.array(z.string()),
  teams: z.array(Team),
  ticketIDs: z.array(z.string()),
  type: z.string(),
  version: z.number().int()
})

export interface UpdateGameSessionRequest extends z.TypeOf<typeof UpdateGameSessionRequest> {}
