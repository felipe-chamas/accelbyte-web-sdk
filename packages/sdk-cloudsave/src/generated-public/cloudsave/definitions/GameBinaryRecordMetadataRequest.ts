/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GameBinaryRecordMetadataRequest = z.object({ set_by: z.string() })

export interface GameBinaryRecordMetadataRequest extends z.TypeOf<typeof GameBinaryRecordMetadataRequest> {}
