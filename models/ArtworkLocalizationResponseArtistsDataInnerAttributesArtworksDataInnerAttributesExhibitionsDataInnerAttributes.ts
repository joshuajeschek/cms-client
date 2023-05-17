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
import type { AboutLocalizationResponseImage } from './AboutLocalizationResponseImage';
import {
  AboutLocalizationResponseImageFromJSON,
  AboutLocalizationResponseImageFromJSONTyped,
  AboutLocalizationResponseImageToJSON,
} from './AboutLocalizationResponseImage';
import type { AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy } from './AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy';
import {
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByFromJSON,
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByFromJSONTyped,
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByToJSON,
} from './AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy';
import type { AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent } from './AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent';
import {
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentFromJSON,
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentFromJSONTyped,
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentToJSON,
} from './AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent';
import type { AboutLocalizationResponseImageDataAttributesRelated } from './AboutLocalizationResponseImageDataAttributesRelated';
import {
  AboutLocalizationResponseImageDataAttributesRelatedFromJSON,
  AboutLocalizationResponseImageDataAttributesRelatedFromJSONTyped,
  AboutLocalizationResponseImageDataAttributesRelatedToJSON,
} from './AboutLocalizationResponseImageDataAttributesRelated';
import type { AboutLocalizationResponseLocalizations } from './AboutLocalizationResponseLocalizations';
import {
  AboutLocalizationResponseLocalizationsFromJSON,
  AboutLocalizationResponseLocalizationsFromJSONTyped,
  AboutLocalizationResponseLocalizationsToJSON,
} from './AboutLocalizationResponseLocalizations';

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
   * @type {AboutLocalizationResponseImageDataAttributesRelated}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  artworks?: AboutLocalizationResponseImageDataAttributesRelated;
  /**
   *
   * @type {AboutLocalizationResponseImage}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  cover?: AboutLocalizationResponseImage;
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
   * @type {AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  createdBy?: AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy;
  /**
   *
   * @type {AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  updatedBy?: AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent;
  /**
   *
   * @type {AboutLocalizationResponseLocalizations}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksDataInnerAttributesExhibitionsDataInnerAttributes
   */
  localizations?: AboutLocalizationResponseLocalizations;
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
      : AboutLocalizationResponseImageDataAttributesRelatedFromJSON(json['artworks']),
    cover: !exists(json, 'cover')
      ? undefined
      : AboutLocalizationResponseImageFromJSON(json['cover']),
    launch: !exists(json, 'launch') ? undefined : new Date(json['launch']),
    createdAt: !exists(json, 'createdAt') ? undefined : new Date(json['createdAt']),
    updatedAt: !exists(json, 'updatedAt') ? undefined : new Date(json['updatedAt']),
    publishedAt: !exists(json, 'publishedAt') ? undefined : new Date(json['publishedAt']),
    createdBy: !exists(json, 'createdBy')
      ? undefined
      : AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByFromJSON(
          json['createdBy']
        ),
    updatedBy: !exists(json, 'updatedBy')
      ? undefined
      : AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentFromJSON(
          json['updatedBy']
        ),
    localizations: !exists(json, 'localizations')
      ? undefined
      : AboutLocalizationResponseLocalizationsFromJSON(json['localizations']),
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
    artworks: AboutLocalizationResponseImageDataAttributesRelatedToJSON(value.artworks),
    cover: AboutLocalizationResponseImageToJSON(value.cover),
    launch: value.launch === undefined ? undefined : value.launch.toISOString().substr(0, 10),
    createdAt: value.createdAt === undefined ? undefined : value.createdAt.toISOString(),
    updatedAt: value.updatedAt === undefined ? undefined : value.updatedAt.toISOString(),
    publishedAt: value.publishedAt === undefined ? undefined : value.publishedAt.toISOString(),
    createdBy:
      AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByToJSON(
        value.createdBy
      ),
    updatedBy: AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentToJSON(
      value.updatedBy
    ),
    localizations: AboutLocalizationResponseLocalizationsToJSON(value.localizations),
    locale: value.locale,
  };
}
