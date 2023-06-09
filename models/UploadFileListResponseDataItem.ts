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
 * @interface UploadFileListResponseDataItem
 */
export interface UploadFileListResponseDataItem {
  /**
   *
   * @type {number}
   * @memberof UploadFileListResponseDataItem
   */
  id?: number;
  /**
   *
   * @type {AboutLocalizationResponseImageDataAttributes}
   * @memberof UploadFileListResponseDataItem
   */
  attributes?: AboutLocalizationResponseImageDataAttributes;
}

/**
 * Check if a given object implements the UploadFileListResponseDataItem interface.
 */
export function instanceOfUploadFileListResponseDataItem(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function UploadFileListResponseDataItemFromJSON(json: any): UploadFileListResponseDataItem {
  return UploadFileListResponseDataItemFromJSONTyped(json, false);
}

export function UploadFileListResponseDataItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UploadFileListResponseDataItem {
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

export function UploadFileListResponseDataItemToJSON(
  value?: UploadFileListResponseDataItem | null
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
