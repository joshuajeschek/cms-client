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
 * @interface AuthSendEmailConfirmationPost200Response
 */
export interface AuthSendEmailConfirmationPost200Response {
  /**
   *
   * @type {string}
   * @memberof AuthSendEmailConfirmationPost200Response
   */
  email?: string;
  /**
   *
   * @type {boolean}
   * @memberof AuthSendEmailConfirmationPost200Response
   */
  sent?: AuthSendEmailConfirmationPost200ResponseSentEnum;
}

/**
 * @export
 */
export const AuthSendEmailConfirmationPost200ResponseSentEnum = {
  True: true,
} as const;
export type AuthSendEmailConfirmationPost200ResponseSentEnum =
  (typeof AuthSendEmailConfirmationPost200ResponseSentEnum)[keyof typeof AuthSendEmailConfirmationPost200ResponseSentEnum];

/**
 * Check if a given object implements the AuthSendEmailConfirmationPost200Response interface.
 */
export function instanceOfAuthSendEmailConfirmationPost200Response(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function AuthSendEmailConfirmationPost200ResponseFromJSON(
  json: any
): AuthSendEmailConfirmationPost200Response {
  return AuthSendEmailConfirmationPost200ResponseFromJSONTyped(json, false);
}

export function AuthSendEmailConfirmationPost200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AuthSendEmailConfirmationPost200Response {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    email: !exists(json, 'email') ? undefined : json['email'],
    sent: !exists(json, 'sent') ? undefined : json['sent'],
  };
}

export function AuthSendEmailConfirmationPost200ResponseToJSON(
  value?: AuthSendEmailConfirmationPost200Response | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    email: value.email,
    sent: value.sent,
  };
}
