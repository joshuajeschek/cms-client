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
import type { ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesContactInner } from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesContactInner';
import {
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesContactInnerFromJSON,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesContactInnerFromJSONTyped,
  ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesContactInnerToJSON,
} from './ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesContactInner';

/**
 *
 * @export
 * @interface ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes
 */
export interface ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes {
  /**
   *
   * @type {string}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes
   */
  bio?: string;
  /**
   *
   * @type {string}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes
   */
  handle?: string;
  /**
   *
   * @type {AboutLocalizationResponseImageDataAttributesRelated}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes
   */
  artworks?: AboutLocalizationResponseImageDataAttributesRelated;
  /**
   *
   * @type {AboutLocalizationResponseImage}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes
   */
  picture?: AboutLocalizationResponseImage;
  /**
   *
   * @type {Date}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes
   */
  birthday?: Date;
  /**
   *
   * @type {Array<ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesContactInner>}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes
   */
  contact?: Array<ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesContactInner>;
  /**
   *
   * @type {Date}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes
   */
  createdAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes
   */
  updatedAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes
   */
  publishedAt?: Date;
  /**
   *
   * @type {AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes
   */
  createdBy?: AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy;
  /**
   *
   * @type {AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes
   */
  updatedBy?: AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent;
  /**
   *
   * @type {AboutLocalizationResponseLocalizations}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes
   */
  localizations?: AboutLocalizationResponseLocalizations;
  /**
   *
   * @type {string}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes
   */
  locale?: string;
}

/**
 * Check if a given object implements the ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes interface.
 */
export function instanceOfArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes(
  value: object
): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesFromJSON(
  json: any
): ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes {
  return ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesFromJSONTyped(
    json,
    false
  );
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: !exists(json, 'name') ? undefined : json['name'],
    bio: !exists(json, 'bio') ? undefined : json['bio'],
    handle: !exists(json, 'handle') ? undefined : json['handle'],
    artworks: !exists(json, 'artworks')
      ? undefined
      : AboutLocalizationResponseImageDataAttributesRelatedFromJSON(json['artworks']),
    picture: !exists(json, 'picture')
      ? undefined
      : AboutLocalizationResponseImageFromJSON(json['picture']),
    birthday: !exists(json, 'birthday') ? undefined : new Date(json['birthday']),
    contact: !exists(json, 'contact')
      ? undefined
      : (json['contact'] as Array<any>).map(
          ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesContactInnerFromJSON
        ),
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

export function ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesToJSON(
  value?: ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributes | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    bio: value.bio,
    handle: value.handle,
    artworks: AboutLocalizationResponseImageDataAttributesRelatedToJSON(value.artworks),
    picture: AboutLocalizationResponseImageToJSON(value.picture),
    birthday: value.birthday === undefined ? undefined : value.birthday.toISOString().substr(0, 10),
    contact:
      value.contact === undefined
        ? undefined
        : (value.contact as Array<any>).map(
            ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesContactInnerToJSON
          ),
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
