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
import type { ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributes } from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributes';
import {
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesFromJSON,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesFromJSONTyped,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesToJSON,
} from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributes';

/**
 *
 * @export
 * @interface ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInner
 */
export interface ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInner {
  /**
   *
   * @type {number}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInner
   */
  id?: number;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributes}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInner
   */
  attributes?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributes;
}

/**
 * Check if a given object implements the ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInner interface.
 */
export function instanceOfArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInner(
  value: object
): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerFromJSON(
  json: any
): ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInner {
  return ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerFromJSONTyped(
    json,
    false
  );
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInner {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    attributes: !exists(json, 'attributes')
      ? undefined
      : ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesFromJSON(
          json['attributes']
        ),
  };
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerToJSON(
  value?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInner | null
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
      ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesToJSON(
        value.attributes
      ),
  };
}