/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const WebLinkingResponse = z.object({ third_party_url: z.string() })

export interface WebLinkingResponse extends z.TypeOf<typeof WebLinkingResponse> {}
