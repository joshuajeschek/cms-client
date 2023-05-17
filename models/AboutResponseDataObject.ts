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
import type { AboutResponseDataObjectAttributes } from './AboutResponseDataObjectAttributes';
import {
  AboutResponseDataObjectAttributesFromJSON,
  AboutResponseDataObjectAttributesFromJSONTyped,
  AboutResponseDataObjectAttributesToJSON,
} from './AboutResponseDataObjectAttributes';

/**
 *
 * @export
 * @interface AboutResponseDataObject
 */
export interface AboutResponseDataObject {
  /**
   *
   * @type {number}
   * @memberof AboutResponseDataObject
   */
  id?: number;
  /**
   *
   * @type {AboutResponseDataObjectAttributes}
   * @memberof AboutResponseDataObject
   */
  attributes?: AboutResponseDataObjectAttributes;
}

/**
 * Check if a given object implements the AboutResponseDataObject interface.
 */
export function instanceOfAboutResponseDataObject(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function AboutResponseDataObjectFromJSON(json: any): AboutResponseDataObject {
  return AboutResponseDataObjectFromJSONTyped(json, false);
}

export function AboutResponseDataObjectFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AboutResponseDataObject {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    attributes: !exists(json, 'attributes')
      ? undefined
      : AboutResponseDataObjectAttributesFromJSON(json['attributes']),
  };
}

export function AboutResponseDataObjectToJSON(value?: AboutResponseDataObject | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    attributes: AboutResponseDataObjectAttributesToJSON(value.attributes),
  };
}