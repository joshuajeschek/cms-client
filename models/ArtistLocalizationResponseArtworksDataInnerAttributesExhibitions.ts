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
import type { ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInner } from './ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInner';
import {
  ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInnerFromJSON,
  ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInnerFromJSONTyped,
  ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInnerToJSON,
} from './ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInner';

/**
 *
 * @export
 * @interface ArtistLocalizationResponseArtworksDataInnerAttributesExhibitions
 */
export interface ArtistLocalizationResponseArtworksDataInnerAttributesExhibitions {
  /**
   *
   * @type {Array<ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInner>}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesExhibitions
   */
  data?: Array<ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInner>;
}

/**
 * Check if a given object implements the ArtistLocalizationResponseArtworksDataInnerAttributesExhibitions interface.
 */
export function instanceOfArtistLocalizationResponseArtworksDataInnerAttributesExhibitions(
  value: object
): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsFromJSON(
  json: any
): ArtistLocalizationResponseArtworksDataInnerAttributesExhibitions {
  return ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsFromJSONTyped(json, false);
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtistLocalizationResponseArtworksDataInnerAttributesExhibitions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: !exists(json, 'data')
      ? undefined
      : (json['data'] as Array<any>).map(
          ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInnerFromJSON
        ),
  };
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsToJSON(
  value?: ArtistLocalizationResponseArtworksDataInnerAttributesExhibitions | null
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
            ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInnerToJSON
          ),
  };
}
