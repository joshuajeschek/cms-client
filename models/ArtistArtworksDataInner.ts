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
import type { ArtistArtworksDataInnerAttributes } from './ArtistArtworksDataInnerAttributes';
import {
  ArtistArtworksDataInnerAttributesFromJSON,
  ArtistArtworksDataInnerAttributesFromJSONTyped,
  ArtistArtworksDataInnerAttributesToJSON,
} from './ArtistArtworksDataInnerAttributes';

/**
 *
 * @export
 * @interface ArtistArtworksDataInner
 */
export interface ArtistArtworksDataInner {
  /**
   *
   * @type {number}
   * @memberof ArtistArtworksDataInner
   */
  id?: number;
  /**
   *
   * @type {ArtistArtworksDataInnerAttributes}
   * @memberof ArtistArtworksDataInner
   */
  attributes?: ArtistArtworksDataInnerAttributes;
}

/**
 * Check if a given object implements the ArtistArtworksDataInner interface.
 */
export function instanceOfArtistArtworksDataInner(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtistArtworksDataInnerFromJSON(json: any): ArtistArtworksDataInner {
  return ArtistArtworksDataInnerFromJSONTyped(json, false);
}

export function ArtistArtworksDataInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtistArtworksDataInner {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    attributes: !exists(json, 'attributes')
      ? undefined
      : ArtistArtworksDataInnerAttributesFromJSON(json['attributes']),
  };
}

export function ArtistArtworksDataInnerToJSON(value?: ArtistArtworksDataInner | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    attributes: ArtistArtworksDataInnerAttributesToJSON(value.attributes),
  };
}
