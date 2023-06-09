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
import type { ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInner } from './ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInner';
import {
  ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerFromJSON,
  ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerFromJSONTyped,
  ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerToJSON,
} from './ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInner';

/**
 *
 * @export
 * @interface ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitions
 */
export interface ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitions {
  /**
   *
   * @type {Array<ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInner>}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitions
   */
  data?: Array<ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInner>;
}

/**
 * Check if a given object implements the ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitions interface.
 */
export function instanceOfArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitions(
  value: object
): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsFromJSON(
  json: any
): ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitions {
  return ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsFromJSONTyped(
    json,
    false
  );
}

export function ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: !exists(json, 'data')
      ? undefined
      : (json['data'] as Array<any>).map(
          ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerFromJSON
        ),
  };
}

export function ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsToJSON(
  value?: ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitions | null
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
            ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerToJSON
          ),
  };
}
