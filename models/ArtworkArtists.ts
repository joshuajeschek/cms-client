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
import type { ArtworkArtistsDataInner } from './ArtworkArtistsDataInner';
import {
  ArtworkArtistsDataInnerFromJSON,
  ArtworkArtistsDataInnerFromJSONTyped,
  ArtworkArtistsDataInnerToJSON,
} from './ArtworkArtistsDataInner';

/**
 *
 * @export
 * @interface ArtworkArtists
 */
export interface ArtworkArtists {
  /**
   *
   * @type {Array<ArtworkArtistsDataInner>}
   * @memberof ArtworkArtists
   */
  data?: Array<ArtworkArtistsDataInner>;
}

/**
 * Check if a given object implements the ArtworkArtists interface.
 */
export function instanceOfArtworkArtists(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtworkArtistsFromJSON(json: any): ArtworkArtists {
  return ArtworkArtistsFromJSONTyped(json, false);
}

export function ArtworkArtistsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtworkArtists {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: !exists(json, 'data')
      ? undefined
      : (json['data'] as Array<any>).map(ArtworkArtistsDataInnerFromJSON),
  };
}

export function ArtworkArtistsToJSON(value?: ArtworkArtists | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data:
      value.data === undefined
        ? undefined
        : (value.data as Array<any>).map(ArtworkArtistsDataInnerToJSON),
  };
}