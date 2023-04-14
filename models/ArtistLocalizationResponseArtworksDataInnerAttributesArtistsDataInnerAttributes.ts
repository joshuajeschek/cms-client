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
import type { ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesArtworks } from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesArtworks';
import {
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesArtworksFromJSON,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesArtworksFromJSONTyped,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesArtworksToJSON,
} from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesArtworks';
import type { ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedBy } from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedBy';
import {
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByFromJSON,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByFromJSONTyped,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByToJSON,
} from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedBy';
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

/**
 *
 * @export
 * @interface ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes
 */
export interface ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes {
  /**
   *
   * @type {string}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes
   */
  bio?: string;
  /**
   *
   * @type {string}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes
   */
  handle?: string;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesArtworks}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes
   */
  artworks?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesArtworks;
  /**
   *
   * @type {Date}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes
   */
  createdAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes
   */
  updatedAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes
   */
  publishedAt?: Date;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedBy}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes
   */
  createdBy?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedBy;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes
   */
  updatedBy?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizations}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes
   */
  localizations?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizations;
  /**
   *
   * @type {string}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes
   */
  locale?: string;
}

/**
 * Check if a given object implements the ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes interface.
 */
export function instanceOfArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes(
  value: object
): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesFromJSON(
  json: any
): ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes {
  return ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesFromJSONTyped(
    json,
    false
  );
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: !exists(json, 'name') ? undefined : json['name'],
    bio: !exists(json, 'bio') ? undefined : json['bio'],
    handle: !exists(json, 'handle') ? undefined : json['handle'],
    artworks: !exists(json, 'artworks')
      ? undefined
      : ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesArtworksFromJSON(
          json['artworks']
        ),
    createdAt: !exists(json, 'createdAt') ? undefined : new Date(json['createdAt']),
    updatedAt: !exists(json, 'updatedAt') ? undefined : new Date(json['updatedAt']),
    publishedAt: !exists(json, 'publishedAt') ? undefined : new Date(json['publishedAt']),
    createdBy: !exists(json, 'createdBy')
      ? undefined
      : ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByFromJSON(
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

export function ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesToJSON(
  value?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    bio: value.bio,
    handle: value.handle,
    artworks:
      ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesArtworksToJSON(
        value.artworks
      ),
    createdAt: value.createdAt === undefined ? undefined : value.createdAt.toISOString(),
    updatedAt: value.updatedAt === undefined ? undefined : value.updatedAt.toISOString(),
    publishedAt: value.publishedAt === undefined ? undefined : value.publishedAt.toISOString(),
    createdBy:
      ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByToJSON(
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