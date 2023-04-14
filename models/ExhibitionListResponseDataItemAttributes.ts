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
import type { ArtistLocalizationResponseArtworks } from './ArtistLocalizationResponseArtworks';
import {
  ArtistLocalizationResponseArtworksFromJSON,
  ArtistLocalizationResponseArtworksFromJSONTyped,
  ArtistLocalizationResponseArtworksToJSON,
} from './ArtistLocalizationResponseArtworks';
import type { ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole } from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole';
import {
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRoleFromJSON,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRoleFromJSONTyped,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRoleToJSON,
} from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole';
import type { ExhibitionListResponseDataItemAttributesLocalizations } from './ExhibitionListResponseDataItemAttributesLocalizations';
import {
  ExhibitionListResponseDataItemAttributesLocalizationsFromJSON,
  ExhibitionListResponseDataItemAttributesLocalizationsFromJSONTyped,
  ExhibitionListResponseDataItemAttributesLocalizationsToJSON,
} from './ExhibitionListResponseDataItemAttributesLocalizations';
import type { ExhibitionLocalizationResponseCover } from './ExhibitionLocalizationResponseCover';
import {
  ExhibitionLocalizationResponseCoverFromJSON,
  ExhibitionLocalizationResponseCoverFromJSONTyped,
  ExhibitionLocalizationResponseCoverToJSON,
} from './ExhibitionLocalizationResponseCover';

/**
 *
 * @export
 * @interface ExhibitionListResponseDataItemAttributes
 */
export interface ExhibitionListResponseDataItemAttributes {
  /**
   *
   * @type {string}
   * @memberof ExhibitionListResponseDataItemAttributes
   */
  title?: string;
  /**
   *
   * @type {string}
   * @memberof ExhibitionListResponseDataItemAttributes
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof ExhibitionListResponseDataItemAttributes
   */
  handle?: string;
  /**
   *
   * @type {ArtistLocalizationResponseArtworks}
   * @memberof ExhibitionListResponseDataItemAttributes
   */
  artworks?: ArtistLocalizationResponseArtworks;
  /**
   *
   * @type {ExhibitionLocalizationResponseCover}
   * @memberof ExhibitionListResponseDataItemAttributes
   */
  cover?: ExhibitionLocalizationResponseCover;
  /**
   *
   * @type {Date}
   * @memberof ExhibitionListResponseDataItemAttributes
   */
  launch?: Date;
  /**
   *
   * @type {Date}
   * @memberof ExhibitionListResponseDataItemAttributes
   */
  createdAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof ExhibitionListResponseDataItemAttributes
   */
  updatedAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof ExhibitionListResponseDataItemAttributes
   */
  publishedAt?: Date;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole}
   * @memberof ExhibitionListResponseDataItemAttributes
   */
  createdBy?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole}
   * @memberof ExhibitionListResponseDataItemAttributes
   */
  updatedBy?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole;
  /**
   *
   * @type {ExhibitionListResponseDataItemAttributesLocalizations}
   * @memberof ExhibitionListResponseDataItemAttributes
   */
  localizations?: ExhibitionListResponseDataItemAttributesLocalizations;
  /**
   *
   * @type {string}
   * @memberof ExhibitionListResponseDataItemAttributes
   */
  locale?: string;
}

/**
 * Check if a given object implements the ExhibitionListResponseDataItemAttributes interface.
 */
export function instanceOfExhibitionListResponseDataItemAttributes(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ExhibitionListResponseDataItemAttributesFromJSON(
  json: any
): ExhibitionListResponseDataItemAttributes {
  return ExhibitionListResponseDataItemAttributesFromJSONTyped(json, false);
}

export function ExhibitionListResponseDataItemAttributesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ExhibitionListResponseDataItemAttributes {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    title: !exists(json, 'title') ? undefined : json['title'],
    description: !exists(json, 'description') ? undefined : json['description'],
    handle: !exists(json, 'handle') ? undefined : json['handle'],
    artworks: !exists(json, 'artworks')
      ? undefined
      : ArtistLocalizationResponseArtworksFromJSON(json['artworks']),
    cover: !exists(json, 'cover')
      ? undefined
      : ExhibitionLocalizationResponseCoverFromJSON(json['cover']),
    launch: !exists(json, 'launch') ? undefined : new Date(json['launch']),
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
      : ExhibitionListResponseDataItemAttributesLocalizationsFromJSON(json['localizations']),
    locale: !exists(json, 'locale') ? undefined : json['locale'],
  };
}

export function ExhibitionListResponseDataItemAttributesToJSON(
  value?: ExhibitionListResponseDataItemAttributes | null
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
    handle: value.handle,
    artworks: ArtistLocalizationResponseArtworksToJSON(value.artworks),
    cover: ExhibitionLocalizationResponseCoverToJSON(value.cover),
    launch: value.launch === undefined ? undefined : value.launch.toISOString().substr(0, 10),
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
    localizations: ExhibitionListResponseDataItemAttributesLocalizationsToJSON(value.localizations),
    locale: value.locale,
  };
}
