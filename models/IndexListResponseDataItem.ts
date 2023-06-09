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
import type { IndexListResponseDataItemAttributes } from './IndexListResponseDataItemAttributes';
import {
  IndexListResponseDataItemAttributesFromJSON,
  IndexListResponseDataItemAttributesFromJSONTyped,
  IndexListResponseDataItemAttributesToJSON,
} from './IndexListResponseDataItemAttributes';

/**
 *
 * @export
 * @interface IndexListResponseDataItem
 */
export interface IndexListResponseDataItem {
  /**
   *
   * @type {number}
   * @memberof IndexListResponseDataItem
   */
  id?: number;
  /**
   *
   * @type {IndexListResponseDataItemAttributes}
   * @memberof IndexListResponseDataItem
   */
  attributes?: IndexListResponseDataItemAttributes;
}

/**
 * Check if a given object implements the IndexListResponseDataItem interface.
 */
export function instanceOfIndexListResponseDataItem(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function IndexListResponseDataItemFromJSON(json: any): IndexListResponseDataItem {
  return IndexListResponseDataItemFromJSONTyped(json, false);
}

export function IndexListResponseDataItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): IndexListResponseDataItem {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    attributes: !exists(json, 'attributes')
      ? undefined
      : IndexListResponseDataItemAttributesFromJSON(json['attributes']),
  };
}

export function IndexListResponseDataItemToJSON(value?: IndexListResponseDataItem | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    attributes: IndexListResponseDataItemAttributesToJSON(value.attributes),
  };
}
