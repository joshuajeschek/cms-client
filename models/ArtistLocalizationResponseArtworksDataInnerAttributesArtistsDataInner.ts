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
import type { ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes } from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes';
import {
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesFromJSON,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesFromJSONTyped,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesToJSON,
} from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes';

/**
 *
 * @export
 * @interface ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInner
 */
export interface ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInner {
  /**
   *
   * @type {number}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInner
   */
  id?: number;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInner
   */
  attributes?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes;
}

/**
 * Check if a given object implements the ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInner interface.
 */
export function instanceOfArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInner(
  value: object
): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerFromJSON(
  json: any
): ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInner {
  return ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerFromJSONTyped(
    json,
    false
  );
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInner {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    attributes: !exists(json, 'attributes')
      ? undefined
      : ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesFromJSON(
          json['attributes']
        ),
  };
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerToJSON(
  value?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInner | null
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
      ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesToJSON(
        value.attributes
      ),
  };
}
