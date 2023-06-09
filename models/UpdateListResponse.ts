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
import type { UpdateListResponseDataItem } from './UpdateListResponseDataItem';
import {
  UpdateListResponseDataItemFromJSON,
  UpdateListResponseDataItemFromJSONTyped,
  UpdateListResponseDataItemToJSON,
} from './UpdateListResponseDataItem';

/**
 *
 * @export
 * @interface UpdateListResponse
 */
export interface UpdateListResponse {
  /**
   *
   * @type {Array<UpdateListResponseDataItem>}
   * @memberof UpdateListResponse
   */
  data?: Array<UpdateListResponseDataItem>;
  /**
   *
   * @type {ArtistListResponseMeta}
   * @memberof UpdateListResponse
   */
  meta?: ArtistListResponseMeta;
}

/**
 * Check if a given object implements the UpdateListResponse interface.
 */
export function instanceOfUpdateListResponse(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function UpdateListResponseFromJSON(json: any): UpdateListResponse {
  return UpdateListResponseFromJSONTyped(json, false);
}

export function UpdateListResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateListResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: !exists(json, 'data')
      ? undefined
      : (json['data'] as Array<any>).map(UpdateListResponseDataItemFromJSON),
    meta: !exists(json, 'meta') ? undefined : ArtistListResponseMetaFromJSON(json['meta']),
  };
}

export function UpdateListResponseToJSON(value?: UpdateListResponse | null): any {
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
        : (value.data as Array<any>).map(UpdateListResponseDataItemToJSON),
    meta: ArtistListResponseMetaToJSON(value.meta),
  };
}
