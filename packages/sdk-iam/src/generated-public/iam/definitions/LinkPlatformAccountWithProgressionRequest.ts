/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const LinkPlatformAccountWithProgressionRequest = z.object({ chosenNamespaces: z.array(z.string()), requestId: z.string() })

export interface LinkPlatformAccountWithProgressionRequest extends z.TypeOf<typeof LinkPlatformAccountWithProgressionRequest> {}
