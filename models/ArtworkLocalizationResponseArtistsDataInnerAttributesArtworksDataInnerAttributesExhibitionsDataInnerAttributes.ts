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
import type { ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizations } from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizations';
import {
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizationsFromJSON,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizationsFromJSONTyped,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizationsToJSON,
} from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizations';
import type { ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPicture } from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPicture';
import {
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureFromJSON,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureFromJSONTyped,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureToJSON,
} from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPicture';
import type { ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy } from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy';
import {
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByFromJSON,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByFromJSONTyped,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByToJSON,
} from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy';
import type { ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesParent } from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesParent';
import {
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesParentFromJSON,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesParentFromJSONTyped,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesParentToJSON,
} from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesParent';

/**
 *
 * @export
 * @interface ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerAttributes
 */
export interface ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerAttributes {
  /**
   *
   * @type {string}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  title?: string;
  /**
   *
   * @type {string}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  handle?: string;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesArtworks}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  artworks?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesArtworks;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPicture}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  cover?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPicture;
  /**
   *
   * @type {Date}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  launch?: Date;
  /**
   *
   * @type {Date}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  createdAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  updatedAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  publishedAt?: Date;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  createdBy?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesParent}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  updatedBy?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesParent;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizations}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  localizations?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizations;
  /**
   *
   * @type {string}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  locale?: string;
}

/**
 * Check if a given object implements the ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerAttributes interface.
 */
export function instanceOfArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerAttributes(
  value: object
): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerAttributesFromJSON(
  json: any
): ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerAttributes {
  return ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerAttributesFromJSONTyped(
    json,
    false
  );
}

export function ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerAttributesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerAttributes {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    title: !exists(json, 'title') ? undefined : json['title'],
    description: !exists(json, 'description') ? undefined : json['description'],
    handle: !exists(json, 'handle') ? undefined : json['handle'],
    artworks: !exists(json, 'artworks')
      ? undefined
      : ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesArtworksFromJSON(
          json['artworks']
        ),
    cover: !exists(json, 'cover')
      ? undefined
      : ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureFromJSON(
          json['cover']
        ),
    launch: !exists(json, 'launch') ? undefined : new Date(json['launch']),
    createdAt: !exists(json, 'createdAt') ? undefined : new Date(json['createdAt']),
    updatedAt: !exists(json, 'updatedAt') ? undefined : new Date(json['updatedAt']),
    publishedAt: !exists(json, 'publishedAt') ? undefined : new Date(json['publishedAt']),
    createdBy: !exists(json, 'createdBy')
      ? undefined
      : ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByFromJSON(
          json['createdBy']
        ),
    updatedBy: !exists(json, 'updatedBy')
      ? undefined
      : ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesParentFromJSON(
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

export function ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerAttributesToJSON(
  value?: ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerAttributes | null
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
    artworks:
      ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesArtworksToJSON(
        value.artworks
      ),
    cover:
      ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureToJSON(
        value.cover
      ),
    launch: value.launch === undefined ? undefined : value.launch.toISOString().substr(0, 10),
    createdAt: value.createdAt === undefined ? undefined : value.createdAt.toISOString(),
    updatedAt: value.updatedAt === undefined ? undefined : value.updatedAt.toISOString(),
    publishedAt: value.publishedAt === undefined ? undefined : value.publishedAt.toISOString(),
    createdBy:
      ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByToJSON(
        value.createdBy
      ),
    updatedBy:
      ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesParentToJSON(
        value.updatedBy
      ),
    localizations:
      ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizationsToJSON(
        value.localizations
      ),
    locale: value.locale,
  };
}