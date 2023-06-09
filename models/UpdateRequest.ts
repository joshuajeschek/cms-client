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
import type { UpdateRequestData } from './UpdateRequestData';
import {
  UpdateRequestDataFromJSON,
  UpdateRequestDataFromJSONTyped,
  UpdateRequestDataToJSON,
} from './UpdateRequestData';

/**
 *
 * @export
 * @interface UpdateRequest
 */
export interface UpdateRequest {
  /**
   *
   * @type {UpdateRequestData}
   * @memberof UpdateRequest
   */
  data: UpdateRequestData;
}

/**
 * Check if a given object implements the UpdateRequest interface.
 */
export function instanceOfUpdateRequest(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'data' in value;

  return isInstance;
}

export function UpdateRequestFromJSON(json: any): UpdateRequest {
  return UpdateRequestFromJSONTyped(json, false);
}

export function UpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: UpdateRequestDataFromJSON(json['data']),
  };
}

export function UpdateRequestToJSON(value?: UpdateRequest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data: UpdateRequestDataToJSON(value.data),
  };
}
