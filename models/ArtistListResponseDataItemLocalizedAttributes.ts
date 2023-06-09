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
import type { ArtistLocalizationResponseArtworks } from './ArtistLocalizationResponseArtworks';
import {
  ArtistLocalizationResponseArtworksFromJSON,
  ArtistLocalizationResponseArtworksFromJSONTyped,
  ArtistLocalizationResponseArtworksToJSON,
} from './ArtistLocalizationResponseArtworks';
import type { ContactLinkComponent } from './ContactLinkComponent';
import {
  ContactLinkComponentFromJSON,
  ContactLinkComponentFromJSONTyped,
  ContactLinkComponentToJSON,
} from './ContactLinkComponent';

/**
 *
 * @export
 * @interface ArtistListResponseDataItemLocalizedAttributes
 */
export interface ArtistListResponseDataItemLocalizedAttributes {
  /**
   *
   * @type {string}
   * @memberof ArtistListResponseDataItemLocalizedAttributes
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof ArtistListResponseDataItemLocalizedAttributes
   */
  bio?: string;
  /**
   *
   * @type {string}
   * @memberof ArtistListResponseDataItemLocalizedAttributes
   */
  handle?: string;
  /**
   *
   * @type {ArtistLocalizationResponseArtworks}
   * @memberof ArtistListResponseDataItemLocalizedAttributes
   */
  artworks?: ArtistLocalizationResponseArtworks;
  /**
   *
   * @type {AboutLocalizationResponseImage}
   * @memberof ArtistListResponseDataItemLocalizedAttributes
   */
  picture?: AboutLocalizationResponseImage;
  /**
   *
   * @type {Date}
   * @memberof ArtistListResponseDataItemLocalizedAttributes
   */
  birthday?: Date;
  /**
   *
   * @type {Array<ContactLinkComponent>}
   * @memberof ArtistListResponseDataItemLocalizedAttributes
   */
  contact?: Array<ContactLinkComponent>;
  /**
   *
   * @type {Date}
   * @memberof ArtistListResponseDataItemLocalizedAttributes
   */
  createdAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof ArtistListResponseDataItemLocalizedAttributes
   */
  updatedAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof ArtistListResponseDataItemLocalizedAttributes
   */
  publishedAt?: Date;
  /**
   *
   * @type {AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent}
   * @memberof ArtistListResponseDataItemLocalizedAttributes
   */
  createdBy?: AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent;
  /**
   *
   * @type {AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent}
   * @memberof ArtistListResponseDataItemLocalizedAttributes
   */
  updatedBy?: AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent;
  /**
   *
   * @type {AboutLocalizationResponseLocalizations}
   * @memberof ArtistListResponseDataItemLocalizedAttributes
   */
  localizations?: AboutLocalizationResponseLocalizations;
  /**
   *
   * @type {string}
   * @memberof ArtistListResponseDataItemLocalizedAttributes
   */
  locale?: string;
}

/**
 * Check if a given object implements the ArtistListResponseDataItemLocalizedAttributes interface.
 */
export function instanceOfArtistListResponseDataItemLocalizedAttributes(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtistListResponseDataItemLocalizedAttributesFromJSON(
  json: any
): ArtistListResponseDataItemLocalizedAttributes {
  return ArtistListResponseDataItemLocalizedAttributesFromJSONTyped(json, false);
}

export function ArtistListResponseDataItemLocalizedAttributesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtistListResponseDataItemLocalizedAttributes {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: !exists(json, 'name') ? undefined : json['name'],
    bio: !exists(json, 'bio') ? undefined : json['bio'],
    handle: !exists(json, 'handle') ? undefined : json['handle'],
    artworks: !exists(json, 'artworks')
      ? undefined
      : ArtistLocalizationResponseArtworksFromJSON(json['artworks']),
    picture: !exists(json, 'picture')
      ? undefined
      : AboutLocalizationResponseImageFromJSON(json['picture']),
    birthday: !exists(json, 'birthday') ? undefined : new Date(json['birthday']),
    contact: !exists(json, 'contact')
      ? undefined
      : (json['contact'] as Array<any>).map(ContactLinkComponentFromJSON),
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

export function ArtistListResponseDataItemLocalizedAttributesToJSON(
  value?: ArtistListResponseDataItemLocalizedAttributes | null
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
    artworks: ArtistLocalizationResponseArtworksToJSON(value.artworks),
    picture: AboutLocalizationResponseImageToJSON(value.picture),
    birthday: value.birthday === undefined ? undefined : value.birthday.toISOString().substr(0, 10),
    contact:
      value.contact === undefined
        ? undefined
        : (value.contact as Array<any>).map(ContactLinkComponentToJSON),
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
