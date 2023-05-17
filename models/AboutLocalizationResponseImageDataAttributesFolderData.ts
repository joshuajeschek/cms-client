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
import type { AboutLocalizationResponseImageDataAttributesFolderDataAttributes } from './AboutLocalizationResponseImageDataAttributesFolderDataAttributes';
import {
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesFromJSON,
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesFromJSONTyped,
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesToJSON,
} from './AboutLocalizationResponseImageDataAttributesFolderDataAttributes';

/**
 *
 * @export
 * @interface AboutLocalizationResponseImageDataAttributesFolderData
 */
export interface AboutLocalizationResponseImageDataAttributesFolderData {
  /**
   *
   * @type {number}
   * @memberof AboutLocalizationResponseImageDataAttributesFolderData
   */
  id?: number;
  /**
   *
   * @type {AboutLocalizationResponseImageDataAttributesFolderDataAttributes}
   * @memberof AboutLocalizationResponseImageDataAttributesFolderData
   */
  attributes?: AboutLocalizationResponseImageDataAttributesFolderDataAttributes;
}

/**
 * Check if a given object implements the AboutLocalizationResponseImageDataAttributesFolderData interface.
 */
export function instanceOfAboutLocalizationResponseImageDataAttributesFolderData(
  value: object
): boolean {
  let isInstance = true;

  return isInstance;
}

export function AboutLocalizationResponseImageDataAttributesFolderDataFromJSON(
  json: any
): AboutLocalizationResponseImageDataAttributesFolderData {
  return AboutLocalizationResponseImageDataAttributesFolderDataFromJSONTyped(json, false);
}

export function AboutLocalizationResponseImageDataAttributesFolderDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AboutLocalizationResponseImageDataAttributesFolderData {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    attributes: !exists(json, 'attributes')
      ? undefined
      : AboutLocalizationResponseImageDataAttributesFolderDataAttributesFromJSON(
          json['attributes']
        ),
  };
}

export function AboutLocalizationResponseImageDataAttributesFolderDataToJSON(
  value?: AboutLocalizationResponseImageDataAttributesFolderData | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    attributes: AboutLocalizationResponseImageDataAttributesFolderDataAttributesToJSON(
      value.attributes
    ),
  };
}