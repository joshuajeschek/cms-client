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
import type { AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByData } from './AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByData';
import {
  AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataFromJSON,
  AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataFromJSONTyped,
  AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataToJSON,
} from './AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByData';

/**
 *
 * @export
 * @interface AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy
 */
export interface AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy {
  /**
   *
   * @type {AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByData}
   * @memberof AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy
   */
  data?: AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByData;
}

/**
 * Check if a given object implements the AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy interface.
 */
export function instanceOfAboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy(
  value: object
): boolean {
  let isInstance = true;

  return isInstance;
}

export function AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByFromJSON(
  json: any
): AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy {
  return AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByFromJSONTyped(
    json,
    false
  );
}

export function AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: !exists(json, 'data')
      ? undefined
      : AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataFromJSON(
          json['data']
        ),
  };
}

export function AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByToJSON(
  value?: AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data: AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataToJSON(
      value.data
    ),
  };
}
