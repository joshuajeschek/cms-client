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
import type { Artist } from './Artist';
import { ArtistFromJSON, ArtistFromJSONTyped, ArtistToJSON } from './Artist';

/**
 *
 * @export
 * @interface ArtistListResponseDataItem
 */
export interface ArtistListResponseDataItem {
  /**
   *
   * @type {number}
   * @memberof ArtistListResponseDataItem
   */
  id?: number;
  /**
   *
   * @type {Artist}
   * @memberof ArtistListResponseDataItem
   */
  attributes?: Artist;
}

/**
 * Check if a given object implements the ArtistListResponseDataItem interface.
 */
export function instanceOfArtistListResponseDataItem(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtistListResponseDataItemFromJSON(json: any): ArtistListResponseDataItem {
  return ArtistListResponseDataItemFromJSONTyped(json, false);
}

export function ArtistListResponseDataItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtistListResponseDataItem {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    attributes: !exists(json, 'attributes') ? undefined : ArtistFromJSON(json['attributes']),
  };
}

export function ArtistListResponseDataItemToJSON(value?: ArtistListResponseDataItem | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    attributes: ArtistToJSON(value.attributes),
  };
}
