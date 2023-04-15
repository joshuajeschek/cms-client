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
import type { IndexListResponseDataItemLocalizedAttributes } from './IndexListResponseDataItemLocalizedAttributes';
import {
  IndexListResponseDataItemLocalizedAttributesFromJSON,
  IndexListResponseDataItemLocalizedAttributesFromJSONTyped,
  IndexListResponseDataItemLocalizedAttributesToJSON,
} from './IndexListResponseDataItemLocalizedAttributes';

/**
 *
 * @export
 * @interface IndexResponseDataObjectLocalized
 */
export interface IndexResponseDataObjectLocalized {
  /**
   *
   * @type {number}
   * @memberof IndexResponseDataObjectLocalized
   */
  id?: number;
  /**
   *
   * @type {IndexListResponseDataItemLocalizedAttributes}
   * @memberof IndexResponseDataObjectLocalized
   */
  attributes?: IndexListResponseDataItemLocalizedAttributes;
}

/**
 * Check if a given object implements the IndexResponseDataObjectLocalized interface.
 */
export function instanceOfIndexResponseDataObjectLocalized(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function IndexResponseDataObjectLocalizedFromJSON(
  json: any
): IndexResponseDataObjectLocalized {
  return IndexResponseDataObjectLocalizedFromJSONTyped(json, false);
}

export function IndexResponseDataObjectLocalizedFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): IndexResponseDataObjectLocalized {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    attributes: !exists(json, 'attributes')
      ? undefined
      : IndexListResponseDataItemLocalizedAttributesFromJSON(json['attributes']),
  };
}

export function IndexResponseDataObjectLocalizedToJSON(
  value?: IndexResponseDataObjectLocalized | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    attributes: IndexListResponseDataItemLocalizedAttributesToJSON(value.attributes),
  };
}
