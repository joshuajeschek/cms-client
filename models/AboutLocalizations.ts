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
import type { About } from './About';
import { AboutFromJSON, AboutFromJSONTyped, AboutToJSON } from './About';

/**
 *
 * @export
 * @interface AboutLocalizations
 */
export interface AboutLocalizations {
  /**
   *
   * @type {Array<About>}
   * @memberof AboutLocalizations
   */
  data?: Array<About>;
}

/**
 * Check if a given object implements the AboutLocalizations interface.
 */
export function instanceOfAboutLocalizations(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function AboutLocalizationsFromJSON(json: any): AboutLocalizations {
  return AboutLocalizationsFromJSONTyped(json, false);
}

export function AboutLocalizationsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AboutLocalizations {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: !exists(json, 'data') ? undefined : (json['data'] as Array<any>).map(AboutFromJSON),
  };
}

export function AboutLocalizationsToJSON(value?: AboutLocalizations | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data: value.data === undefined ? undefined : (value.data as Array<any>).map(AboutToJSON),
  };
}
