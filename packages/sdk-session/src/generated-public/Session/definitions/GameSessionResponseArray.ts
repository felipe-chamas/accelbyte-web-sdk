/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GameSessionResponse } from './GameSessionResponse.js'

export const GameSessionResponseArray = z.array(GameSessionResponse)

export interface GameSessionResponseArray extends z.TypeOf<typeof GameSessionResponseArray> {}
