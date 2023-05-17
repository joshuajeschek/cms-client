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
import type { IndexLocalizationResponseExhibitionsDataInnerAttributesArtworks } from './IndexLocalizationResponseExhibitionsDataInnerAttributesArtworks';
import {
  IndexLocalizationResponseExhibitionsDataInnerAttributesArtworksFromJSON,
  IndexLocalizationResponseExhibitionsDataInnerAttributesArtworksFromJSONTyped,
  IndexLocalizationResponseExhibitionsDataInnerAttributesArtworksToJSON,
} from './IndexLocalizationResponseExhibitionsDataInnerAttributesArtworks';

/**
 *
 * @export
 * @interface IndexLocalizationResponseExhibitionsDataInnerAttributes
 */
export interface IndexLocalizationResponseExhibitionsDataInnerAttributes {
  /**
   *
   * @type {string}
   * @memberof IndexLocalizationResponseExhibitionsDataInnerAttributes
   */
  title?: string;
  /**
   *
   * @type {string}
   * @memberof IndexLocalizationResponseExhibitionsDataInnerAttributes
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof IndexLocalizationResponseExhibitionsDataInnerAttributes
   */
  handle?: string;
  /**
   *
   * @type {IndexLocalizationResponseExhibitionsDataInnerAttributesArtworks}
   * @memberof IndexLocalizationResponseExhibitionsDataInnerAttributes
   */
  artworks?: IndexLocalizationResponseExhibitionsDataInnerAttributesArtworks;
  /**
   *
   * @type {AboutLocalizationResponseImage}
   * @memberof IndexLocalizationResponseExhibitionsDataInnerAttributes
   */
  cover?: AboutLocalizationResponseImage;
  /**
   *
   * @type {Date}
   * @memberof IndexLocalizationResponseExhibitionsDataInnerAttributes
   */
  launch?: Date;
  /**
   *
   * @type {Date}
   * @memberof IndexLocalizationResponseExhibitionsDataInnerAttributes
   */
  createdAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof IndexLocalizationResponseExhibitionsDataInnerAttributes
   */
  updatedAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof IndexLocalizationResponseExhibitionsDataInnerAttributes
   */
  publishedAt?: Date;
  /**
   *
   * @type {AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent}
   * @memberof IndexLocalizationResponseExhibitionsDataInnerAttributes
   */
  createdBy?: AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent;
  /**
   *
   * @type {AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent}
   * @memberof IndexLocalizationResponseExhibitionsDataInnerAttributes
   */
  updatedBy?: AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent;
  /**
   *
   * @type {AboutLocalizationResponseLocalizations}
   * @memberof IndexLocalizationResponseExhibitionsDataInnerAttributes
   */
  localizations?: AboutLocalizationResponseLocalizations;
  /**
   *
   * @type {string}
   * @memberof IndexLocalizationResponseExhibitionsDataInnerAttributes
   */
  locale?: string;
}

/**
 * Check if a given object implements the IndexLocalizationResponseExhibitionsDataInnerAttributes interface.
 */
export function instanceOfIndexLocalizationResponseExhibitionsDataInnerAttributes(
  value: object
): boolean {
  let isInstance = true;

  return isInstance;
}

export function IndexLocalizationResponseExhibitionsDataInnerAttributesFromJSON(
  json: any
): IndexLocalizationResponseExhibitionsDataInnerAttributes {
  return IndexLocalizationResponseExhibitionsDataInnerAttributesFromJSONTyped(json, false);
}

export function IndexLocalizationResponseExhibitionsDataInnerAttributesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): IndexLocalizationResponseExhibitionsDataInnerAttributes {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    title: !exists(json, 'title') ? undefined : json['title'],
    description: !exists(json, 'description') ? undefined : json['description'],
    handle: !exists(json, 'handle') ? undefined : json['handle'],
    artworks: !exists(json, 'artworks')
      ? undefined
      : IndexLocalizationResponseExhibitionsDataInnerAttributesArtworksFromJSON(json['artworks']),
    cover: !exists(json, 'cover')
      ? undefined
      : AboutLocalizationResponseImageFromJSON(json['cover']),
    launch: !exists(json, 'launch') ? undefined : new Date(json['launch']),
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

export function IndexLocalizationResponseExhibitionsDataInnerAttributesToJSON(
  value?: IndexLocalizationResponseExhibitionsDataInnerAttributes | null
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
    artworks: IndexLocalizationResponseExhibitionsDataInnerAttributesArtworksToJSON(value.artworks),
    cover: AboutLocalizationResponseImageToJSON(value.cover),
    launch: value.launch === undefined ? undefined : value.launch.toISOString().substr(0, 10),
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
