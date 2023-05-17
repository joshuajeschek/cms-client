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
import type { AboutLocalizationRequestImage } from './AboutLocalizationRequestImage';
import {
  AboutLocalizationRequestImageFromJSON,
  AboutLocalizationRequestImageFromJSONTyped,
  AboutLocalizationRequestImageToJSON,
} from './AboutLocalizationRequestImage';

/**
 *
 * @export
 * @interface ArtworkRequestData
 */
export interface ArtworkRequestData {
  /**
   *
   * @type {string}
   * @memberof ArtworkRequestData
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof ArtworkRequestData
   */
  description?: string;
  /**
   *
   * @type {Array<AboutLocalizationRequestImage>}
   * @memberof ArtworkRequestData
   */
  artists?: Array<AboutLocalizationRequestImage>;
  /**
   *
   * @type {Array<AboutLocalizationRequestImage>}
   * @memberof ArtworkRequestData
   */
  media?: Array<AboutLocalizationRequestImage>;
  /**
   *
   * @type {Date}
   * @memberof ArtworkRequestData
   */
  creationDate?: Date;
  /**
   *
   * @type {string}
   * @memberof ArtworkRequestData
   */
  originalTitle?: string;
  /**
   *
   * @type {string}
   * @memberof ArtworkRequestData
   */
  handle: string;
  /**
   *
   * @type {Array<AboutLocalizationRequestImage>}
   * @memberof ArtworkRequestData
   */
  exhibitions?: Array<AboutLocalizationRequestImage>;
  /**
   *
   * @type {string}
   * @memberof ArtworkRequestData
   */
  locale?: string;
}

/**
 * Check if a given object implements the ArtworkRequestData interface.
 */
export function instanceOfArtworkRequestData(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'title' in value;
  isInstance = isInstance && 'handle' in value;

  return isInstance;
}

export function ArtworkRequestDataFromJSON(json: any): ArtworkRequestData {
  return ArtworkRequestDataFromJSONTyped(json, false);
}

export function ArtworkRequestDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtworkRequestData {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    title: json['title'],
    description: !exists(json, 'description') ? undefined : json['description'],
    artists: !exists(json, 'artists')
      ? undefined
      : (json['artists'] as Array<any>).map(AboutLocalizationRequestImageFromJSON),
    media: !exists(json, 'media')
      ? undefined
      : (json['media'] as Array<any>).map(AboutLocalizationRequestImageFromJSON),
    creationDate: !exists(json, 'creationDate') ? undefined : new Date(json['creationDate']),
    originalTitle: !exists(json, 'originalTitle') ? undefined : json['originalTitle'],
    handle: json['handle'],
    exhibitions: !exists(json, 'exhibitions')
      ? undefined
      : (json['exhibitions'] as Array<any>).map(AboutLocalizationRequestImageFromJSON),
    locale: !exists(json, 'locale') ? undefined : json['locale'],
  };
}

export function ArtworkRequestDataToJSON(value?: ArtworkRequestData | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    title: value.title,
    description: value.description,
    artists:
      value.artists === undefined
        ? undefined
        : (value.artists as Array<any>).map(AboutLocalizationRequestImageToJSON),
    media:
      value.media === undefined
        ? undefined
        : (value.media as Array<any>).map(AboutLocalizationRequestImageToJSON),
    creationDate:
      value.creationDate === undefined ? undefined : value.creationDate.toISOString().substr(0, 10),
    originalTitle: value.originalTitle,
    handle: value.handle,
    exhibitions:
      value.exhibitions === undefined
        ? undefined
        : (value.exhibitions as Array<any>).map(AboutLocalizationRequestImageToJSON),
    locale: value.locale,
  };
}
