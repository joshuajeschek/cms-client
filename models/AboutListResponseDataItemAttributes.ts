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
import type { AboutListResponseDataItemAttributesLocalizations } from './AboutListResponseDataItemAttributesLocalizations';
import {
  AboutListResponseDataItemAttributesLocalizationsFromJSON,
  AboutListResponseDataItemAttributesLocalizationsFromJSONTyped,
  AboutListResponseDataItemAttributesLocalizationsToJSON,
} from './AboutListResponseDataItemAttributesLocalizations';
import type { AboutLocalizationResponseImage } from './AboutLocalizationResponseImage';
import {
  AboutLocalizationResponseImageFromJSON,
  AboutLocalizationResponseImageFromJSONTyped,
  AboutLocalizationResponseImageToJSON,
} from './AboutLocalizationResponseImage';
import type { AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy } from './AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy';
import {
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByFromJSON,
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByFromJSONTyped,
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByToJSON,
} from './AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy';
import type { AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent } from './AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent';
import {
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentFromJSON,
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentFromJSONTyped,
  AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentToJSON,
} from './AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent';
import type { ContactLinkComponent } from './ContactLinkComponent';
import {
  ContactLinkComponentFromJSON,
  ContactLinkComponentFromJSONTyped,
  ContactLinkComponentToJSON,
} from './ContactLinkComponent';

/**
 *
 * @export
 * @interface AboutListResponseDataItemAttributes
 */
export interface AboutListResponseDataItemAttributes {
  /**
   *
   * @type {string}
   * @memberof AboutListResponseDataItemAttributes
   */
  title?: string;
  /**
   *
   * @type {string}
   * @memberof AboutListResponseDataItemAttributes
   */
  content?: string;
  /**
   *
   * @type {AboutLocalizationResponseImage}
   * @memberof AboutListResponseDataItemAttributes
   */
  image?: AboutLocalizationResponseImage;
  /**
   *
   * @type {Array<ContactLinkComponent>}
   * @memberof AboutListResponseDataItemAttributes
   */
  links?: Array<ContactLinkComponent>;
  /**
   *
   * @type {Date}
   * @memberof AboutListResponseDataItemAttributes
   */
  createdAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof AboutListResponseDataItemAttributes
   */
  updatedAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof AboutListResponseDataItemAttributes
   */
  publishedAt?: Date;
  /**
   *
   * @type {AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy}
   * @memberof AboutListResponseDataItemAttributes
   */
  createdBy?: AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy;
  /**
   *
   * @type {AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent}
   * @memberof AboutListResponseDataItemAttributes
   */
  updatedBy?: AboutLocalizationResponseImageDataAttributesFolderDataAttributesParent;
  /**
   *
   * @type {AboutListResponseDataItemAttributesLocalizations}
   * @memberof AboutListResponseDataItemAttributes
   */
  localizations?: AboutListResponseDataItemAttributesLocalizations;
  /**
   *
   * @type {string}
   * @memberof AboutListResponseDataItemAttributes
   */
  locale?: string;
}

/**
 * Check if a given object implements the AboutListResponseDataItemAttributes interface.
 */
export function instanceOfAboutListResponseDataItemAttributes(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function AboutListResponseDataItemAttributesFromJSON(
  json: any
): AboutListResponseDataItemAttributes {
  return AboutListResponseDataItemAttributesFromJSONTyped(json, false);
}

export function AboutListResponseDataItemAttributesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AboutListResponseDataItemAttributes {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    title: !exists(json, 'title') ? undefined : json['title'],
    content: !exists(json, 'content') ? undefined : json['content'],
    image: !exists(json, 'image')
      ? undefined
      : AboutLocalizationResponseImageFromJSON(json['image']),
    links: !exists(json, 'links')
      ? undefined
      : (json['links'] as Array<any>).map(ContactLinkComponentFromJSON),
    createdAt: !exists(json, 'createdAt') ? undefined : new Date(json['createdAt']),
    updatedAt: !exists(json, 'updatedAt') ? undefined : new Date(json['updatedAt']),
    publishedAt: !exists(json, 'publishedAt') ? undefined : new Date(json['publishedAt']),
    createdBy: !exists(json, 'createdBy')
      ? undefined
      : AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByFromJSON(
          json['createdBy']
        ),
    updatedBy: !exists(json, 'updatedBy')
      ? undefined
      : AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentFromJSON(
          json['updatedBy']
        ),
    localizations: !exists(json, 'localizations')
      ? undefined
      : AboutListResponseDataItemAttributesLocalizationsFromJSON(json['localizations']),
    locale: !exists(json, 'locale') ? undefined : json['locale'],
  };
}

export function AboutListResponseDataItemAttributesToJSON(
  value?: AboutListResponseDataItemAttributes | null
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
    image: AboutLocalizationResponseImageToJSON(value.image),
    links:
      value.links === undefined
        ? undefined
        : (value.links as Array<any>).map(ContactLinkComponentToJSON),
    createdAt: value.createdAt === undefined ? undefined : value.createdAt.toISOString(),
    updatedAt: value.updatedAt === undefined ? undefined : value.updatedAt.toISOString(),
    publishedAt: value.publishedAt === undefined ? undefined : value.publishedAt.toISOString(),
    createdBy:
      AboutLocalizationResponseImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByToJSON(
        value.createdBy
      ),
    updatedBy: AboutLocalizationResponseImageDataAttributesFolderDataAttributesParentToJSON(
      value.updatedBy
    ),
    localizations: AboutListResponseDataItemAttributesLocalizationsToJSON(value.localizations),
    locale: value.locale,
  };
}