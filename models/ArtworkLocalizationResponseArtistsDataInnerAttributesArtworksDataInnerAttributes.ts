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
import type { ArtistLocalizationResponseArtworksDataInnerAttributesMedia } from './ArtistLocalizationResponseArtworksDataInnerAttributesMedia';
import {
  ArtistLocalizationResponseArtworksDataInnerAttributesMediaFromJSON,
  ArtistLocalizationResponseArtworksDataInnerAttributesMediaFromJSONTyped,
  ArtistLocalizationResponseArtworksDataInnerAttributesMediaToJSON,
} from './ArtistLocalizationResponseArtworksDataInnerAttributesMedia';

/**
 *
 * @export
 * @interface ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributes
 */
export interface ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributes {
  /**
   *
   * @type {string}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributes
   */
  title?: string;
  /**
   *
   * @type {string}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributes
   */
  description?: string;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesArtworks}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributes
   */
  artists?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesArtworks;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesMedia}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributes
   */
  media?: ArtistLocalizationResponseArtworksDataInnerAttributesMedia;
  /**
   *
   * @type {Date}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributes
   */
  creationDate?: Date;
  /**
   *
   * @type {string}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributes
   */
  originalTitle?: string;
  /**
   *
   * @type {string}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributes
   */
  handle?: string;
  /**
   *
   * @type {Date}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributes
   */
  createdAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributes
   */
  updatedAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributes
   */
  publishedAt?: Date;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributes
   */
  createdBy?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesParent}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributes
   */
  updatedBy?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesParent;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizations}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributes
   */
  localizations?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizations;
  /**
   *
   * @type {string}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributes
   */
  locale?: string;
}

/**
 * Check if a given object implements the ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributes interface.
 */
export function instanceOfArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributes(
  value: object
): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesFromJSON(
  json: any
): ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributes {
  return ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesFromJSONTyped(
    json,
    false
  );
}

export function ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributes {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    title: !exists(json, 'title') ? undefined : json['title'],
    description: !exists(json, 'description') ? undefined : json['description'],
    artists: !exists(json, 'artists')
      ? undefined
      : ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesArtworksFromJSON(
          json['artists']
        ),
    media: !exists(json, 'media')
      ? undefined
      : ArtistLocalizationResponseArtworksDataInnerAttributesMediaFromJSON(json['media']),
    creationDate: !exists(json, 'creationDate') ? undefined : new Date(json['creationDate']),
    originalTitle: !exists(json, 'originalTitle') ? undefined : json['originalTitle'],
    handle: !exists(json, 'handle') ? undefined : json['handle'],
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

export function ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesToJSON(
  value?: ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributes | null
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
    artists:
      ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesArtworksToJSON(
        value.artists
      ),
    media: ArtistLocalizationResponseArtworksDataInnerAttributesMediaToJSON(value.media),
    creationDate:
      value.creationDate === undefined ? undefined : value.creationDate.toISOString().substr(0, 10),
    originalTitle: value.originalTitle,
    handle: value.handle,
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
