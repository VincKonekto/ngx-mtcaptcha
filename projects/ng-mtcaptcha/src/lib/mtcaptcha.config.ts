import { MTCaptchaOptions } from './mtcaptcha.types';

function parseJson<T>(value: T | string): T {
  return typeof value === 'string' ? JSON.parse(value) : value;
}

/**
 * Map library options to the keys expected by window.mtcaptchaConfig.
 * Options left undefined are omitted so MTCaptcha defaults apply.
 */
export function buildMTCaptchaConfig(options: Partial<MTCaptchaOptions>): Record<string, any> {
  const config: Record<string, any> = {};

  if (options.sitekey) {
    config['sitekey'] = options.sitekey;
  }

  if (options.theme) {
    config['theme'] = options.theme;
  }

  if (options.widgetSize) {
    config['widgetSize'] = options.widgetSize;
  }

  if (options.miniFormWidth) {
    config['miniFormWidth'] = options.miniFormWidth;
  }

  if (options.miniFormHeight) {
    config['miniFormHeight'] = options.miniFormHeight;
  }

  if (options.lang) {
    config['lang'] = options.lang;
  }

  if (options.lowFrictionInvisible) {
    config['lowFrictionInvisible'] = options.lowFrictionInvisible;
  }

  if (options.loadAnimation !== undefined) {
    config['loadAnimation'] = options.loadAnimation;
  }

  if (options.customLangText) {
    config['customLangText'] = parseJson(options.customLangText);
  }

  if (options.customStyle) {
    config['customStyle'] = parseJson(options.customStyle);
  }

  if (options.customAccessibilityText) {
    config['customAccessibilityText'] = parseJson(options.customAccessibilityText);
  }

  return config;
}
