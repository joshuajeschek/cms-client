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
import type { ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole } from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole';
import {
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRoleFromJSON,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRoleFromJSONTyped,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRoleToJSON,
} from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole';
import type { ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizations } from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizations';
import {
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizationsFromJSON,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizationsFromJSONTyped,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizationsToJSON,
} from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizations';
import type { IndexLocalizationResponseExhibitions } from './IndexLocalizationResponseExhibitions';
import {
  IndexLocalizationResponseExhibitionsFromJSON,
  IndexLocalizationResponseExhibitionsFromJSONTyped,
  IndexLocalizationResponseExhibitionsToJSON,
} from './IndexLocalizationResponseExhibitions';

/**
 *
 * @export
 * @interface IndexListResponseDataItemLocalizedAttributes
 */
export interface IndexListResponseDataItemLocalizedAttributes {
  /**
   *
   * @type {IndexLocalizationResponseExhibitions}
   * @memberof IndexListResponseDataItemLocalizedAttributes
   */
  exhibitions?: IndexLocalizationResponseExhibitions;
  /**
   *
   * @type {Date}
   * @memberof IndexListResponseDataItemLocalizedAttributes
   */
  createdAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof IndexListResponseDataItemLocalizedAttributes
   */
  updatedAt?: Date;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole}
   * @memberof IndexListResponseDataItemLocalizedAttributes
   */
  createdBy?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole}
   * @memberof IndexListResponseDataItemLocalizedAttributes
   */
  updatedBy?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizations}
   * @memberof IndexListResponseDataItemLocalizedAttributes
   */
  localizations?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizations;
  /**
   *
   * @type {string}
   * @memberof IndexListResponseDataItemLocalizedAttributes
   */
  locale?: string;
}

/**
 * Check if a given object implements the IndexListResponseDataItemLocalizedAttributes interface.
 */
export function instanceOfIndexListResponseDataItemLocalizedAttributes(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function IndexListResponseDataItemLocalizedAttributesFromJSON(
  json: any
): IndexListResponseDataItemLocalizedAttributes {
  return IndexListResponseDataItemLocalizedAttributesFromJSONTyped(json, false);
}

export function IndexListResponseDataItemLocalizedAttributesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): IndexListResponseDataItemLocalizedAttributes {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    exhibitions: !exists(json, 'exhibitions')
      ? undefined
      : IndexLocalizationResponseExhibitionsFromJSON(json['exhibitions']),
    createdAt: !exists(json, 'createdAt') ? undefined : new Date(json['createdAt']),
    updatedAt: !exists(json, 'updatedAt') ? undefined : new Date(json['updatedAt']),
    createdBy: !exists(json, 'createdBy')
      ? undefined
      : ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRoleFromJSON(
          json['createdBy']
        ),
    updatedBy: !exists(json, 'updatedBy')
      ? undefined
      : ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRoleFromJSON(
          json['updatedBy']
        ),
    localizations: !exists(json, 'localizations')
      ? undefined
      : ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizationsFromJSON(
          json['localizations']
        ),
    locale: !exists(json, 'locale') ? undefined : json['locale'],
  };
}

export function IndexListResponseDataItemLocalizedAttributesToJSON(
  value?: IndexListResponseDataItemLocalizedAttributes | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    exhibitions: IndexLocalizationResponseExhibitionsToJSON(value.exhibitions),
    createdAt: value.createdAt === undefined ? undefined : value.createdAt.toISOString(),
    updatedAt: value.updatedAt === undefined ? undefined : value.updatedAt.toISOString(),
    createdBy:
      ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRoleToJSON(
        value.createdBy
      ),
    updatedBy:
      ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRoleToJSON(
        value.updatedBy
      ),
    localizations:
      ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizationsToJSON(
        value.localizations
      ),
    locale: value.locale,
  };
}
