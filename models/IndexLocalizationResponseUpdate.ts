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
import type { IndexLocalizationResponseUpdateData } from './IndexLocalizationResponseUpdateData';
import {
  IndexLocalizationResponseUpdateDataFromJSON,
  IndexLocalizationResponseUpdateDataFromJSONTyped,
  IndexLocalizationResponseUpdateDataToJSON,
} from './IndexLocalizationResponseUpdateData';

/**
 *
 * @export
 * @interface IndexLocalizationResponseUpdate
 */
export interface IndexLocalizationResponseUpdate {
  /**
   *
   * @type {IndexLocalizationResponseUpdateData}
   * @memberof IndexLocalizationResponseUpdate
   */
  data?: IndexLocalizationResponseUpdateData;
}

/**
 * Check if a given object implements the IndexLocalizationResponseUpdate interface.
 */
export function instanceOfIndexLocalizationResponseUpdate(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function IndexLocalizationResponseUpdateFromJSON(
  json: any
): IndexLocalizationResponseUpdate {
  return IndexLocalizationResponseUpdateFromJSONTyped(json, false);
}

export function IndexLocalizationResponseUpdateFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): IndexLocalizationResponseUpdate {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: !exists(json, 'data')
      ? undefined
      : IndexLocalizationResponseUpdateDataFromJSON(json['data']),
  };
}

export function IndexLocalizationResponseUpdateToJSON(
  value?: IndexLocalizationResponseUpdate | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data: IndexLocalizationResponseUpdateDataToJSON(value.data),
  };
}