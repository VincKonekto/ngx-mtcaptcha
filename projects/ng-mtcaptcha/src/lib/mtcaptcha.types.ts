export type MTCaptchaWidgetSize = 'mini' | 'standard';

/**
 * Accessibility (aria) texts for one language, grouped by widget state.
 * Each value is limited to 90 characters by MTCaptcha.
 */
export interface MTCaptchaAccessibilityText {
  default?: {
    requireCSS?: string;
    privacyLink?: string;
    termsLink?: string;
    poweredByLink?: string;
    audioButton?: string;
    image?: string;
    inputTextForm?: string;
    reloadButton?: string;
    iframeTitle?: string;
  };
  loadingNew?: { reloadButton?: string };
  captchaNewlyLoaded?: { reloadButton?: string };
  challengeIncomplete?: { inputTextForm?: string };
  verifyingInput?: { reloadButton?: string };
  validationFailed?: { reloadButton?: string };
  validationSuccess?: { reloadButton?: string };
  tokenTimeOut?: { reloadButton?: string };
}

/** State object passed by MTCaptcha to its callbacks and returned by mtcaptcha.getStatus() */
export interface MTCaptchaStatus {
  element: HTMLElement | null;
  domID: string;
  statusCode: number;
  verifiedToken: string | null;
  isVerified: boolean;
  isVisible: boolean;
  statusDesc: string;
}

export interface MTCaptchaOptions {
  sitekey: string;
  theme?: string;  // Supports any theme value (not limited to 'light'|'dark')
  widgetSize?: MTCaptchaWidgetSize;  // Widget size: 'mini' (compact) or 'standard' (default: 'standard')
  miniFormWidth?: number;   // Width in px of the 'mini' widget (265-600, responsive by default)
  miniFormHeight?: number;  // Height in px of the 'mini' widget (42-55, default: 45)
  lang?: string;  // Language code, e.g. 'en', 'fr', 'nl', 'de' (default: 'en')
  lowFrictionInvisible?: 'force-visible';  // Always show the captcha even if Low Friction Invisible is enabled for the site
  loadAnimation?: boolean;  // Show the loading animation (default: true, set to false with invisible captcha)
  callbackName?: string;
  customLangText?: Record<string, any> | string;  // JSON object or JSON string
  customStyle?: Record<string, any> | string;      // JSON object or JSON string
  customAccessibilityText?: Record<string, MTCaptchaAccessibilityText> | string;  // Keyed by language code, JSON object or JSON string
  renderedCallback?: string;
  verifiedCallback?: string;
  verifyexpiredCallback?: string;
  errorCallback?: string;
}
