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
import type { AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRoles } from './AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRoles';
import {
  AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesFromJSON,
  AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesFromJSONTyped,
  AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesToJSON,
} from './AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRoles';
import type { AboutImageDataAttributesFolderDataAttributesParent } from './AboutImageDataAttributesFolderDataAttributesParent';
import {
  AboutImageDataAttributesFolderDataAttributesParentFromJSON,
  AboutImageDataAttributesFolderDataAttributesParentFromJSONTyped,
  AboutImageDataAttributesFolderDataAttributesParentToJSON,
} from './AboutImageDataAttributesFolderDataAttributesParent';

/**
 *
 * @export
 * @interface AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
 */
export interface AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes {
  /**
   *
   * @type {string}
   * @memberof AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
   */
  firstname?: string;
  /**
   *
   * @type {string}
   * @memberof AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
   */
  lastname?: string;
  /**
   *
   * @type {string}
   * @memberof AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
   */
  username?: string;
  /**
   *
   * @type {string}
   * @memberof AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
   */
  email?: string;
  /**
   *
   * @type {string}
   * @memberof AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
   */
  resetPasswordToken?: string;
  /**
   *
   * @type {string}
   * @memberof AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
   */
  registrationToken?: string;
  /**
   *
   * @type {boolean}
   * @memberof AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
   */
  isActive?: boolean;
  /**
   *
   * @type {AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRoles}
   * @memberof AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
   */
  roles?: AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRoles;
  /**
   *
   * @type {boolean}
   * @memberof AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
   */
  blocked?: boolean;
  /**
   *
   * @type {string}
   * @memberof AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
   */
  preferedLanguage?: string;
  /**
   *
   * @type {Date}
   * @memberof AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
   */
  createdAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
   */
  updatedAt?: Date;
  /**
   *
   * @type {AboutImageDataAttributesFolderDataAttributesParent}
   * @memberof AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
   */
  createdBy?: AboutImageDataAttributesFolderDataAttributesParent;
  /**
   *
   * @type {AboutImageDataAttributesFolderDataAttributesParent}
   * @memberof AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
   */
  updatedBy?: AboutImageDataAttributesFolderDataAttributesParent;
}

/**
 * Check if a given object implements the AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes interface.
 */
export function instanceOfAboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes(
  value: object
): boolean {
  let isInstance = true;

  return isInstance;
}

export function AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesFromJSON(
  json: any
): AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes {
  return AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesFromJSONTyped(
    json,
    false
  );
}

export function AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    firstname: !exists(json, 'firstname') ? undefined : json['firstname'],
    lastname: !exists(json, 'lastname') ? undefined : json['lastname'],
    username: !exists(json, 'username') ? undefined : json['username'],
    email: !exists(json, 'email') ? undefined : json['email'],
    resetPasswordToken: !exists(json, 'resetPasswordToken')
      ? undefined
      : json['resetPasswordToken'],
    registrationToken: !exists(json, 'registrationToken') ? undefined : json['registrationToken'],
    isActive: !exists(json, 'isActive') ? undefined : json['isActive'],
    roles: !exists(json, 'roles')
      ? undefined
      : AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesFromJSON(
          json['roles']
        ),
    blocked: !exists(json, 'blocked') ? undefined : json['blocked'],
    preferedLanguage: !exists(json, 'preferedLanguage') ? undefined : json['preferedLanguage'],
    createdAt: !exists(json, 'createdAt') ? undefined : new Date(json['createdAt']),
    updatedAt: !exists(json, 'updatedAt') ? undefined : new Date(json['updatedAt']),
    createdBy: !exists(json, 'createdBy')
      ? undefined
      : AboutImageDataAttributesFolderDataAttributesParentFromJSON(json['createdBy']),
    updatedBy: !exists(json, 'updatedBy')
      ? undefined
      : AboutImageDataAttributesFolderDataAttributesParentFromJSON(json['updatedBy']),
  };
}

export function AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesToJSON(
  value?: AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    firstname: value.firstname,
    lastname: value.lastname,
    username: value.username,
    email: value.email,
    resetPasswordToken: value.resetPasswordToken,
    registrationToken: value.registrationToken,
    isActive: value.isActive,
    roles:
      AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesToJSON(
        value.roles
      ),
    blocked: value.blocked,
    preferedLanguage: value.preferedLanguage,
    createdAt: value.createdAt === undefined ? undefined : value.createdAt.toISOString(),
    updatedAt: value.updatedAt === undefined ? undefined : value.updatedAt.toISOString(),
    createdBy: AboutImageDataAttributesFolderDataAttributesParentToJSON(value.createdBy),
    updatedBy: AboutImageDataAttributesFolderDataAttributesParentToJSON(value.updatedBy),
  };
}