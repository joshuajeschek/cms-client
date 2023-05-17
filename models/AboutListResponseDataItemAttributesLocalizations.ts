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
import type { AboutListResponseDataItemLocalized } from './AboutListResponseDataItemLocalized';
import {
  AboutListResponseDataItemLocalizedFromJSON,
  AboutListResponseDataItemLocalizedFromJSONTyped,
  AboutListResponseDataItemLocalizedToJSON,
} from './AboutListResponseDataItemLocalized';

/**
 *
 * @export
 * @interface AboutListResponseDataItemAttributesLocalizations
 */
export interface AboutListResponseDataItemAttributesLocalizations {
  /**
   *
   * @type {Array<AboutListResponseDataItemLocalized>}
   * @memberof AboutListResponseDataItemAttributesLocalizations
   */
  data?: Array<AboutListResponseDataItemLocalized>;
}

/**
 * Check if a given object implements the AboutListResponseDataItemAttributesLocalizations interface.
 */
export function instanceOfAboutListResponseDataItemAttributesLocalizations(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function AboutListResponseDataItemAttributesLocalizationsFromJSON(
  json: any
): AboutListResponseDataItemAttributesLocalizations {
  return AboutListResponseDataItemAttributesLocalizationsFromJSONTyped(json, false);
}

export function AboutListResponseDataItemAttributesLocalizationsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AboutListResponseDataItemAttributesLocalizations {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: !exists(json, 'data')
      ? undefined
      : (json['data'] as Array<any>).map(AboutListResponseDataItemLocalizedFromJSON),
  };
}

export function AboutListResponseDataItemAttributesLocalizationsToJSON(
  value?: AboutListResponseDataItemAttributesLocalizations | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data:
      value.data === undefined
        ? undefined
        : (value.data as Array<any>).map(AboutListResponseDataItemLocalizedToJSON),
  };
}