/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MatchingAlly } from './MatchingAlly.js'

export const MockMatch = z.object({
  channel: z.string(),
  client_version: z.string(),
  deployment: z.string(),
  error_code: z.number().int(),
  error_message: z.string(),
  game_mode: z.string(),
  is_mock: z.string(),
  joinable: z.boolean().nullish(),
  match_id: z.string(),
  matching_allies: z.array(MatchingAlly),
  mmr_distance: z.number().int(),
  namespace: z.string(),
  party_attributes: z.record(z.any()),
  party_id: z.string().nullish(),
  queued_at: z.number().int(),
  region: z.string(),
  server_name: z.string(),
  status: z.string(),
  ticket_id: z.string(),
  time_to_match_seconds: z.number().int(),
  updated_at: z.string()
})

export interface MockMatch extends z.TypeOf<typeof MockMatch> {}
