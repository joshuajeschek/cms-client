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
import type { IndexExhibitionsDataInnerAttributes } from './IndexExhibitionsDataInnerAttributes';
import {
  IndexExhibitionsDataInnerAttributesFromJSON,
  IndexExhibitionsDataInnerAttributesFromJSONTyped,
  IndexExhibitionsDataInnerAttributesToJSON,
} from './IndexExhibitionsDataInnerAttributes';

/**
 *
 * @export
 * @interface IndexExhibitionsDataInner
 */
export interface IndexExhibitionsDataInner {
  /**
   *
   * @type {number}
   * @memberof IndexExhibitionsDataInner
   */
  id?: number;
  /**
   *
   * @type {IndexExhibitionsDataInnerAttributes}
   * @memberof IndexExhibitionsDataInner
   */
  attributes?: IndexExhibitionsDataInnerAttributes;
}

/**
 * Check if a given object implements the IndexExhibitionsDataInner interface.
 */
export function instanceOfIndexExhibitionsDataInner(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function IndexExhibitionsDataInnerFromJSON(json: any): IndexExhibitionsDataInner {
  return IndexExhibitionsDataInnerFromJSONTyped(json, false);
}

export function IndexExhibitionsDataInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): IndexExhibitionsDataInner {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    attributes: !exists(json, 'attributes')
      ? undefined
      : IndexExhibitionsDataInnerAttributesFromJSON(json['attributes']),
  };
}

export function IndexExhibitionsDataInnerToJSON(value?: IndexExhibitionsDataInner | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    attributes: IndexExhibitionsDataInnerAttributesToJSON(value.attributes),
  };
}
