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
import type { IndexListResponseDataItemLocalized } from './IndexListResponseDataItemLocalized';
import {
  IndexListResponseDataItemLocalizedFromJSON,
  IndexListResponseDataItemLocalizedFromJSONTyped,
  IndexListResponseDataItemLocalizedToJSON,
} from './IndexListResponseDataItemLocalized';

/**
 *
 * @export
 * @interface IndexListResponseDataItemAttributesLocalizations
 */
export interface IndexListResponseDataItemAttributesLocalizations {
  /**
   *
   * @type {Array<IndexListResponseDataItemLocalized>}
   * @memberof IndexListResponseDataItemAttributesLocalizations
   */
  data?: Array<IndexListResponseDataItemLocalized>;
}

/**
 * Check if a given object implements the IndexListResponseDataItemAttributesLocalizations interface.
 */
export function instanceOfIndexListResponseDataItemAttributesLocalizations(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function IndexListResponseDataItemAttributesLocalizationsFromJSON(
  json: any
): IndexListResponseDataItemAttributesLocalizations {
  return IndexListResponseDataItemAttributesLocalizationsFromJSONTyped(json, false);
}

export function IndexListResponseDataItemAttributesLocalizationsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): IndexListResponseDataItemAttributesLocalizations {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: !exists(json, 'data')
      ? undefined
      : (json['data'] as Array<any>).map(IndexListResponseDataItemLocalizedFromJSON),
  };
}

export function IndexListResponseDataItemAttributesLocalizationsToJSON(
  value?: IndexListResponseDataItemAttributesLocalizations | null
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
        : (value.data as Array<any>).map(IndexListResponseDataItemLocalizedToJSON),
  };
}