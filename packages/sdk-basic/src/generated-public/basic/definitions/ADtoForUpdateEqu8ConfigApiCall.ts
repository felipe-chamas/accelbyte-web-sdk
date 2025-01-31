/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ADtoForUpdateEqu8ConfigApiCall = z.object({ apiKey: z.string().nullish() })

export interface ADtoForUpdateEqu8ConfigApiCall extends z.TypeOf<typeof ADtoForUpdateEqu8ConfigApiCall> {}
