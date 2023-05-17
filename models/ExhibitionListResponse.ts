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
import type { ExhibitionListResponseDataItem } from './ExhibitionListResponseDataItem';
import {
  ExhibitionListResponseDataItemFromJSON,
  ExhibitionListResponseDataItemFromJSONTyped,
  ExhibitionListResponseDataItemToJSON,
} from './ExhibitionListResponseDataItem';

/**
 *
 * @export
 * @interface ExhibitionListResponse
 */
export interface ExhibitionListResponse {
  /**
   *
   * @type {Array<ExhibitionListResponseDataItem>}
   * @memberof ExhibitionListResponse
   */
  data?: Array<ExhibitionListResponseDataItem>;
  /**
   *
   * @type {ArtistListResponseMeta}
   * @memberof ExhibitionListResponse
   */
  meta?: ArtistListResponseMeta;
}

/**
 * Check if a given object implements the ExhibitionListResponse interface.
 */
export function instanceOfExhibitionListResponse(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ExhibitionListResponseFromJSON(json: any): ExhibitionListResponse {
  return ExhibitionListResponseFromJSONTyped(json, false);
}

export function ExhibitionListResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ExhibitionListResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: !exists(json, 'data')
      ? undefined
      : (json['data'] as Array<any>).map(ExhibitionListResponseDataItemFromJSON),
    meta: !exists(json, 'meta') ? undefined : ArtistListResponseMetaFromJSON(json['meta']),
  };
}

export function ExhibitionListResponseToJSON(value?: ExhibitionListResponse | null): any {
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
        : (value.data as Array<any>).map(ExhibitionListResponseDataItemToJSON),
    meta: ArtistListResponseMetaToJSON(value.meta),
  };
}
