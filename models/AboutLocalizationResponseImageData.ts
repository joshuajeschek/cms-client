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
import type { AboutLocalizationResponseImageDataAttributes } from './AboutLocalizationResponseImageDataAttributes';
import {
  AboutLocalizationResponseImageDataAttributesFromJSON,
  AboutLocalizationResponseImageDataAttributesFromJSONTyped,
  AboutLocalizationResponseImageDataAttributesToJSON,
} from './AboutLocalizationResponseImageDataAttributes';

/**
 *
 * @export
 * @interface AboutLocalizationResponseImageData
 */
export interface AboutLocalizationResponseImageData {
  /**
   *
   * @type {number}
   * @memberof AboutLocalizationResponseImageData
   */
  id?: number;
  /**
   *
   * @type {AboutLocalizationResponseImageDataAttributes}
   * @memberof AboutLocalizationResponseImageData
   */
  attributes?: AboutLocalizationResponseImageDataAttributes;
}

/**
 * Check if a given object implements the AboutLocalizationResponseImageData interface.
 */
export function instanceOfAboutLocalizationResponseImageData(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function AboutLocalizationResponseImageDataFromJSON(
  json: any
): AboutLocalizationResponseImageData {
  return AboutLocalizationResponseImageDataFromJSONTyped(json, false);
}

export function AboutLocalizationResponseImageDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AboutLocalizationResponseImageData {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    attributes: !exists(json, 'attributes')
      ? undefined
      : AboutLocalizationResponseImageDataAttributesFromJSON(json['attributes']),
  };
}

export function AboutLocalizationResponseImageDataToJSON(
  value?: AboutLocalizationResponseImageData | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    attributes: AboutLocalizationResponseImageDataAttributesToJSON(value.attributes),
  };
}