/* tslint:disable */
/* eslint-disable */
/**
 * zwischenwelten API Documentation
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: dev@jeschek.eu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface ContactContactInformationComponent
 */
export interface ContactContactInformationComponent {
  /**
   *
   * @type {number}
   * @memberof ContactContactInformationComponent
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof ContactContactInformationComponent
   */
  platform?: ContactContactInformationComponentPlatformEnum;
  /**
   *
   * @type {string}
   * @memberof ContactContactInformationComponent
   */
  handle?: string;
}

/**
 * @export
 */
export const ContactContactInformationComponentPlatformEnum = {
  Generic: 'generic',
  Email: 'email',
  Facebook: 'facebook',
  Youtube: 'youtube',
  Instagram: 'instagram',
  Tiktok: 'tiktok',
  Snapchat: 'snapchat',
  Twitter: 'twitter',
  Reddit: 'reddit',
  Discord: 'discord',
  Twitch: 'twitch',
  Github: 'github',
} as const;
export type ContactContactInformationComponentPlatformEnum =
  (typeof ContactContactInformationComponentPlatformEnum)[keyof typeof ContactContactInformationComponentPlatformEnum];

/**
 * Check if a given object implements the ContactContactInformationComponent interface.
 */
export function instanceOfContactContactInformationComponent(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ContactContactInformationComponentFromJSON(
  json: any
): ContactContactInformationComponent {
  return ContactContactInformationComponentFromJSONTyped(json, false);
}

export function ContactContactInformationComponentFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ContactContactInformationComponent {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    platform: !exists(json, 'platform') ? undefined : json['platform'],
    handle: !exists(json, 'handle') ? undefined : json['handle'],
  };
}

export function ContactContactInformationComponentToJSON(
  value?: ContactContactInformationComponent | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    platform: value.platform,
    handle: value.handle,
  };
}
