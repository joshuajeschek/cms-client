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
import type { ArtistLocalizationRequestArtworksInner } from './ArtistLocalizationRequestArtworksInner';
import {
  ArtistLocalizationRequestArtworksInnerFromJSON,
  ArtistLocalizationRequestArtworksInnerFromJSONTyped,
  ArtistLocalizationRequestArtworksInnerToJSON,
} from './ArtistLocalizationRequestArtworksInner';

/**
 *
 * @export
 * @interface ExhibitionRequestData
 */
export interface ExhibitionRequestData {
  /**
   *
   * @type {string}
   * @memberof ExhibitionRequestData
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof ExhibitionRequestData
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof ExhibitionRequestData
   */
  handle: string;
  /**
   *
   * @type {Array<ArtistLocalizationRequestArtworksInner>}
   * @memberof ExhibitionRequestData
   */
  artworks?: Array<ArtistLocalizationRequestArtworksInner>;
  /**
   *
   * @type {ArtistLocalizationRequestArtworksInner}
   * @memberof ExhibitionRequestData
   */
  cover?: ArtistLocalizationRequestArtworksInner;
  /**
   *
   * @type {string}
   * @memberof ExhibitionRequestData
   */
  locale?: string;
}

/**
 * Check if a given object implements the ExhibitionRequestData interface.
 */
export function instanceOfExhibitionRequestData(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'title' in value;
  isInstance = isInstance && 'handle' in value;

  return isInstance;
}

export function ExhibitionRequestDataFromJSON(json: any): ExhibitionRequestData {
  return ExhibitionRequestDataFromJSONTyped(json, false);
}

export function ExhibitionRequestDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ExhibitionRequestData {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    title: json['title'],
    description: !exists(json, 'description') ? undefined : json['description'],
    handle: json['handle'],
    artworks: !exists(json, 'artworks')
      ? undefined
      : (json['artworks'] as Array<any>).map(ArtistLocalizationRequestArtworksInnerFromJSON),
    cover: !exists(json, 'cover')
      ? undefined
      : ArtistLocalizationRequestArtworksInnerFromJSON(json['cover']),
    locale: !exists(json, 'locale') ? undefined : json['locale'],
  };
}

export function ExhibitionRequestDataToJSON(value?: ExhibitionRequestData | null): any {
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
    artworks:
      value.artworks === undefined
        ? undefined
        : (value.artworks as Array<any>).map(ArtistLocalizationRequestArtworksInnerToJSON),
    cover: ArtistLocalizationRequestArtworksInnerToJSON(value.cover),
    locale: value.locale,
  };
}
