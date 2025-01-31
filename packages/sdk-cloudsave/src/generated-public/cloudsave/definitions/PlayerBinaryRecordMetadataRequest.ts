/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlayerBinaryRecordMetadataRequest = z.object({ is_public: z.boolean().nullish(), set_by: z.string().nullish() })

export interface PlayerBinaryRecordMetadataRequest extends z.TypeOf<typeof PlayerBinaryRecordMetadataRequest> {}
