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
import type { Artist } from './Artist';
import { ArtistFromJSON, ArtistFromJSONTyped, ArtistToJSON } from './Artist';

/**
 *
 * @export
 * @interface ArtistLocalizations
 */
export interface ArtistLocalizations {
  /**
   *
   * @type {Array<Artist>}
   * @memberof ArtistLocalizations
   */
  data?: Array<Artist>;
}

/**
 * Check if a given object implements the ArtistLocalizations interface.
 */
export function instanceOfArtistLocalizations(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtistLocalizationsFromJSON(json: any): ArtistLocalizations {
  return ArtistLocalizationsFromJSONTyped(json, false);
}

export function ArtistLocalizationsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtistLocalizations {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: !exists(json, 'data') ? undefined : (json['data'] as Array<any>).map(ArtistFromJSON),
  };
}

export function ArtistLocalizationsToJSON(value?: ArtistLocalizations | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data: value.data === undefined ? undefined : (value.data as Array<any>).map(ArtistToJSON),
  };
}
