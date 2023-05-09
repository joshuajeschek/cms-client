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
import type { UpdateResponseDataObjectAttributesLocalizations } from './UpdateResponseDataObjectAttributesLocalizations';
import {
  UpdateResponseDataObjectAttributesLocalizationsFromJSON,
  UpdateResponseDataObjectAttributesLocalizationsFromJSONTyped,
  UpdateResponseDataObjectAttributesLocalizationsToJSON,
} from './UpdateResponseDataObjectAttributesLocalizations';

/**
 *
 * @export
 * @interface UpdateResponseDataObjectAttributes
 */
export interface UpdateResponseDataObjectAttributes {
  /**
   *
   * @type {string}
   * @memberof UpdateResponseDataObjectAttributes
   */
  title?: string;
  /**
   *
   * @type {string}
   * @memberof UpdateResponseDataObjectAttributes
   */
  content?: string;
  /**
   *
   * @type {Date}
   * @memberof UpdateResponseDataObjectAttributes
   */
  datetime?: Date;
  /**
   *
   * @type {Date}
   * @memberof UpdateResponseDataObjectAttributes
   */
  createdAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof UpdateResponseDataObjectAttributes
   */
  updatedAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof UpdateResponseDataObjectAttributes
   */
  publishedAt?: Date;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy}
   * @memberof UpdateResponseDataObjectAttributes
   */
  createdBy?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesParent}
   * @memberof UpdateResponseDataObjectAttributes
   */
  updatedBy?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesPictureDataAttributesFolderDataAttributesParent;
  /**
   *
   * @type {UpdateResponseDataObjectAttributesLocalizations}
   * @memberof UpdateResponseDataObjectAttributes
   */
  localizations?: UpdateResponseDataObjectAttributesLocalizations;
  /**
   *
   * @type {string}
   * @memberof UpdateResponseDataObjectAttributes
   */
  locale?: string;
}

/**
 * Check if a given object implements the UpdateResponseDataObjectAttributes interface.
 */
export function instanceOfUpdateResponseDataObjectAttributes(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function UpdateResponseDataObjectAttributesFromJSON(
  json: any
): UpdateResponseDataObjectAttributes {
  return UpdateResponseDataObjectAttributesFromJSONTyped(json, false);
}

export function UpdateResponseDataObjectAttributesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateResponseDataObjectAttributes {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    title: !exists(json, 'title') ? undefined : json['title'],
    content: !exists(json, 'content') ? undefined : json['content'],
    datetime: !exists(json, 'datetime') ? undefined : new Date(json['datetime']),
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
      : UpdateResponseDataObjectAttributesLocalizationsFromJSON(json['localizations']),
    locale: !exists(json, 'locale') ? undefined : json['locale'],
  };
}

export function UpdateResponseDataObjectAttributesToJSON(
  value?: UpdateResponseDataObjectAttributes | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    title: value.title,
    content: value.content,
    datetime: value.datetime === undefined ? undefined : value.datetime.toISOString(),
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
    localizations: UpdateResponseDataObjectAttributesLocalizationsToJSON(value.localizations),
    locale: value.locale,
  };
}
