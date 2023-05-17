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
import type { ModelIndex } from './ModelIndex';
import { ModelIndexFromJSON, ModelIndexFromJSONTyped, ModelIndexToJSON } from './ModelIndex';

/**
 *
 * @export
 * @interface IndexLocalizations
 */
export interface IndexLocalizations {
  /**
   *
   * @type {Array<ModelIndex>}
   * @memberof IndexLocalizations
   */
  data?: Array<ModelIndex>;
}

/**
 * Check if a given object implements the IndexLocalizations interface.
 */
export function instanceOfIndexLocalizations(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function IndexLocalizationsFromJSON(json: any): IndexLocalizations {
  return IndexLocalizationsFromJSONTyped(json, false);
}

export function IndexLocalizationsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): IndexLocalizations {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: !exists(json, 'data') ? undefined : (json['data'] as Array<any>).map(ModelIndexFromJSON),
  };
}

export function IndexLocalizationsToJSON(value?: IndexLocalizations | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data: value.data === undefined ? undefined : (value.data as Array<any>).map(ModelIndexToJSON),
  };
}
