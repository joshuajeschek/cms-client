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
import type { Update } from './Update';
import { UpdateFromJSON, UpdateFromJSONTyped, UpdateToJSON } from './Update';

/**
 *
 * @export
 * @interface UpdateLocalizations
 */
export interface UpdateLocalizations {
  /**
   *
   * @type {Array<Update>}
   * @memberof UpdateLocalizations
   */
  data?: Array<Update>;
}

/**
 * Check if a given object implements the UpdateLocalizations interface.
 */
export function instanceOfUpdateLocalizations(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function UpdateLocalizationsFromJSON(json: any): UpdateLocalizations {
  return UpdateLocalizationsFromJSONTyped(json, false);
}

export function UpdateLocalizationsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateLocalizations {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: !exists(json, 'data') ? undefined : (json['data'] as Array<any>).map(UpdateFromJSON),
  };
}

export function UpdateLocalizationsToJSON(value?: UpdateLocalizations | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data: value.data === undefined ? undefined : (value.data as Array<any>).map(UpdateToJSON),
  };
}
