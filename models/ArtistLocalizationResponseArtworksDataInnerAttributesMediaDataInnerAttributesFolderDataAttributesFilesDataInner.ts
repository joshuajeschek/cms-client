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
import type { ArtistLocalizationResponseArtworksDataInnerAttributesMediaDataInnerAttributesFolderDataAttributesFilesDataInnerAttributes } from './ArtistLocalizationResponseArtworksDataInnerAttributesMediaDataInnerAttributesFolderDataAttributesFilesDataInnerAttributes';
import {
  ArtistLocalizationResponseArtworksDataInnerAttributesMediaDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesFromJSON,
  ArtistLocalizationResponseArtworksDataInnerAttributesMediaDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesFromJSONTyped,
  ArtistLocalizationResponseArtworksDataInnerAttributesMediaDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesToJSON,
} from './ArtistLocalizationResponseArtworksDataInnerAttributesMediaDataInnerAttributesFolderDataAttributesFilesDataInnerAttributes';

/**
 *
 * @export
 * @interface ArtistLocalizationResponseArtworksDataInnerAttributesMediaDataInnerAttributesFolderDataAttributesFilesDataInner
 */
export interface ArtistLocalizationResponseArtworksDataInnerAttributesMediaDataInnerAttributesFolderDataAttributesFilesDataInner {
  /**
   *
   * @type {number}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesMediaDataInnerAttributesFolderDataAttributesFilesDataInner
   */
  id?: number;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesMediaDataInnerAttributesFolderDataAttributesFilesDataInnerAttributes}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesMediaDataInnerAttributesFolderDataAttributesFilesDataInner
   */
  attributes?: ArtistLocalizationResponseArtworksDataInnerAttributesMediaDataInnerAttributesFolderDataAttributesFilesDataInnerAttributes;
}

/**
 * Check if a given object implements the ArtistLocalizationResponseArtworksDataInnerAttributesMediaDataInnerAttributesFolderDataAttributesFilesDataInner interface.
 */
export function instanceOfArtistLocalizationResponseArtworksDataInnerAttributesMediaDataInnerAttributesFolderDataAttributesFilesDataInner(
  value: object
): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesMediaDataInnerAttributesFolderDataAttributesFilesDataInnerFromJSON(
  json: any
): ArtistLocalizationResponseArtworksDataInnerAttributesMediaDataInnerAttributesFolderDataAttributesFilesDataInner {
  return ArtistLocalizationResponseArtworksDataInnerAttributesMediaDataInnerAttributesFolderDataAttributesFilesDataInnerFromJSONTyped(
    json,
    false
  );
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesMediaDataInnerAttributesFolderDataAttributesFilesDataInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtistLocalizationResponseArtworksDataInnerAttributesMediaDataInnerAttributesFolderDataAttributesFilesDataInner {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    attributes: !exists(json, 'attributes')
      ? undefined
      : ArtistLocalizationResponseArtworksDataInnerAttributesMediaDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesFromJSON(
          json['attributes']
        ),
  };
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesMediaDataInnerAttributesFolderDataAttributesFilesDataInnerToJSON(
  value?: ArtistLocalizationResponseArtworksDataInnerAttributesMediaDataInnerAttributesFolderDataAttributesFilesDataInner | null
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
      ArtistLocalizationResponseArtworksDataInnerAttributesMediaDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesToJSON(
        value.attributes
      ),
  };
}
