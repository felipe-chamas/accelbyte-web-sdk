/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AllianceFlexingRule } from './AllianceFlexingRule.js'
import { BucketMmrRule } from './BucketMmrRule.js'
import { FlexingRule } from './FlexingRule.js'
import { MatchOptionRule } from './MatchOptionRule.js'
import { MatchingRule } from './MatchingRule.js'
import { UpdateAllianceRule } from './UpdateAllianceRule.js'
import { UpdateRulesetSubGameModes } from './UpdateRulesetSubGameModes.js'

export const UpdateRuleset = z.object({
  alliance: UpdateAllianceRule,
  alliance_flexing_rule: z.array(AllianceFlexingRule),
  bucket_mmr_rule: BucketMmrRule.nullish(),
  flexingRules: z.array(FlexingRule).nullish(),
  match_options: MatchOptionRule.nullish(),
  matchingRules: z.array(MatchingRule).nullish(),
  sub_game_modes: UpdateRulesetSubGameModes.nullish(),
  use_newest_ticket_for_flexing: z.boolean().nullish()
})

export interface UpdateRuleset extends z.TypeOf<typeof UpdateRuleset> {}
