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
import type { ArtistLocalizationResponseArtworksDataInnerAttributesMedia } from './ArtistLocalizationResponseArtworksDataInnerAttributesMedia';
import {
  ArtistLocalizationResponseArtworksDataInnerAttributesMediaFromJSON,
  ArtistLocalizationResponseArtworksDataInnerAttributesMediaFromJSONTyped,
  ArtistLocalizationResponseArtworksDataInnerAttributesMediaToJSON,
} from './ArtistLocalizationResponseArtworksDataInnerAttributesMedia';
import type { ArtworkLocalizationResponseArtists } from './ArtworkLocalizationResponseArtists';
import {
  ArtworkLocalizationResponseArtistsFromJSON,
  ArtworkLocalizationResponseArtistsFromJSONTyped,
  ArtworkLocalizationResponseArtistsToJSON,
} from './ArtworkLocalizationResponseArtists';
import type { ArtworkResponseDataObjectAttributesLocalizations } from './ArtworkResponseDataObjectAttributesLocalizations';
import {
  ArtworkResponseDataObjectAttributesLocalizationsFromJSON,
  ArtworkResponseDataObjectAttributesLocalizationsFromJSONTyped,
  ArtworkResponseDataObjectAttributesLocalizationsToJSON,
} from './ArtworkResponseDataObjectAttributesLocalizations';

/**
 *
 * @export
 * @interface ArtworkResponseDataObjectAttributes
 */
export interface ArtworkResponseDataObjectAttributes {
  /**
   *
   * @type {string}
   * @memberof ArtworkResponseDataObjectAttributes
   */
  title?: string;
  /**
   *
   * @type {string}
   * @memberof ArtworkResponseDataObjectAttributes
   */
  description?: string;
  /**
   *
   * @type {ArtworkLocalizationResponseArtists}
   * @memberof ArtworkResponseDataObjectAttributes
   */
  artists?: ArtworkLocalizationResponseArtists;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesMedia}
   * @memberof ArtworkResponseDataObjectAttributes
   */
  media?: ArtistLocalizationResponseArtworksDataInnerAttributesMedia;
  /**
   *
   * @type {Date}
   * @memberof ArtworkResponseDataObjectAttributes
   */
  creationDate?: Date;
  /**
   *
   * @type {string}
   * @memberof ArtworkResponseDataObjectAttributes
   */
  originalTitle?: string;
  /**
   *
   * @type {Date}
   * @memberof ArtworkResponseDataObjectAttributes
   */
  createdAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof ArtworkResponseDataObjectAttributes
   */
  updatedAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof ArtworkResponseDataObjectAttributes
   */
  publishedAt?: Date;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole}
   * @memberof ArtworkResponseDataObjectAttributes
   */
  createdBy?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole}
   * @memberof ArtworkResponseDataObjectAttributes
   */
  updatedBy?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole;
  /**
   *
   * @type {ArtworkResponseDataObjectAttributesLocalizations}
   * @memberof ArtworkResponseDataObjectAttributes
   */
  localizations?: ArtworkResponseDataObjectAttributesLocalizations;
  /**
   *
   * @type {string}
   * @memberof ArtworkResponseDataObjectAttributes
   */
  locale?: string;
}

/**
 * Check if a given object implements the ArtworkResponseDataObjectAttributes interface.
 */
export function instanceOfArtworkResponseDataObjectAttributes(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtworkResponseDataObjectAttributesFromJSON(
  json: any
): ArtworkResponseDataObjectAttributes {
  return ArtworkResponseDataObjectAttributesFromJSONTyped(json, false);
}

export function ArtworkResponseDataObjectAttributesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtworkResponseDataObjectAttributes {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    title: !exists(json, 'title') ? undefined : json['title'],
    description: !exists(json, 'description') ? undefined : json['description'],
    artists: !exists(json, 'artists')
      ? undefined
      : ArtworkLocalizationResponseArtistsFromJSON(json['artists']),
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
      : ArtworkResponseDataObjectAttributesLocalizationsFromJSON(json['localizations']),
    locale: !exists(json, 'locale') ? undefined : json['locale'],
  };
}

export function ArtworkResponseDataObjectAttributesToJSON(
  value?: ArtworkResponseDataObjectAttributes | null
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
    artists: ArtworkLocalizationResponseArtistsToJSON(value.artists),
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
    localizations: ArtworkResponseDataObjectAttributesLocalizationsToJSON(value.localizations),
    locale: value.locale,
  };
}
