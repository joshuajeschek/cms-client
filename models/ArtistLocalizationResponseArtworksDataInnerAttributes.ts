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
import type { ArtistLocalizationResponseArtworksDataInnerAttributesArtists } from './ArtistLocalizationResponseArtworksDataInnerAttributesArtists';
import {
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsFromJSON,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsFromJSONTyped,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsToJSON,
} from './ArtistLocalizationResponseArtworksDataInnerAttributesArtists';
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
import type { ArtistLocalizationResponseArtworksDataInnerAttributesMedia } from './ArtistLocalizationResponseArtworksDataInnerAttributesMedia';
import {
  ArtistLocalizationResponseArtworksDataInnerAttributesMediaFromJSON,
  ArtistLocalizationResponseArtworksDataInnerAttributesMediaFromJSONTyped,
  ArtistLocalizationResponseArtworksDataInnerAttributesMediaToJSON,
} from './ArtistLocalizationResponseArtworksDataInnerAttributesMedia';

/**
 *
 * @export
 * @interface ArtistLocalizationResponseArtworksDataInnerAttributes
 */
export interface ArtistLocalizationResponseArtworksDataInnerAttributes {
  /**
   *
   * @type {string}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributes
   */
  title?: string;
  /**
   *
   * @type {string}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributes
   */
  description?: string;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtists}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributes
   */
  artists?: ArtistLocalizationResponseArtworksDataInnerAttributesArtists;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesMedia}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributes
   */
  media?: ArtistLocalizationResponseArtworksDataInnerAttributesMedia;
  /**
   *
   * @type {Date}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributes
   */
  creationDate?: Date;
  /**
   *
   * @type {string}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributes
   */
  originalTitle?: string;
  /**
   *
   * @type {Date}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributes
   */
  createdAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributes
   */
  updatedAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributes
   */
  publishedAt?: Date;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributes
   */
  createdBy?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributes
   */
  updatedBy?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizations}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributes
   */
  localizations?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizations;
  /**
   *
   * @type {string}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributes
   */
  locale?: string;
}

/**
 * Check if a given object implements the ArtistLocalizationResponseArtworksDataInnerAttributes interface.
 */
export function instanceOfArtistLocalizationResponseArtworksDataInnerAttributes(
  value: object
): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesFromJSON(
  json: any
): ArtistLocalizationResponseArtworksDataInnerAttributes {
  return ArtistLocalizationResponseArtworksDataInnerAttributesFromJSONTyped(json, false);
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtistLocalizationResponseArtworksDataInnerAttributes {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    title: !exists(json, 'title') ? undefined : json['title'],
    description: !exists(json, 'description') ? undefined : json['description'],
    artists: !exists(json, 'artists')
      ? undefined
      : ArtistLocalizationResponseArtworksDataInnerAttributesArtistsFromJSON(json['artists']),
    media: !exists(json, 'media')
      ? undefined
      : ArtistLocalizationResponseArtworksDataInnerAttributesMediaFromJSON(json['media']),
    creationDate: !exists(json, 'creationDate') ? undefined : new Date(json['creationDate']),
    originalTitle: !exists(json, 'originalTitle') ? undefined : json['originalTitle'],
    createdAt: !exists(json, 'createdAt') ? undefined : new Date(json['createdAt']),
    updatedAt: !exists(json, 'updatedAt') ? undefined : new Date(json['updatedAt']),
    publishedAt: !exists(json, 'publishedAt') ? undefined : new Date(json['publishedAt']),
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

export function ArtistLocalizationResponseArtworksDataInnerAttributesToJSON(
  value?: ArtistLocalizationResponseArtworksDataInnerAttributes | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    title: value.title,
    description: value.description,
    artists: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsToJSON(value.artists),
    media: ArtistLocalizationResponseArtworksDataInnerAttributesMediaToJSON(value.media),
    creationDate:
      value.creationDate === undefined ? undefined : value.creationDate.toISOString().substr(0, 10),
    originalTitle: value.originalTitle,
    createdAt: value.createdAt === undefined ? undefined : value.createdAt.toISOString(),
    updatedAt: value.updatedAt === undefined ? undefined : value.updatedAt.toISOString(),
    publishedAt: value.publishedAt === undefined ? undefined : value.publishedAt.toISOString(),
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