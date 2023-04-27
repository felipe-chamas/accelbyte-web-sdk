/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AdyenConfig } from './AdyenConfig.js'
import { AliPayConfig } from './AliPayConfig.js'
import { CheckoutConfig } from './CheckoutConfig.js'
import { PayPalConfig } from './PayPalConfig.js'
import { StripeConfig } from './StripeConfig.js'
import { WxPayConfigInfo } from './WxPayConfigInfo.js'
import { XsollaConfig } from './XsollaConfig.js'
import { XsollaPaywallConfig } from './XsollaPaywallConfig.js'

export const PaymentMerchantConfigInfo = z.object({
  id: z.string(),
  aliPayConfig: AliPayConfig.nullish(),
  aliPaySandboxConfig: AliPayConfig.nullish(),
  wxPayConfig: WxPayConfigInfo.nullish(),
  xsollaConfig: XsollaConfig.nullish(),
  xsollaPaywallConfig: XsollaPaywallConfig.nullish(),
  adyenConfig: AdyenConfig.nullish(),
  adyenSandboxConfig: AdyenConfig.nullish(),
  payPalConfig: PayPalConfig.nullish(),
  payPalSandboxConfig: PayPalConfig.nullish(),
  stripeConfig: StripeConfig.nullish(),
  stripeSandboxConfig: StripeConfig.nullish(),
  checkoutConfig: CheckoutConfig.nullish(),
  checkoutSandboxConfig: CheckoutConfig.nullish(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export interface PaymentMerchantConfigInfo extends z.TypeOf<typeof PaymentMerchantConfigInfo> {}
