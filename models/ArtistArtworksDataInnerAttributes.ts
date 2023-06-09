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
import type { AboutImageDataAttributesFolderDataAttributesParent } from './AboutImageDataAttributesFolderDataAttributesParent';
import {
  AboutImageDataAttributesFolderDataAttributesParentFromJSON,
  AboutImageDataAttributesFolderDataAttributesParentFromJSONTyped,
  AboutImageDataAttributesFolderDataAttributesParentToJSON,
} from './AboutImageDataAttributesFolderDataAttributesParent';
import type { ArtistArtworksDataInnerAttributesArtists } from './ArtistArtworksDataInnerAttributesArtists';
import {
  ArtistArtworksDataInnerAttributesArtistsFromJSON,
  ArtistArtworksDataInnerAttributesArtistsFromJSONTyped,
  ArtistArtworksDataInnerAttributesArtistsToJSON,
} from './ArtistArtworksDataInnerAttributesArtists';
import type { ArtistArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizations } from './ArtistArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizations';
import {
  ArtistArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizationsFromJSON,
  ArtistArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizationsFromJSONTyped,
  ArtistArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizationsToJSON,
} from './ArtistArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizations';
import type { ArtistArtworksDataInnerAttributesExhibitions } from './ArtistArtworksDataInnerAttributesExhibitions';
import {
  ArtistArtworksDataInnerAttributesExhibitionsFromJSON,
  ArtistArtworksDataInnerAttributesExhibitionsFromJSONTyped,
  ArtistArtworksDataInnerAttributesExhibitionsToJSON,
} from './ArtistArtworksDataInnerAttributesExhibitions';
import type { ArtistArtworksDataInnerAttributesMedia } from './ArtistArtworksDataInnerAttributesMedia';
import {
  ArtistArtworksDataInnerAttributesMediaFromJSON,
  ArtistArtworksDataInnerAttributesMediaFromJSONTyped,
  ArtistArtworksDataInnerAttributesMediaToJSON,
} from './ArtistArtworksDataInnerAttributesMedia';

/**
 *
 * @export
 * @interface ArtistArtworksDataInnerAttributes
 */
export interface ArtistArtworksDataInnerAttributes {
  /**
   *
   * @type {string}
   * @memberof ArtistArtworksDataInnerAttributes
   */
  title?: string;
  /**
   *
   * @type {string}
   * @memberof ArtistArtworksDataInnerAttributes
   */
  description?: string;
  /**
   *
   * @type {ArtistArtworksDataInnerAttributesArtists}
   * @memberof ArtistArtworksDataInnerAttributes
   */
  artists?: ArtistArtworksDataInnerAttributesArtists;
  /**
   *
   * @type {ArtistArtworksDataInnerAttributesMedia}
   * @memberof ArtistArtworksDataInnerAttributes
   */
  media?: ArtistArtworksDataInnerAttributesMedia;
  /**
   *
   * @type {Date}
   * @memberof ArtistArtworksDataInnerAttributes
   */
  creationDate?: Date;
  /**
   *
   * @type {string}
   * @memberof ArtistArtworksDataInnerAttributes
   */
  originalTitle?: string;
  /**
   *
   * @type {string}
   * @memberof ArtistArtworksDataInnerAttributes
   */
  handle?: string;
  /**
   *
   * @type {ArtistArtworksDataInnerAttributesExhibitions}
   * @memberof ArtistArtworksDataInnerAttributes
   */
  exhibitions?: ArtistArtworksDataInnerAttributesExhibitions;
  /**
   *
   * @type {string}
   * @memberof ArtistArtworksDataInnerAttributes
   */
  creationDateAccuracy?: ArtistArtworksDataInnerAttributesCreationDateAccuracyEnum;
  /**
   *
   * @type {Date}
   * @memberof ArtistArtworksDataInnerAttributes
   */
  createdAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof ArtistArtworksDataInnerAttributes
   */
  updatedAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof ArtistArtworksDataInnerAttributes
   */
  publishedAt?: Date;
  /**
   *
   * @type {AboutImageDataAttributesFolderDataAttributesParent}
   * @memberof ArtistArtworksDataInnerAttributes
   */
  createdBy?: AboutImageDataAttributesFolderDataAttributesParent;
  /**
   *
   * @type {AboutImageDataAttributesFolderDataAttributesParent}
   * @memberof ArtistArtworksDataInnerAttributes
   */
  updatedBy?: AboutImageDataAttributesFolderDataAttributesParent;
  /**
   *
   * @type {ArtistArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizations}
   * @memberof ArtistArtworksDataInnerAttributes
   */
  localizations?: ArtistArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizations;
  /**
   *
   * @type {string}
   * @memberof ArtistArtworksDataInnerAttributes
   */
  locale?: string;
}

/**
 * @export
 */
export const ArtistArtworksDataInnerAttributesCreationDateAccuracyEnum = {
  Year: 'year',
  Month: 'month',
  Day: 'day',
} as const;
export type ArtistArtworksDataInnerAttributesCreationDateAccuracyEnum =
  (typeof ArtistArtworksDataInnerAttributesCreationDateAccuracyEnum)[keyof typeof ArtistArtworksDataInnerAttributesCreationDateAccuracyEnum];

/**
 * Check if a given object implements the ArtistArtworksDataInnerAttributes interface.
 */
export function instanceOfArtistArtworksDataInnerAttributes(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtistArtworksDataInnerAttributesFromJSON(
  json: any
): ArtistArtworksDataInnerAttributes {
  return ArtistArtworksDataInnerAttributesFromJSONTyped(json, false);
}

export function ArtistArtworksDataInnerAttributesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtistArtworksDataInnerAttributes {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    title: !exists(json, 'title') ? undefined : json['title'],
    description: !exists(json, 'description') ? undefined : json['description'],
    artists: !exists(json, 'artists')
      ? undefined
      : ArtistArtworksDataInnerAttributesArtistsFromJSON(json['artists']),
    media: !exists(json, 'media')
      ? undefined
      : ArtistArtworksDataInnerAttributesMediaFromJSON(json['media']),
    creationDate: !exists(json, 'creationDate') ? undefined : new Date(json['creationDate']),
    originalTitle: !exists(json, 'originalTitle') ? undefined : json['originalTitle'],
    handle: !exists(json, 'handle') ? undefined : json['handle'],
    exhibitions: !exists(json, 'exhibitions')
      ? undefined
      : ArtistArtworksDataInnerAttributesExhibitionsFromJSON(json['exhibitions']),
    creationDateAccuracy: !exists(json, 'creationDateAccuracy')
      ? undefined
      : json['creationDateAccuracy'],
    createdAt: !exists(json, 'createdAt') ? undefined : new Date(json['createdAt']),
    updatedAt: !exists(json, 'updatedAt') ? undefined : new Date(json['updatedAt']),
    publishedAt: !exists(json, 'publishedAt') ? undefined : new Date(json['publishedAt']),
    createdBy: !exists(json, 'createdBy')
      ? undefined
      : AboutImageDataAttributesFolderDataAttributesParentFromJSON(json['createdBy']),
    updatedBy: !exists(json, 'updatedBy')
      ? undefined
      : AboutImageDataAttributesFolderDataAttributesParentFromJSON(json['updatedBy']),
    localizations: !exists(json, 'localizations')
      ? undefined
      : ArtistArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizationsFromJSON(
          json['localizations']
        ),
    locale: !exists(json, 'locale') ? undefined : json['locale'],
  };
}

export function ArtistArtworksDataInnerAttributesToJSON(
  value?: ArtistArtworksDataInnerAttributes | null
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
    artists: ArtistArtworksDataInnerAttributesArtistsToJSON(value.artists),
    media: ArtistArtworksDataInnerAttributesMediaToJSON(value.media),
    creationDate:
      value.creationDate === undefined ? undefined : value.creationDate.toISOString().substr(0, 10),
    originalTitle: value.originalTitle,
    handle: value.handle,
    exhibitions: ArtistArtworksDataInnerAttributesExhibitionsToJSON(value.exhibitions),
    creationDateAccuracy: value.creationDateAccuracy,
    createdAt: value.createdAt === undefined ? undefined : value.createdAt.toISOString(),
    updatedAt: value.updatedAt === undefined ? undefined : value.updatedAt.toISOString(),
    publishedAt: value.publishedAt === undefined ? undefined : value.publishedAt.toISOString(),
    createdBy: AboutImageDataAttributesFolderDataAttributesParentToJSON(value.createdBy),
    updatedBy: AboutImageDataAttributesFolderDataAttributesParentToJSON(value.updatedBy),
    localizations: ArtistArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizationsToJSON(
      value.localizations
    ),
    locale: value.locale,
  };
}
