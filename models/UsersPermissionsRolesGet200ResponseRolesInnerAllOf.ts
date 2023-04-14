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
 * @interface UsersPermissionsRolesGet200ResponseRolesInnerAllOf
 */
export interface UsersPermissionsRolesGet200ResponseRolesInnerAllOf {
  /**
   *
   * @type {number}
   * @memberof UsersPermissionsRolesGet200ResponseRolesInnerAllOf
   */
  nbUsers?: number;
}

/**
 * Check if a given object implements the UsersPermissionsRolesGet200ResponseRolesInnerAllOf interface.
 */
export function instanceOfUsersPermissionsRolesGet200ResponseRolesInnerAllOf(
  value: object
): boolean {
  let isInstance = true;

  return isInstance;
}

export function UsersPermissionsRolesGet200ResponseRolesInnerAllOfFromJSON(
  json: any
): UsersPermissionsRolesGet200ResponseRolesInnerAllOf {
  return UsersPermissionsRolesGet200ResponseRolesInnerAllOfFromJSONTyped(json, false);
}

export function UsersPermissionsRolesGet200ResponseRolesInnerAllOfFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UsersPermissionsRolesGet200ResponseRolesInnerAllOf {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    nbUsers: !exists(json, 'nb_users') ? undefined : json['nb_users'],
  };
}

export function UsersPermissionsRolesGet200ResponseRolesInnerAllOfToJSON(
  value?: UsersPermissionsRolesGet200ResponseRolesInnerAllOf | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    nb_users: value.nbUsers,
  };
}
