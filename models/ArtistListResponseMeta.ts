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
import type { ArtistListResponseMetaPagination } from './ArtistListResponseMetaPagination';
import {
  ArtistListResponseMetaPaginationFromJSON,
  ArtistListResponseMetaPaginationFromJSONTyped,
  ArtistListResponseMetaPaginationToJSON,
} from './ArtistListResponseMetaPagination';

/**
 *
 * @export
 * @interface ArtistListResponseMeta
 */
export interface ArtistListResponseMeta {
  /**
   *
   * @type {ArtistListResponseMetaPagination}
   * @memberof ArtistListResponseMeta
   */
  pagination?: ArtistListResponseMetaPagination;
}

/**
 * Check if a given object implements the ArtistListResponseMeta interface.
 */
export function instanceOfArtistListResponseMeta(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtistListResponseMetaFromJSON(json: any): ArtistListResponseMeta {
  return ArtistListResponseMetaFromJSONTyped(json, false);
}

export function ArtistListResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtistListResponseMeta {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    pagination: !exists(json, 'pagination')
      ? undefined
      : ArtistListResponseMetaPaginationFromJSON(json['pagination']),
  };
}

export function ArtistListResponseMetaToJSON(value?: ArtistListResponseMeta | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    pagination: ArtistListResponseMetaPaginationToJSON(value.pagination),
  };
}
