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
 * @interface ExhibitionLocalizationRequest
 */
export interface ExhibitionLocalizationRequest {
  /**
   *
   * @type {string}
   * @memberof ExhibitionLocalizationRequest
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof ExhibitionLocalizationRequest
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof ExhibitionLocalizationRequest
   */
  handle: string;
  /**
   *
   * @type {Array<ArtistLocalizationRequestArtworksInner>}
   * @memberof ExhibitionLocalizationRequest
   */
  artworks?: Array<ArtistLocalizationRequestArtworksInner>;
  /**
   *
   * @type {ArtistLocalizationRequestArtworksInner}
   * @memberof ExhibitionLocalizationRequest
   */
  cover?: ArtistLocalizationRequestArtworksInner;
  /**
   *
   * @type {Date}
   * @memberof ExhibitionLocalizationRequest
   */
  launch?: Date;
  /**
   *
   * @type {string}
   * @memberof ExhibitionLocalizationRequest
   */
  locale: string;
}

/**
 * Check if a given object implements the ExhibitionLocalizationRequest interface.
 */
export function instanceOfExhibitionLocalizationRequest(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'title' in value;
  isInstance = isInstance && 'handle' in value;
  isInstance = isInstance && 'locale' in value;

  return isInstance;
}

export function ExhibitionLocalizationRequestFromJSON(json: any): ExhibitionLocalizationRequest {
  return ExhibitionLocalizationRequestFromJSONTyped(json, false);
}

export function ExhibitionLocalizationRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ExhibitionLocalizationRequest {
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
    launch: !exists(json, 'launch') ? undefined : new Date(json['launch']),
    locale: json['locale'],
  };
}

export function ExhibitionLocalizationRequestToJSON(
  value?: ExhibitionLocalizationRequest | null
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
    artworks:
      value.artworks === undefined
        ? undefined
        : (value.artworks as Array<any>).map(ArtistLocalizationRequestArtworksInnerToJSON),
    cover: ArtistLocalizationRequestArtworksInnerToJSON(value.cover),
    launch: value.launch === undefined ? undefined : value.launch.toISOString().substr(0, 10),
    locale: value.locale,
  };
}
