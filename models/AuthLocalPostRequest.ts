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
/**
 *
 * @export
 * @interface AuthLocalPostRequest
 */
export interface AuthLocalPostRequest {
  /**
   *
   * @type {string}
   * @memberof AuthLocalPostRequest
   */
  identifier?: string;
  /**
   *
   * @type {string}
   * @memberof AuthLocalPostRequest
   */
  password?: string;
}

/**
 * Check if a given object implements the AuthLocalPostRequest interface.
 */
export function instanceOfAuthLocalPostRequest(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function AuthLocalPostRequestFromJSON(json: any): AuthLocalPostRequest {
  return AuthLocalPostRequestFromJSONTyped(json, false);
}

export function AuthLocalPostRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AuthLocalPostRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    identifier: !exists(json, 'identifier') ? undefined : json['identifier'],
    password: !exists(json, 'password') ? undefined : json['password'],
  };
}

export function AuthLocalPostRequestToJSON(value?: AuthLocalPostRequest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    identifier: value.identifier,
    password: value.password,
  };
}