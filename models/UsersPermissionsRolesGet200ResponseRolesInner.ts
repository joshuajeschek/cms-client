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
 * @interface UsersPermissionsRolesGet200ResponseRolesInner
 */
export interface UsersPermissionsRolesGet200ResponseRolesInner {
  /**
   *
   * @type {number}
   * @memberof UsersPermissionsRolesGet200ResponseRolesInner
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof UsersPermissionsRolesGet200ResponseRolesInner
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof UsersPermissionsRolesGet200ResponseRolesInner
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof UsersPermissionsRolesGet200ResponseRolesInner
   */
  type?: string;
  /**
   *
   * @type {Date}
   * @memberof UsersPermissionsRolesGet200ResponseRolesInner
   */
  createdAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof UsersPermissionsRolesGet200ResponseRolesInner
   */
  updatedAt?: Date;
  /**
   *
   * @type {number}
   * @memberof UsersPermissionsRolesGet200ResponseRolesInner
   */
  nbUsers?: number;
}

/**
 * Check if a given object implements the UsersPermissionsRolesGet200ResponseRolesInner interface.
 */
export function instanceOfUsersPermissionsRolesGet200ResponseRolesInner(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function UsersPermissionsRolesGet200ResponseRolesInnerFromJSON(
  json: any
): UsersPermissionsRolesGet200ResponseRolesInner {
  return UsersPermissionsRolesGet200ResponseRolesInnerFromJSONTyped(json, false);
}

export function UsersPermissionsRolesGet200ResponseRolesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UsersPermissionsRolesGet200ResponseRolesInner {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    description: !exists(json, 'description') ? undefined : json['description'],
    type: !exists(json, 'type') ? undefined : json['type'],
    createdAt: !exists(json, 'createdAt') ? undefined : new Date(json['createdAt']),
    updatedAt: !exists(json, 'updatedAt') ? undefined : new Date(json['updatedAt']),
    nbUsers: !exists(json, 'nb_users') ? undefined : json['nb_users'],
  };
}

export function UsersPermissionsRolesGet200ResponseRolesInnerToJSON(
  value?: UsersPermissionsRolesGet200ResponseRolesInner | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    name: value.name,
    description: value.description,
    type: value.type,
    createdAt: value.createdAt === undefined ? undefined : value.createdAt.toISOString(),
    updatedAt: value.updatedAt === undefined ? undefined : value.updatedAt.toISOString(),
    nb_users: value.nbUsers,
  };
}
