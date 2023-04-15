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
import type { IndexResponseDataObjectLocalized } from './IndexResponseDataObjectLocalized';
import {
  IndexResponseDataObjectLocalizedFromJSON,
  IndexResponseDataObjectLocalizedFromJSONTyped,
  IndexResponseDataObjectLocalizedToJSON,
} from './IndexResponseDataObjectLocalized';

/**
 *
 * @export
 * @interface IndexResponseDataObjectAttributesLocalizations
 */
export interface IndexResponseDataObjectAttributesLocalizations {
  /**
   *
   * @type {Array<IndexResponseDataObjectLocalized>}
   * @memberof IndexResponseDataObjectAttributesLocalizations
   */
  data?: Array<IndexResponseDataObjectLocalized>;
}

/**
 * Check if a given object implements the IndexResponseDataObjectAttributesLocalizations interface.
 */
export function instanceOfIndexResponseDataObjectAttributesLocalizations(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function IndexResponseDataObjectAttributesLocalizationsFromJSON(
  json: any
): IndexResponseDataObjectAttributesLocalizations {
  return IndexResponseDataObjectAttributesLocalizationsFromJSONTyped(json, false);
}

export function IndexResponseDataObjectAttributesLocalizationsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): IndexResponseDataObjectAttributesLocalizations {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: !exists(json, 'data')
      ? undefined
      : (json['data'] as Array<any>).map(IndexResponseDataObjectLocalizedFromJSON),
  };
}

export function IndexResponseDataObjectAttributesLocalizationsToJSON(
  value?: IndexResponseDataObjectAttributesLocalizations | null
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
        : (value.data as Array<any>).map(IndexResponseDataObjectLocalizedToJSON),
  };
}