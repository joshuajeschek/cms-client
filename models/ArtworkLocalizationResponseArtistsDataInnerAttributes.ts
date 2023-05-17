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
import type { AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent } from './AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent';
import {
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentFromJSON,
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentFromJSONTyped,
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentToJSON,
} from './AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent';
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
import type { ArtworkLocalizationResponseArtistsDataInnerAttributesArtworks } from './ArtworkLocalizationResponseArtistsDataInnerAttributesArtworks';
import {
  ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksFromJSON,
  ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksFromJSONTyped,
  ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksToJSON,
} from './ArtworkLocalizationResponseArtistsDataInnerAttributesArtworks';

/**
 *
 * @export
 * @interface ArtworkLocalizationResponseArtistsDataInnerAttributes
 */
export interface ArtworkLocalizationResponseArtistsDataInnerAttributes {
  /**
   *
   * @type {string}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributes
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributes
   */
  bio?: string;
  /**
   *
   * @type {string}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributes
   */
  handle?: string;
  /**
   *
   * @type {ArtworkLocalizationResponseArtistsDataInnerAttributesArtworks}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributes
   */
  artworks?: ArtworkLocalizationResponseArtistsDataInnerAttributesArtworks;
  /**
   *
   * @type {AboutLocalizationResponseImage}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributes
   */
  picture?: AboutLocalizationResponseImage;
  /**
   *
   * @type {Date}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributes
   */
  birthday?: Date;
  /**
   *
   * @type {Array<ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesContactInner>}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributes
   */
  contact?: Array<ArtistLocalizationResponseArtworksDataInnerAttributesArtistsDataInnerAttributesContactInner>;
  /**
   *
   * @type {Date}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributes
   */
  createdAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributes
   */
  updatedAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributes
   */
  publishedAt?: Date;
  /**
   *
   * @type {AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributes
   */
  createdBy?: AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent;
  /**
   *
   * @type {AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributes
   */
  updatedBy?: AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent;
  /**
   *
   * @type {AboutLocalizationResponseLocalizations}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributes
   */
  localizations?: AboutLocalizationResponseLocalizations;
  /**
   *
   * @type {string}
   * @memberof ArtworkLocalizationResponseArtistsDataInnerAttributes
   */
  locale?: string;
}

/**
 * Check if a given object implements the ArtworkLocalizationResponseArtistsDataInnerAttributes interface.
 */
export function instanceOfArtworkLocalizationResponseArtistsDataInnerAttributes(
  value: object
): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtworkLocalizationResponseArtistsDataInnerAttributesFromJSON(
  json: any
): ArtworkLocalizationResponseArtistsDataInnerAttributes {
  return ArtworkLocalizationResponseArtistsDataInnerAttributesFromJSONTyped(json, false);
}

export function ArtworkLocalizationResponseArtistsDataInnerAttributesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtworkLocalizationResponseArtistsDataInnerAttributes {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: !exists(json, 'name') ? undefined : json['name'],
    bio: !exists(json, 'bio') ? undefined : json['bio'],
    handle: !exists(json, 'handle') ? undefined : json['handle'],
    artworks: !exists(json, 'artworks')
      ? undefined
      : ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksFromJSON(json['artworks']),
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
      : AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentFromJSON(
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

export function ArtworkLocalizationResponseArtistsDataInnerAttributesToJSON(
  value?: ArtworkLocalizationResponseArtistsDataInnerAttributes | null
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
    artworks: ArtworkLocalizationResponseArtistsDataInnerAttributesArtworksToJSON(value.artworks),
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
    createdBy: AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentToJSON(
      value.createdBy
    ),
    updatedBy: AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentToJSON(
      value.updatedBy
    ),
    localizations: AboutLocalizationResponseLocalizationsToJSON(value.localizations),
    locale: value.locale,
  };
}
