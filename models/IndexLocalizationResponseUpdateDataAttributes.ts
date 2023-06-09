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
import type { AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent } from './AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent';
import {
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentFromJSON,
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentFromJSONTyped,
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentToJSON,
} from './AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent';
import type { AboutLocalizationResponseLocalizations } from './AboutLocalizationResponseLocalizations';
import {
  AboutLocalizationResponseLocalizationsFromJSON,
  AboutLocalizationResponseLocalizationsFromJSONTyped,
  AboutLocalizationResponseLocalizationsToJSON,
} from './AboutLocalizationResponseLocalizations';

/**
 *
 * @export
 * @interface IndexLocalizationResponseUpdateDataAttributes
 */
export interface IndexLocalizationResponseUpdateDataAttributes {
  /**
   *
   * @type {string}
   * @memberof IndexLocalizationResponseUpdateDataAttributes
   */
  title?: string;
  /**
   *
   * @type {string}
   * @memberof IndexLocalizationResponseUpdateDataAttributes
   */
  content?: string;
  /**
   *
   * @type {Date}
   * @memberof IndexLocalizationResponseUpdateDataAttributes
   */
  datetime?: Date;
  /**
   *
   * @type {Date}
   * @memberof IndexLocalizationResponseUpdateDataAttributes
   */
  createdAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof IndexLocalizationResponseUpdateDataAttributes
   */
  updatedAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof IndexLocalizationResponseUpdateDataAttributes
   */
  publishedAt?: Date;
  /**
   *
   * @type {AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent}
   * @memberof IndexLocalizationResponseUpdateDataAttributes
   */
  createdBy?: AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent;
  /**
   *
   * @type {AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent}
   * @memberof IndexLocalizationResponseUpdateDataAttributes
   */
  updatedBy?: AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent;
  /**
   *
   * @type {AboutLocalizationResponseLocalizations}
   * @memberof IndexLocalizationResponseUpdateDataAttributes
   */
  localizations?: AboutLocalizationResponseLocalizations;
  /**
   *
   * @type {string}
   * @memberof IndexLocalizationResponseUpdateDataAttributes
   */
  locale?: string;
}

/**
 * Check if a given object implements the IndexLocalizationResponseUpdateDataAttributes interface.
 */
export function instanceOfIndexLocalizationResponseUpdateDataAttributes(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function IndexLocalizationResponseUpdateDataAttributesFromJSON(
  json: any
): IndexLocalizationResponseUpdateDataAttributes {
  return IndexLocalizationResponseUpdateDataAttributesFromJSONTyped(json, false);
}

export function IndexLocalizationResponseUpdateDataAttributesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): IndexLocalizationResponseUpdateDataAttributes {
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
      : AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentFromJSON(
          json['createdBy']
        ),
    updatedBy: !exists(json, 'updatedBy')
      ? undefined
      : AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentFromJSON(
          json['updatedBy']
        ),
    localizations: !exists(json, 'localizations')
      ? undefined
      : AboutLocalizationResponseLocalizationsFromJSON(json['localizations']),
    locale: !exists(json, 'locale') ? undefined : json['locale'],
  };
}

export function IndexLocalizationResponseUpdateDataAttributesToJSON(
  value?: IndexLocalizationResponseUpdateDataAttributes | null
): any {
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
    createdBy: AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentToJSON(
      value.createdBy
    ),
    updatedBy: AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentToJSON(
      value.updatedBy
    ),
    localizations: AboutLocalizationResponseLocalizationsToJSON(value.localizations),
    locale: value.locale,
  };
}
