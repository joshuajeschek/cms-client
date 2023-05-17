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
import type { ArtistArtworksDataInnerAttributesArtistsDataInnerAttributes } from './ArtistArtworksDataInnerAttributesArtistsDataInnerAttributes';
import {
  ArtistArtworksDataInnerAttributesArtistsDataInnerAttributesFromJSON,
  ArtistArtworksDataInnerAttributesArtistsDataInnerAttributesFromJSONTyped,
  ArtistArtworksDataInnerAttributesArtistsDataInnerAttributesToJSON,
} from './ArtistArtworksDataInnerAttributesArtistsDataInnerAttributes';

/**
 *
 * @export
 * @interface ArtistArtworksDataInnerAttributesArtistsDataInner
 */
export interface ArtistArtworksDataInnerAttributesArtistsDataInner {
  /**
   *
   * @type {number}
   * @memberof ArtistArtworksDataInnerAttributesArtistsDataInner
   */
  id?: number;
  /**
   *
   * @type {ArtistArtworksDataInnerAttributesArtistsDataInnerAttributes}
   * @memberof ArtistArtworksDataInnerAttributesArtistsDataInner
   */
  attributes?: ArtistArtworksDataInnerAttributesArtistsDataInnerAttributes;
}

/**
 * Check if a given object implements the ArtistArtworksDataInnerAttributesArtistsDataInner interface.
 */
export function instanceOfArtistArtworksDataInnerAttributesArtistsDataInner(
  value: object
): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtistArtworksDataInnerAttributesArtistsDataInnerFromJSON(
  json: any
): ArtistArtworksDataInnerAttributesArtistsDataInner {
  return ArtistArtworksDataInnerAttributesArtistsDataInnerFromJSONTyped(json, false);
}

export function ArtistArtworksDataInnerAttributesArtistsDataInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtistArtworksDataInnerAttributesArtistsDataInner {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    attributes: !exists(json, 'attributes')
      ? undefined
      : ArtistArtworksDataInnerAttributesArtistsDataInnerAttributesFromJSON(json['attributes']),
  };
}

export function ArtistArtworksDataInnerAttributesArtistsDataInnerToJSON(
  value?: ArtistArtworksDataInnerAttributesArtistsDataInner | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    attributes: ArtistArtworksDataInnerAttributesArtistsDataInnerAttributesToJSON(value.attributes),
  };
}