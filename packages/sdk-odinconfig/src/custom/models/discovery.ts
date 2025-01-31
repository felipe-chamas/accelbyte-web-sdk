/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Config } from '../../generated-public/odin-config/definitions/Config.js'
import { ColorConfigs, FontConfigs } from './base-configs.js'

export const CompanyLogo = z.object({
  url: z.string(),
  name: z.string()
})

export type CompanyLogo = z.TypeOf<typeof CompanyLogo>

export const CompanyLogoConfig = z.object({
  images: z.array(CompanyLogo),
  defaultIndex: z.number()
})

export type CompanyLogoConfig = z.TypeOf<typeof CompanyLogoConfig>

export const GlobalStyleConfig = z.object({
  global: z.object({
    colors: ColorConfigs,
    fonts: FontConfigs
  })
})

export interface GlobalStyleConfig extends z.infer<typeof GlobalStyleConfig> {}

export const SocialLinkConfig = z.object({
  url: z.string(),
  platform: z.string(),
  apps: z.array(z.string())
})

export interface SocialLinkConfig extends z.infer<typeof SocialLinkConfig> {}

export const TemplateInfoConfig = z.object({
  draft: z.string(),
  published: z.string()
})

export interface TemplateInfoConfig extends z.infer<typeof TemplateInfoConfig> {}

export enum TemplateConfig {
  SINGLE = 'single-game',
  MULTIPLE = 'multiple-game'
}

export const PlayerPortalFeatureFlagsConfig = z.object({
  /**
   * Determines whether "Account Overview" menu in Accounts page is visible or not.
   *
   * Defaults to `true`.
   **/
  isAccountOverviewVisible: z.boolean().default(true),
  /**
   * Determines whether "Change Password" menu in Accounts page and profile dropdown are visible or not.
   *
   * Defaults to `true`.
   **/
  isChangePasswordVisible: z.boolean().default(true),
  /**
   * Determines whether "Delete Account" menu in Accounts page is visible or not.
   *
   * Defaults to `true`.
   **/
  isDeleteAccountVisible: z.boolean().default(true),
  /**
   * Determines whether the "Get Launcher" button is visible or not.
   *
   * Defaults to `true`.
   **/
  isGetLauncherVisible: z.boolean().default(true),
  /**
   * Determines whether "Linked Accounts" menu in Accounts page is visible or not.
   *
   * Defaults to `true`.
   **/
  isLinkedAccountsVisible: z.boolean().default(true),
  /**
   * Determines whether "My Profile" menu in Accounts page is visible or not.
   *
   * Defaults to `true`.
   **/
  isMyProfileVisible: z.boolean().default(true),
  /**
   * Determines whether "News" feature is visible or not.
   *
   * Defaults to `false`.
   **/
  isNewsVisible: z.boolean().default(false),
  /**
   * Determines whether "Notifications" feature is visible or not.
   *
   * Defaults to `false`.
   **/
  isNotificationsVisible: z.boolean().default(false),
  /**
   * Determines whether "Order History" menu in Accounts page and profile dropdown are visible or not.
   *
   * Defaults to `true`.
   **/
  isOrderHistoryVisible: z.boolean().default(true),
  /**
   * Determines whether "Payment Methods" menu in Accounts page is visible or not.
   *
   * Defaults to `true`.
   **/
  isPaymentMethodsVisible: z.boolean().default(true),
  /**
   * Determines whether "Personal Data" menu in Accounts page is visible or not.
   *
   * Defaults to `true`.
   **/
  isPersonalDataVisible: z.boolean().default(true),
  /**
   * Determines whether "Legal Agreements" menu in Accounts page is visible or not.
   *
   * Defaults to `true`.
   **/
  isLegalAgreementsVisible: z.boolean().default(true),
  /**
   * Determines whether "Purchased Items" menu in Accounts page is visible or not.
   *
   * Defaults to `true`.
   **/
  isPurchasedItemsVisible: z.boolean().default(true),
  /**
   * Determines whether "Redeem Code" menu in Accounts page and profile dropdown are visible or not.
   *
   * Defaults to `true`.
   **/
  isRedeemCodeVisible: z.boolean().default(true),
  /**
   * Determines whether "Store" feature is visible or not.
   *
   * Defaults to `true`.
   **/
  isStoreVisible: z.boolean().default(true),
  /**
   * Determines whether "Subscriptions" feature is visible or not.
   *
   * Defaults to `false`.
   **/
  isSubscriptionsVisible: z.boolean().default(false),
  /**
   * Determines whether "Virtual Currency" feature is visible or not.
   *
   * Defaults to `false`.
   **/
  isVirtualCurrencyVisible: z.boolean().default(false),
  /**
   * Determines whether the "News" (unreleased) feature is visible or not.
   *
   * Defaults to `false`.
   **/
  isNewsV2Visible: z.boolean().default(false),
  /**
   * Determines whether the "Twitch Drop" feature is enable or not.
   *
   * Defaults to `true`.
   **/
  isTwitchDropEnabled: z.boolean().default(true),
  /**
   * Determines whether the "Legal" feature is enable or not.
   * When there is mandatory Legal published, this feature flag will be ignored
   *
   * Defaults to `true`.
   **/
  isLegalEnabled: z.boolean().default(true)
})

export interface PlayerPortalFeatureFlagsConfig extends z.infer<typeof PlayerPortalFeatureFlagsConfig> {}

export const DiscoveryConfigData = z.object({
  ppTemplateInfo: Config.merge(
    z.object({
      data: TemplateInfoConfig
    })
  ),
  launcherTemplateInfo: Config.merge(
    z.object({
      data: TemplateInfoConfig
    })
  ),
  loginTemplateInfo: Config.merge(
    z.object({
      data: TemplateInfoConfig
    })
  ),
  legalTemplateInfo: Config.merge(
    z.object({
      data: TemplateInfoConfig
    })
  ),
  paymentTemplateInfo: Config.merge(
    z.object({
      data: TemplateInfoConfig
    })
  ),
  twitchDropTemplateInfo: Config.merge(
    z.object({
      data: TemplateInfoConfig
    })
  ),
  supportTemplateInfo: Config.merge(
    z.object({
      data: TemplateInfoConfig
    })
  ),
  ppFeatureFlags: Config.merge(
    z.object({
      data: PlayerPortalFeatureFlagsConfig
    })
  ),
  launcherFeatureFlags: Config,
  loginFeatureFlags: Config,
  supportFeatureFlags: Config,
  experimentalFeatureFlags: Config,
  socialLinks: Config.merge(
    z.object({
      data: z.object({
        value: z.array(SocialLinkConfig)
      })
    })
  ),
  copyright: Config.merge(
    z.object({
      data: z.object({
        value: z.string()
      })
    })
  ),
  globalPageConfig: Config.merge(
    z.object({
      data: GlobalStyleConfig,
      name: z.string(),
      format: z.string(),
      updatedAt: z.string(),
      version: z.number()
    })
  ),
  companyLogo: Config.merge(
    z.object({
      data: CompanyLogoConfig,
      name: z.string(),
      format: z.string(),
      updatedAt: z.string(),
      version: z.number()
    })
  ),
  templateConfig: Config.merge(
    z.object({
      data: z.object({
        value: z.union([z.literal(`${TemplateConfig.SINGLE}`), z.literal(`${TemplateConfig.MULTIPLE}`)])
      })
    })
  ),
  appId: Config.merge(
    z.object({
      data: z.object({
        value: z.string()
      })
    })
  ),
  avatarsList: Config.merge(
    z.object({
      data: z.object({
        value: z.string()
      })
    })
  ),
  brandName: Config.merge(
    z.object({
      data: z.object({
        value: z.string()
      })
    })
  ),
  favicon: Config.merge(
    z.object({
      data: z.object({
        value: z.string()
      })
    })
  ),
  pageTitle: Config.merge(
    z.object({
      data: z.object({
        value: z.string()
      })
    })
  ),
  launcherIcon: Config.merge(
    z.object({
      data: z.object({
        value: z.string()
      })
    })
  )
})

export interface DiscoveryConfigData extends z.infer<typeof DiscoveryConfigData> {}
