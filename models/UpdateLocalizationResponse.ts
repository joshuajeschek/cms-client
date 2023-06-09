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
import type { UpdateResponseDataObjectLocalized } from './UpdateResponseDataObjectLocalized';
import {
  UpdateResponseDataObjectLocalizedFromJSON,
  UpdateResponseDataObjectLocalizedFromJSONTyped,
  UpdateResponseDataObjectLocalizedToJSON,
} from './UpdateResponseDataObjectLocalized';

/**
 *
 * @export
 * @interface UpdateLocalizationResponse
 */
export interface UpdateLocalizationResponse {
  /**
   *
   * @type {UpdateResponseDataObjectLocalized}
   * @memberof UpdateLocalizationResponse
   */
  data?: UpdateResponseDataObjectLocalized;
  /**
   *
   * @type {object}
   * @memberof UpdateLocalizationResponse
   */
  meta?: object;
}

/**
 * Check if a given object implements the UpdateLocalizationResponse interface.
 */
export function instanceOfUpdateLocalizationResponse(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function UpdateLocalizationResponseFromJSON(json: any): UpdateLocalizationResponse {
  return UpdateLocalizationResponseFromJSONTyped(json, false);
}

export function UpdateLocalizationResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateLocalizationResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: !exists(json, 'data')
      ? undefined
      : UpdateResponseDataObjectLocalizedFromJSON(json['data']),
    meta: !exists(json, 'meta') ? undefined : json['meta'],
  };
}

export function UpdateLocalizationResponseToJSON(value?: UpdateLocalizationResponse | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data: UpdateResponseDataObjectLocalizedToJSON(value.data),
    meta: value.meta,
  };
}
