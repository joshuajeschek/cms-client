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
import type { ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInner } from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInner';
import {
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInnerFromJSON,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInnerFromJSONTyped,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInnerToJSON,
} from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInner';

/**
 *
 * @export
 * @interface ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRoles
 */
export interface ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRoles {
  /**
   *
   * @type {Array<ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInner>}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRoles
   */
  data?: Array<ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInner>;
}

/**
 * Check if a given object implements the ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRoles interface.
 */
export function instanceOfArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRoles(
  value: object
): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesFromJSON(
  json: any
): ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRoles {
  return ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesFromJSONTyped(
    json,
    false
  );
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRoles {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: !exists(json, 'data')
      ? undefined
      : (json['data'] as Array<any>).map(
          ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInnerFromJSON
        ),
  };
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesToJSON(
  value?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRoles | null
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
            ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesDataInnerToJSON
          ),
  };
}
