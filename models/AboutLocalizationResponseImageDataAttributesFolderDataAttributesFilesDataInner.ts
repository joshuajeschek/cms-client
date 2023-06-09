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
import type { AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributes } from './AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributes';
import {
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesFromJSON,
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesFromJSONTyped,
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesToJSON,
} from './AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributes';

/**
 *
 * @export
 * @interface AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInner
 */
export interface AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInner {
  /**
   *
   * @type {number}
   * @memberof AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInner
   */
  id?: number;
  /**
   *
   * @type {AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributes}
   * @memberof AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInner
   */
  attributes?: AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributes;
}

/**
 * Check if a given object implements the AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInner interface.
 */
export function instanceOfAboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInner(
  value: object
): boolean {
  let isInstance = true;

  return isInstance;
}

export function AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerFromJSON(
  json: any
): AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInner {
  return AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerFromJSONTyped(
    json,
    false
  );
}

export function AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInner {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    attributes: !exists(json, 'attributes')
      ? undefined
      : AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesFromJSON(
          json['attributes']
        ),
  };
}

export function AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerToJSON(
  value?: AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInner | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    attributes:
      AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesToJSON(
        value.attributes
      ),
  };
}
