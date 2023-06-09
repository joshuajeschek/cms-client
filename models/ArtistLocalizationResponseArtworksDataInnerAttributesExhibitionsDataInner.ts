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
import type { ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInnerAttributes } from './ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInnerAttributes';
import {
  ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInnerAttributesFromJSON,
  ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInnerAttributesFromJSONTyped,
  ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInnerAttributesToJSON,
} from './ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInnerAttributes';

/**
 *
 * @export
 * @interface ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInner
 */
export interface ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInner {
  /**
   *
   * @type {number}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInner
   */
  id?: number;
  /**
   *
   * @type {ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInnerAttributes}
   * @memberof ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInner
   */
  attributes?: ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInnerAttributes;
}

/**
 * Check if a given object implements the ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInner interface.
 */
export function instanceOfArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInner(
  value: object
): boolean {
  let isInstance = true;

  return isInstance;
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInnerFromJSON(
  json: any
): ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInner {
  return ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInnerFromJSONTyped(
    json,
    false
  );
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInner {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    attributes: !exists(json, 'attributes')
      ? undefined
      : ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInnerAttributesFromJSON(
          json['attributes']
        ),
  };
}

export function ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInnerToJSON(
  value?: ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInner | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    attributes:
      ArtistLocalizationResponseArtworksDataInnerAttributesExhibitionsDataInnerAttributesToJSON(
        value.attributes
      ),
  };
}
