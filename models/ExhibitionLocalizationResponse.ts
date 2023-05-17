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

/**
 *
 * @export
 * @interface ExhibitionLocalizationResponse
 */
export interface ExhibitionLocalizationResponse {
  /**
   *
   * @type {number}
   * @memberof ExhibitionLocalizationResponse
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof ExhibitionLocalizationResponse
   */
  title?: string;
  /**
   *
   * @type {string}
   * @memberof ExhibitionLocalizationResponse
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof ExhibitionLocalizationResponse
   */
  handle?: string;
  /**
   *
   * @type {ArtistLocalizationResponseArtworks}
   * @memberof ExhibitionLocalizationResponse
   */
  artworks?: ArtistLocalizationResponseArtworks;
  /**
   *
   * @type {AboutLocalizationResponseImage}
   * @memberof ExhibitionLocalizationResponse
   */
  cover?: AboutLocalizationResponseImage;
  /**
   *
   * @type {Date}
   * @memberof ExhibitionLocalizationResponse
   */
  launch?: Date;
  /**
   *
   * @type {Date}
   * @memberof ExhibitionLocalizationResponse
   */
  createdAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof ExhibitionLocalizationResponse
   */
  updatedAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof ExhibitionLocalizationResponse
   */
  publishedAt?: Date;
  /**
   *
   * @type {AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent}
   * @memberof ExhibitionLocalizationResponse
   */
  createdBy?: AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent;
  /**
   *
   * @type {AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent}
   * @memberof ExhibitionLocalizationResponse
   */
  updatedBy?: AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent;
  /**
   *
   * @type {AboutLocalizationResponseLocalizations}
   * @memberof ExhibitionLocalizationResponse
   */
  localizations?: AboutLocalizationResponseLocalizations;
  /**
   *
   * @type {string}
   * @memberof ExhibitionLocalizationResponse
   */
  locale?: string;
}

/**
 * Check if a given object implements the ExhibitionLocalizationResponse interface.
 */
export function instanceOfExhibitionLocalizationResponse(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ExhibitionLocalizationResponseFromJSON(json: any): ExhibitionLocalizationResponse {
  return ExhibitionLocalizationResponseFromJSONTyped(json, false);
}

export function ExhibitionLocalizationResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ExhibitionLocalizationResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    title: !exists(json, 'title') ? undefined : json['title'],
    description: !exists(json, 'description') ? undefined : json['description'],
    handle: !exists(json, 'handle') ? undefined : json['handle'],
    artworks: !exists(json, 'artworks')
      ? undefined
      : ArtistLocalizationResponseArtworksFromJSON(json['artworks']),
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

export function ExhibitionLocalizationResponseToJSON(
  value?: ExhibitionLocalizationResponse | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    title: value.title,
    description: value.description,
    handle: value.handle,
    artworks: ArtistLocalizationResponseArtworksToJSON(value.artworks),
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
