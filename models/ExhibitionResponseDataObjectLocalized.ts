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
import type { ExhibitionListResponseDataItemLocalizedAttributes } from './ExhibitionListResponseDataItemLocalizedAttributes';
import {
  ExhibitionListResponseDataItemLocalizedAttributesFromJSON,
  ExhibitionListResponseDataItemLocalizedAttributesFromJSONTyped,
  ExhibitionListResponseDataItemLocalizedAttributesToJSON,
} from './ExhibitionListResponseDataItemLocalizedAttributes';

/**
 *
 * @export
 * @interface ExhibitionResponseDataObjectLocalized
 */
export interface ExhibitionResponseDataObjectLocalized {
  /**
   *
   * @type {number}
   * @memberof ExhibitionResponseDataObjectLocalized
   */
  id?: number;
  /**
   *
   * @type {ExhibitionListResponseDataItemLocalizedAttributes}
   * @memberof ExhibitionResponseDataObjectLocalized
   */
  attributes?: ExhibitionListResponseDataItemLocalizedAttributes;
}

/**
 * Check if a given object implements the ExhibitionResponseDataObjectLocalized interface.
 */
export function instanceOfExhibitionResponseDataObjectLocalized(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ExhibitionResponseDataObjectLocalizedFromJSON(
  json: any
): ExhibitionResponseDataObjectLocalized {
  return ExhibitionResponseDataObjectLocalizedFromJSONTyped(json, false);
}

export function ExhibitionResponseDataObjectLocalizedFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ExhibitionResponseDataObjectLocalized {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    attributes: !exists(json, 'attributes')
      ? undefined
      : ExhibitionListResponseDataItemLocalizedAttributesFromJSON(json['attributes']),
  };
}

export function ExhibitionResponseDataObjectLocalizedToJSON(
  value?: ExhibitionResponseDataObjectLocalized | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    attributes: ExhibitionListResponseDataItemLocalizedAttributesToJSON(value.attributes),
  };
}
