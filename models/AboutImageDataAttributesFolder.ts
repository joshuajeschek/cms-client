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
import type { AboutImageDataAttributesFolderData } from './AboutImageDataAttributesFolderData';
import {
  AboutImageDataAttributesFolderDataFromJSON,
  AboutImageDataAttributesFolderDataFromJSONTyped,
  AboutImageDataAttributesFolderDataToJSON,
} from './AboutImageDataAttributesFolderData';

/**
 *
 * @export
 * @interface AboutImageDataAttributesFolder
 */
export interface AboutImageDataAttributesFolder {
  /**
   *
   * @type {AboutImageDataAttributesFolderData}
   * @memberof AboutImageDataAttributesFolder
   */
  data?: AboutImageDataAttributesFolderData;
}

/**
 * Check if a given object implements the AboutImageDataAttributesFolder interface.
 */
export function instanceOfAboutImageDataAttributesFolder(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function AboutImageDataAttributesFolderFromJSON(json: any): AboutImageDataAttributesFolder {
  return AboutImageDataAttributesFolderFromJSONTyped(json, false);
}

export function AboutImageDataAttributesFolderFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AboutImageDataAttributesFolder {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: !exists(json, 'data')
      ? undefined
      : AboutImageDataAttributesFolderDataFromJSON(json['data']),
  };
}

export function AboutImageDataAttributesFolderToJSON(
  value?: AboutImageDataAttributesFolder | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data: AboutImageDataAttributesFolderDataToJSON(value.data),
  };
}