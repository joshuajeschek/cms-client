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
import type { ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInner } from './ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInner';
import {
  ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerFromJSON,
  ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerFromJSONTyped,
  ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerToJSON,
} from './ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInner';

/**
 *
 * @export
 * @interface ArtworkLocalizationResponseArtistsDataInnerAttributesArtworks
 */
export interface ArtworkLocalizationResponseArtistsDataInnerAttributesArtworks {
  /**
   *
   * @type {Array<ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInner>}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworks
   */
  data?: Array<ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInner>;
}

/**
 * Check if a given object implements the ArtworkLocalizationResponseArtistsDataInnerAttributesArtworks interface.
 */
export function instanceOfArtworkLocalizationResponseArtistsDataInnerAttributesArtworks(
  value: object
): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksFromJSON(
  json: any
): ArtworkLocalizationResponseArtistsDataInnerAttributesArtworks {
  return ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksFromJSONTyped(json, false);
}

export function ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtworkLocalizationResponseArtistsDataInnerAttributesArtworks {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: !exists(json, 'data')
      ? undefined
      : (json['data'] as Array<any>).map(
          ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerFromJSON
        ),
  };
}

export function ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksToJSON(
  value?: ArtworkLocalizationResponseArtistsDataInnerAttributesArtworks | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data:
      value.data === undefined
        ? undefined
        : (value.data as Array<any>).map(
            ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerToJSON
          ),
  };
}
