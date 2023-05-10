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
import type { ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureData } from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureData';
import {
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataFromJSON,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataFromJSONTyped,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataToJSON,
} from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureData';

/**
 *
 * @export
 * @interface ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPicture
 */
export interface ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPicture {
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureData}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPicture
   */
  data?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureData;
}

/**
 * Check if a given object implements the ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPicture interface.
 */
export function instanceOfArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPicture(
  value: object
): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureFromJSON(
  json: any
): ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPicture {
  return ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureFromJSONTyped(
    json,
    false
  );
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPicture {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: !exists(json, 'data')
      ? undefined
      : ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataFromJSON(
          json['data']
        ),
  };
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureToJSON(
  value?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPicture | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataToJSON(
      value.data
    ),
  };
}