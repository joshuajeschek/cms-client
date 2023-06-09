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
import type { AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy } from './AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy';
import {
  AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByFromJSON,
  AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByFromJSONTyped,
  AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByToJSON,
} from './AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy';
import type { AboutImageDataAttributesFolderDataAttributesParent } from './AboutImageDataAttributesFolderDataAttributesParent';
import {
  AboutImageDataAttributesFolderDataAttributesParentFromJSON,
  AboutImageDataAttributesFolderDataAttributesParentFromJSONTyped,
  AboutImageDataAttributesFolderDataAttributesParentToJSON,
} from './AboutImageDataAttributesFolderDataAttributesParent';
import type { UpdateLocalizations } from './UpdateLocalizations';
import {
  UpdateLocalizationsFromJSON,
  UpdateLocalizationsFromJSONTyped,
  UpdateLocalizationsToJSON,
} from './UpdateLocalizations';

/**
 *
 * @export
 * @interface Update
 */
export interface Update {
  /**
   *
   * @type {string}
   * @memberof Update
   */
  title?: string;
  /**
   *
   * @type {string}
   * @memberof Update
   */
  content?: string;
  /**
   *
   * @type {Date}
   * @memberof Update
   */
  datetime?: Date;
  /**
   *
   * @type {Date}
   * @memberof Update
   */
  createdAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof Update
   */
  updatedAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof Update
   */
  publishedAt?: Date;
  /**
   *
   * @type {AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy}
   * @memberof Update
   */
  createdBy?: AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy;
  /**
   *
   * @type {AboutImageDataAttributesFolderDataAttributesParent}
   * @memberof Update
   */
  updatedBy?: AboutImageDataAttributesFolderDataAttributesParent;
  /**
   *
   * @type {UpdateLocalizations}
   * @memberof Update
   */
  localizations?: UpdateLocalizations;
  /**
   *
   * @type {string}
   * @memberof Update
   */
  locale?: string;
}

/**
 * Check if a given object implements the Update interface.
 */
export function instanceOfUpdate(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function UpdateFromJSON(json: any): Update {
  return UpdateFromJSONTyped(json, false);
}

export function UpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): Update {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    title: !exists(json, 'title') ? undefined : json['title'],
    content: !exists(json, 'content') ? undefined : json['content'],
    datetime: !exists(json, 'datetime') ? undefined : new Date(json['datetime']),
    createdAt: !exists(json, 'createdAt') ? undefined : new Date(json['createdAt']),
    updatedAt: !exists(json, 'updatedAt') ? undefined : new Date(json['updatedAt']),
    publishedAt: !exists(json, 'publishedAt') ? undefined : new Date(json['publishedAt']),
    createdBy: !exists(json, 'createdBy')
      ? undefined
      : AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByFromJSON(
          json['createdBy']
        ),
    updatedBy: !exists(json, 'updatedBy')
      ? undefined
      : AboutImageDataAttributesFolderDataAttributesParentFromJSON(json['updatedBy']),
    localizations: !exists(json, 'localizations')
      ? undefined
      : UpdateLocalizationsFromJSON(json['localizations']),
    locale: !exists(json, 'locale') ? undefined : json['locale'],
  };
}

export function UpdateToJSON(value?: Update | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    title: value.title,
    content: value.content,
    datetime: value.datetime === undefined ? undefined : value.datetime.toISOString(),
    createdAt: value.createdAt === undefined ? undefined : value.createdAt.toISOString(),
    updatedAt: value.updatedAt === undefined ? undefined : value.updatedAt.toISOString(),
    publishedAt: value.publishedAt === undefined ? undefined : value.publishedAt.toISOString(),
    createdBy: AboutImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByToJSON(
      value.createdBy
    ),
    updatedBy: AboutImageDataAttributesFolderDataAttributesParentToJSON(value.updatedBy),
    localizations: UpdateLocalizationsToJSON(value.localizations),
    locale: value.locale,
  };
}
