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
import type { ArtworkLocalizationResponseArtists } from './ArtworkLocalizationResponseArtists';
import {
  ArtworkLocalizationResponseArtistsFromJSON,
  ArtworkLocalizationResponseArtistsFromJSONTyped,
  ArtworkLocalizationResponseArtistsToJSON,
} from './ArtworkLocalizationResponseArtists';

/**
 *
 * @export
 * @interface ArtworkListResponseDataItemLocalizedAttributes
 */
export interface ArtworkListResponseDataItemLocalizedAttributes {
  /**
   *
   * @type {string}
   * @memberof ArtworkListResponseDataItemLocalizedAttributes
   */
  title?: string;
  /**
   *
   * @type {string}
   * @memberof ArtworkListResponseDataItemLocalizedAttributes
   */
  description?: string;
  /**
   *
   * @type {ArtworkLocalizationResponseArtists}
   * @memberof ArtworkListResponseDataItemLocalizedAttributes
   */
  artists?: ArtworkLocalizationResponseArtists;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesMedia}
   * @memberof ArtworkListResponseDataItemLocalizedAttributes
   */
  media?: ArtistLocalizationResponseArtworksDataInnerAttributesMedia;
  /**
   *
   * @type {Date}
   * @memberof ArtworkListResponseDataItemLocalizedAttributes
   */
  creationDate?: Date;
  /**
   *
   * @type {string}
   * @memberof ArtworkListResponseDataItemLocalizedAttributes
   */
  originalTitle?: string;
  /**
   *
   * @type {string}
   * @memberof ArtworkListResponseDataItemLocalizedAttributes
   */
  handle?: string;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesArtworks}
   * @memberof ArtworkListResponseDataItemLocalizedAttributes
   */
  exhibitions?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesArtworks;
  /**
   *
   * @type {Date}
   * @memberof ArtworkListResponseDataItemLocalizedAttributes
   */
  createdAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof ArtworkListResponseDataItemLocalizedAttributes
   */
  updatedAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof ArtworkListResponseDataItemLocalizedAttributes
   */
  publishedAt?: Date;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesParent}
   * @memberof ArtworkListResponseDataItemLocalizedAttributes
   */
  createdBy?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesParent;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesParent}
   * @memberof ArtworkListResponseDataItemLocalizedAttributes
   */
  updatedBy?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesParent;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizations}
   * @memberof ArtworkListResponseDataItemLocalizedAttributes
   */
  localizations?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizations;
  /**
   *
   * @type {string}
   * @memberof ArtworkListResponseDataItemLocalizedAttributes
   */
  locale?: string;
}

/**
 * Check if a given object implements the ArtworkListResponseDataItemLocalizedAttributes interface.
 */
export function instanceOfArtworkListResponseDataItemLocalizedAttributes(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtworkListResponseDataItemLocalizedAttributesFromJSON(
  json: any
): ArtworkListResponseDataItemLocalizedAttributes {
  return ArtworkListResponseDataItemLocalizedAttributesFromJSONTyped(json, false);
}

export function ArtworkListResponseDataItemLocalizedAttributesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtworkListResponseDataItemLocalizedAttributes {
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
    handle: !exists(json, 'handle') ? undefined : json['handle'],
    exhibitions: !exists(json, 'exhibitions')
      ? undefined
      : ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesArtworksFromJSON(
          json['exhibitions']
        ),
    createdAt: !exists(json, 'createdAt') ? undefined : new Date(json['createdAt']),
    updatedAt: !exists(json, 'updatedAt') ? undefined : new Date(json['updatedAt']),
    publishedAt: !exists(json, 'publishedAt') ? undefined : new Date(json['publishedAt']),
    createdBy: !exists(json, 'createdBy')
      ? undefined
      : ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesParentFromJSON(
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

export function ArtworkListResponseDataItemLocalizedAttributesToJSON(
  value?: ArtworkListResponseDataItemLocalizedAttributes | null
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
    handle: value.handle,
    exhibitions:
      ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesArtworksToJSON(
        value.exhibitions
      ),
    createdAt: value.createdAt === undefined ? undefined : value.createdAt.toISOString(),
    updatedAt: value.updatedAt === undefined ? undefined : value.updatedAt.toISOString(),
    publishedAt: value.publishedAt === undefined ? undefined : value.publishedAt.toISOString(),
    createdBy:
      ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesParentToJSON(
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
