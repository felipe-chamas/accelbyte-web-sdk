/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AvailableComparisonObject = z.object({
  comparison: z
    .enum(['is', 'isNot', 'isGreaterThan', 'isGreaterThanOrEqual', 'isLessThan', 'isLessThanOrEqual', 'includes', 'excludes'])
    .nullish(),
  text: z.string().nullish()
})

export type AvailableComparisonObject = z.TypeOf<typeof AvailableComparisonObject>
