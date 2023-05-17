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
import type { AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes } from './AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes';
import {
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesFromJSON,
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesFromJSONTyped,
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesToJSON,
} from './AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes';

/**
 *
 * @export
 * @interface AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByData
 */
export interface AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByData {
  /**
   *
   * @type {number}
   * @memberof AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByData
   */
  id?: number;
  /**
   *
   * @type {AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes}
   * @memberof AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByData
   */
  attributes?: AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes;
}

/**
 * Check if a given object implements the AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByData interface.
 */
export function instanceOfAboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByData(
  value: object
): boolean {
  let isInstance = true;

  return isInstance;
}

export function AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataFromJSON(
  json: any
): AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByData {
  return AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataFromJSONTyped(
    json,
    false
  );
}

export function AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByData {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    attributes: !exists(json, 'attributes')
      ? undefined
      : AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesFromJSON(
          json['attributes']
        ),
  };
}

export function AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataToJSON(
  value?: AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByData | null
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
      AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesToJSON(
        value.attributes
      ),
  };
}