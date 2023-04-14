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
import type { ArtworkListResponseDataItemLocalizedAttributes } from './ArtworkListResponseDataItemLocalizedAttributes';
import {
  ArtworkListResponseDataItemLocalizedAttributesFromJSON,
  ArtworkListResponseDataItemLocalizedAttributesFromJSONTyped,
  ArtworkListResponseDataItemLocalizedAttributesToJSON,
} from './ArtworkListResponseDataItemLocalizedAttributes';

/**
 *
 * @export
 * @interface ArtworkResponseDataObjectLocalized
 */
export interface ArtworkResponseDataObjectLocalized {
  /**
   *
   * @type {number}
   * @memberof ArtworkResponseDataObjectLocalized
   */
  id?: number;
  /**
   *
   * @type {ArtworkListResponseDataItemLocalizedAttributes}
   * @memberof ArtworkResponseDataObjectLocalized
   */
  attributes?: ArtworkListResponseDataItemLocalizedAttributes;
}

/**
 * Check if a given object implements the ArtworkResponseDataObjectLocalized interface.
 */
export function instanceOfArtworkResponseDataObjectLocalized(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtworkResponseDataObjectLocalizedFromJSON(
  json: any
): ArtworkResponseDataObjectLocalized {
  return ArtworkResponseDataObjectLocalizedFromJSONTyped(json, false);
}

export function ArtworkResponseDataObjectLocalizedFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtworkResponseDataObjectLocalized {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    attributes: !exists(json, 'attributes')
      ? undefined
      : ArtworkListResponseDataItemLocalizedAttributesFromJSON(json['attributes']),
  };
}

export function ArtworkResponseDataObjectLocalizedToJSON(
  value?: ArtworkResponseDataObjectLocalized | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    attributes: ArtworkListResponseDataItemLocalizedAttributesToJSON(value.attributes),
  };
}