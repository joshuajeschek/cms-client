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
import type { ArtistLocalizationResponseArtworksDataInnerAttributes } from './ArtistLocalizationResponseArtworksDataInnerAttributes';
import {
  ArtistLocalizationResponseArtworksDataInnerAttributesFromJSON,
  ArtistLocalizationResponseArtworksDataInnerAttributesFromJSONTyped,
  ArtistLocalizationResponseArtworksDataInnerAttributesToJSON,
} from './ArtistLocalizationResponseArtworksDataInnerAttributes';

/**
 *
 * @export
 * @interface ArtistLocalizationResponseArtworksDataInner
 */
export interface ArtistLocalizationResponseArtworksDataInner {
  /**
   *
   * @type {number}
   * @memberof ArtistLocalizationResponseArtworksDataInner
   */
  id?: number;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributes}
   * @memberof ArtistLocalizationResponseArtworksDataInner
   */
  attributes?: ArtistLocalizationResponseArtworksDataInnerAttributes;
}

/**
 * Check if a given object implements the ArtistLocalizationResponseArtworksDataInner interface.
 */
export function instanceOfArtistLocalizationResponseArtworksDataInner(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtistLocalizationResponseArtworksDataInnerFromJSON(
  json: any
): ArtistLocalizationResponseArtworksDataInner {
  return ArtistLocalizationResponseArtworksDataInnerFromJSONTyped(json, false);
}

export function ArtistLocalizationResponseArtworksDataInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtistLocalizationResponseArtworksDataInner {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    attributes: !exists(json, 'attributes')
      ? undefined
      : ArtistLocalizationResponseArtworksDataInnerAttributesFromJSON(json['attributes']),
  };
}

export function ArtistLocalizationResponseArtworksDataInnerToJSON(
  value?: ArtistLocalizationResponseArtworksDataInner | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    attributes: ArtistLocalizationResponseArtworksDataInnerAttributesToJSON(value.attributes),
  };
}