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
import type { AboutImageDataAttributesRelated } from './AboutImageDataAttributesRelated';
import {
  AboutImageDataAttributesRelatedFromJSON,
  AboutImageDataAttributesRelatedFromJSONTyped,
  AboutImageDataAttributesRelatedToJSON,
} from './AboutImageDataAttributesRelated';
import type { ArtistArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizations } from './ArtistArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizations';
import {
  ArtistArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizationsFromJSON,
  ArtistArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizationsFromJSONTyped,
  ArtistArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizationsToJSON,
} from './ArtistArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizations';
import type { ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributesCover } from './ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributesCover';
import {
  ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributesCoverFromJSON,
  ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributesCoverFromJSONTyped,
  ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributesCoverToJSON,
} from './ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributesCover';

/**
 *
 * @export
 * @interface ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributes
 */
export interface ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributes {
  /**
   *
   * @type {string}
   * @memberof ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  title?: string;
  /**
   *
   * @type {string}
   * @memberof ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  handle?: string;
  /**
   *
   * @type {AboutImageDataAttributesRelated}
   * @memberof ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  artworks?: AboutImageDataAttributesRelated;
  /**
   *
   * @type {ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributesCover}
   * @memberof ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  cover?: ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributesCover;
  /**
   *
   * @type {Date}
   * @memberof ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  launch?: Date;
  /**
   *
   * @type {Date}
   * @memberof ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  createdAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  updatedAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  publishedAt?: Date;
  /**
   *
   * @type {AboutImageDataAttributesFolderDataAttributesParent}
   * @memberof ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  createdBy?: AboutImageDataAttributesFolderDataAttributesParent;
  /**
   *
   * @type {AboutImageDataAttributesFolderDataAttributesParent}
   * @memberof ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  updatedBy?: AboutImageDataAttributesFolderDataAttributesParent;
  /**
   *
   * @type {ArtistArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizations}
   * @memberof ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  localizations?: ArtistArtworksDataInnerAttributesArtistsDataInnerAttributesLocalizations;
  /**
   *
   * @type {string}
   * @memberof ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  locale?: string;
}

/**
 * Check if a given object implements the ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributes interface.
 */
export function instanceOfArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributes(
  value: object
): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributesFromJSON(
  json: any
): ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributes {
  return ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributesFromJSONTyped(json, false);
}

export function ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributes {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    title: !exists(json, 'title') ? undefined : json['title'],
    description: !exists(json, 'description') ? undefined : json['description'],
    handle: !exists(json, 'handle') ? undefined : json['handle'],
    artworks: !exists(json, 'artworks')
      ? undefined
      : AboutImageDataAttributesRelatedFromJSON(json['artworks']),
    cover: !exists(json, 'cover')
      ? undefined
      : ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributesCoverFromJSON(json['cover']),
    launch: !exists(json, 'launch') ? undefined : new Date(json['launch']),
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

export function ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributesToJSON(
  value?: ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributes | null
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
    artworks: AboutImageDataAttributesRelatedToJSON(value.artworks),
    cover: ArtistArtworksDataInnerAttributesExhibitionsDataInnerAttributesCoverToJSON(value.cover),
    launch: value.launch === undefined ? undefined : value.launch.toISOString(),
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
