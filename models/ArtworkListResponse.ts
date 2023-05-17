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
import type { ArtistListResponseMeta } from './ArtistListResponseMeta';
import {
  ArtistListResponseMetaFromJSON,
  ArtistListResponseMetaFromJSONTyped,
  ArtistListResponseMetaToJSON,
} from './ArtistListResponseMeta';
import type { ArtworkListResponseDataItem } from './ArtworkListResponseDataItem';
import {
  ArtworkListResponseDataItemFromJSON,
  ArtworkListResponseDataItemFromJSONTyped,
  ArtworkListResponseDataItemToJSON,
} from './ArtworkListResponseDataItem';

/**
 *
 * @export
 * @interface ArtworkListResponse
 */
export interface ArtworkListResponse {
  /**
   *
   * @type {Array<ArtworkListResponseDataItem>}
   * @memberof ArtworkListResponse
   */
  data?: Array<ArtworkListResponseDataItem>;
  /**
   *
   * @type {ArtistListResponseMeta}
   * @memberof ArtworkListResponse
   */
  meta?: ArtistListResponseMeta;
}

/**
 * Check if a given object implements the ArtworkListResponse interface.
 */
export function instanceOfArtworkListResponse(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtworkListResponseFromJSON(json: any): ArtworkListResponse {
  return ArtworkListResponseFromJSONTyped(json, false);
}

export function ArtworkListResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtworkListResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: !exists(json, 'data')
      ? undefined
      : (json['data'] as Array<any>).map(ArtworkListResponseDataItemFromJSON),
    meta: !exists(json, 'meta') ? undefined : ArtistListResponseMetaFromJSON(json['meta']),
  };
}

export function ArtworkListResponseToJSON(value?: ArtworkListResponse | null): any {
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
        : (value.data as Array<any>).map(ArtworkListResponseDataItemToJSON),
    meta: ArtistListResponseMetaToJSON(value.meta),
  };
}
