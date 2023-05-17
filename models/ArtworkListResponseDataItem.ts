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
import type { Artwork } from './Artwork';
import { ArtworkFromJSON, ArtworkFromJSONTyped, ArtworkToJSON } from './Artwork';

/**
 *
 * @export
 * @interface ArtworkListResponseDataItem
 */
export interface ArtworkListResponseDataItem {
  /**
   *
   * @type {number}
   * @memberof ArtworkListResponseDataItem
   */
  id?: number;
  /**
   *
   * @type {Artwork}
   * @memberof ArtworkListResponseDataItem
   */
  attributes?: Artwork;
}

/**
 * Check if a given object implements the ArtworkListResponseDataItem interface.
 */
export function instanceOfArtworkListResponseDataItem(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtworkListResponseDataItemFromJSON(json: any): ArtworkListResponseDataItem {
  return ArtworkListResponseDataItemFromJSONTyped(json, false);
}

export function ArtworkListResponseDataItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtworkListResponseDataItem {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    attributes: !exists(json, 'attributes') ? undefined : ArtworkFromJSON(json['attributes']),
  };
}

export function ArtworkListResponseDataItemToJSON(value?: ArtworkListResponseDataItem | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    attributes: ArtworkToJSON(value.attributes),
  };
}
