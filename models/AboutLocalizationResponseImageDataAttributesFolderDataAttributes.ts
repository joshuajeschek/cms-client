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
import type { AboutLocalizationResponseImageDataAttributesFolderDataAttributesFiles } from './AboutLocalizationResponseImageDataAttributesFolderDataAttributesFiles';
import {
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesFromJSON,
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesFromJSONTyped,
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesToJSON,
} from './AboutLocalizationResponseImageDataAttributesFolderDataAttributesFiles';
import type { AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent } from './AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent';
import {
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentFromJSON,
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentFromJSONTyped,
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentToJSON,
} from './AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent';
import type { AboutLocalizationResponseImageDataAttributesRelated } from './AboutLocalizationResponseImageDataAttributesRelated';
import {
  AboutLocalizationResponseImageDataAttributesRelatedFromJSON,
  AboutLocalizationResponseImageDataAttributesRelatedFromJSONTyped,
  AboutLocalizationResponseImageDataAttributesRelatedToJSON,
} from './AboutLocalizationResponseImageDataAttributesRelated';

/**
 *
 * @export
 * @interface AboutLocalizationResponseImageDataAttributesFolderDataAttributes
 */
export interface AboutLocalizationResponseImageDataAttributesFolderDataAttributes {
  /**
   *
   * @type {string}
   * @memberof AboutLocalizationResponseImageDataAttributesFolderDataAttributes
   */
  name?: string;
  /**
   *
   * @type {number}
   * @memberof AboutLocalizationResponseImageDataAttributesFolderDataAttributes
   */
  pathId?: number;
  /**
   *
   * @type {AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent}
   * @memberof AboutLocalizationResponseImageDataAttributesFolderDataAttributes
   */
  parent?: AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent;
  /**
   *
   * @type {AboutLocalizationResponseImageDataAttributesRelated}
   * @memberof AboutLocalizationResponseImageDataAttributesFolderDataAttributes
   */
  children?: AboutLocalizationResponseImageDataAttributesRelated;
  /**
   *
   * @type {AboutLocalizationResponseImageDataAttributesFolderDataAttributesFiles}
   * @memberof AboutLocalizationResponseImageDataAttributesFolderDataAttributes
   */
  files?: AboutLocalizationResponseImageDataAttributesFolderDataAttributesFiles;
  /**
   *
   * @type {string}
   * @memberof AboutLocalizationResponseImageDataAttributesFolderDataAttributes
   */
  path?: string;
  /**
   *
   * @type {Date}
   * @memberof AboutLocalizationResponseImageDataAttributesFolderDataAttributes
   */
  createdAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof AboutLocalizationResponseImageDataAttributesFolderDataAttributes
   */
  updatedAt?: Date;
  /**
   *
   * @type {AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent}
   * @memberof AboutLocalizationResponseImageDataAttributesFolderDataAttributes
   */
  createdBy?: AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent;
  /**
   *
   * @type {AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent}
   * @memberof AboutLocalizationResponseImageDataAttributesFolderDataAttributes
   */
  updatedBy?: AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent;
}

/**
 * Check if a given object implements the AboutLocalizationResponseImageDataAttributesFolderDataAttributes interface.
 */
export function instanceOfAboutLocalizationResponseImageDataAttributesFolderDataAttributes(
  value: object
): boolean {
  let isInstance = true;

  return isInstance;
}

export function AboutLocalizationResponseImageDataAttributesFolderDataAttributesFromJSON(
  json: any
): AboutLocalizationResponseImageDataAttributesFolderDataAttributes {
  return AboutLocalizationResponseImageDataAttributesFolderDataAttributesFromJSONTyped(json, false);
}

export function AboutLocalizationResponseImageDataAttributesFolderDataAttributesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AboutLocalizationResponseImageDataAttributesFolderDataAttributes {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: !exists(json, 'name') ? undefined : json['name'],
    pathId: !exists(json, 'pathId') ? undefined : json['pathId'],
    parent: !exists(json, 'parent')
      ? undefined
      : AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentFromJSON(
          json['parent']
        ),
    children: !exists(json, 'children')
      ? undefined
      : AboutLocalizationResponseImageDataAttributesRelatedFromJSON(json['children']),
    files: !exists(json, 'files')
      ? undefined
      : AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesFromJSON(
          json['files']
        ),
    path: !exists(json, 'path') ? undefined : json['path'],
    createdAt: !exists(json, 'createdAt') ? undefined : new Date(json['createdAt']),
    updatedAt: !exists(json, 'updatedAt') ? undefined : new Date(json['updatedAt']),
    createdBy: !exists(json, 'createdBy')
      ? undefined
      : AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentFromJSON(
          json['createdBy']
        ),
    updatedBy: !exists(json, 'updatedBy')
      ? undefined
      : AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentFromJSON(
          json['updatedBy']
        ),
  };
}

export function AboutLocalizationResponseImageDataAttributesFolderDataAttributesToJSON(
  value?: AboutLocalizationResponseImageDataAttributesFolderDataAttributes | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    pathId: value.pathId,
    parent: AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentToJSON(
      value.parent
    ),
    children: AboutLocalizationResponseImageDataAttributesRelatedToJSON(value.children),
    files: AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesToJSON(value.files),
    path: value.path,
    createdAt: value.createdAt === undefined ? undefined : value.createdAt.toISOString(),
    updatedAt: value.updatedAt === undefined ? undefined : value.updatedAt.toISOString(),
    createdBy: AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentToJSON(
      value.createdBy
    ),
    updatedBy: AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentToJSON(
      value.updatedBy
    ),
  };
}
