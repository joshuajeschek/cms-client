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
import type { IndexResponseDataObjectAttributes } from './IndexResponseDataObjectAttributes';
import {
  IndexResponseDataObjectAttributesFromJSON,
  IndexResponseDataObjectAttributesFromJSONTyped,
  IndexResponseDataObjectAttributesToJSON,
} from './IndexResponseDataObjectAttributes';

/**
 *
 * @export
 * @interface IndexResponseDataObject
 */
export interface IndexResponseDataObject {
  /**
   *
   * @type {number}
   * @memberof IndexResponseDataObject
   */
  id?: number;
  /**
   *
   * @type {IndexResponseDataObjectAttributes}
   * @memberof IndexResponseDataObject
   */
  attributes?: IndexResponseDataObjectAttributes;
}

/**
 * Check if a given object implements the IndexResponseDataObject interface.
 */
export function instanceOfIndexResponseDataObject(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function IndexResponseDataObjectFromJSON(json: any): IndexResponseDataObject {
  return IndexResponseDataObjectFromJSONTyped(json, false);
}

export function IndexResponseDataObjectFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): IndexResponseDataObject {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    attributes: !exists(json, 'attributes')
      ? undefined
      : IndexResponseDataObjectAttributesFromJSON(json['attributes']),
  };
}

export function IndexResponseDataObjectToJSON(value?: IndexResponseDataObject | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    attributes: IndexResponseDataObjectAttributesToJSON(value.attributes),
  };
}