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
import type { ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributes } from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributes';
import {
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFromJSON,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFromJSONTyped,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesToJSON,
} from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributes';

/**
 *
 * @export
 * @interface ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderData
 */
export interface ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderData {
  /**
   *
   * @type {number}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderData
   */
  id?: number;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributes}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderData
   */
  attributes?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributes;
}

/**
 * Check if a given object implements the ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderData interface.
 */
export function instanceOfArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderData(
  value: object
): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataFromJSON(
  json: any
): ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderData {
  return ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataFromJSONTyped(
    json,
    false
  );
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderData {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    attributes: !exists(json, 'attributes')
      ? undefined
      : ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFromJSON(
          json['attributes']
        ),
  };
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataToJSON(
  value?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderData | null
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
      ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesToJSON(
        value.attributes
      ),
  };
}
