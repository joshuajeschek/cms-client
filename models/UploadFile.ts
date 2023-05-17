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
 * @interface UploadFile
 */
export interface UploadFile {
  /**
   *
   * @type {number}
   * @memberof UploadFile
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof UploadFile
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof UploadFile
   */
  alternativeText?: string;
  /**
   *
   * @type {string}
   * @memberof UploadFile
   */
  caption?: string;
  /**
   *
   * @type {number}
   * @memberof UploadFile
   */
  width?: number;
  /**
   *
   * @type {number}
   * @memberof UploadFile
   */
  height?: number;
  /**
   *
   * @type {number}
   * @memberof UploadFile
   */
  formats?: number;
  /**
   *
   * @type {string}
   * @memberof UploadFile
   */
  hash?: string;
  /**
   *
   * @type {string}
   * @memberof UploadFile
   */
  ext?: string;
  /**
   *
   * @type {string}
   * @memberof UploadFile
   */
  mime?: string;
  /**
   *
   * @type {number}
   * @memberof UploadFile
   */
  size?: number;
  /**
   *
   * @type {string}
   * @memberof UploadFile
   */
  url?: string;
  /**
   *
   * @type {string}
   * @memberof UploadFile
   */
  previewUrl?: string;
  /**
   *
   * @type {string}
   * @memberof UploadFile
   */
  provider?: string;
  /**
   *
   * @type {object}
   * @memberof UploadFile
   */
  providerMetadata?: object;
  /**
   *
   * @type {Date}
   * @memberof UploadFile
   */
  createdAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof UploadFile
   */
  updatedAt?: Date;
}

/**
 * Check if a given object implements the UploadFile interface.
 */
export function instanceOfUploadFile(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function UploadFileFromJSON(json: any): UploadFile {
  return UploadFileFromJSONTyped(json, false);
}

export function UploadFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): UploadFile {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    alternativeText: !exists(json, 'alternativeText') ? undefined : json['alternativeText'],
    caption: !exists(json, 'caption') ? undefined : json['caption'],
    width: !exists(json, 'width') ? undefined : json['width'],
    height: !exists(json, 'height') ? undefined : json['height'],
    formats: !exists(json, 'formats') ? undefined : json['formats'],
    hash: !exists(json, 'hash') ? undefined : json['hash'],
    ext: !exists(json, 'ext') ? undefined : json['ext'],
    mime: !exists(json, 'mime') ? undefined : json['mime'],
    size: !exists(json, 'size') ? undefined : json['size'],
    url: !exists(json, 'url') ? undefined : json['url'],
    previewUrl: !exists(json, 'previewUrl') ? undefined : json['previewUrl'],
    provider: !exists(json, 'provider') ? undefined : json['provider'],
    providerMetadata: !exists(json, 'provider_metadata') ? undefined : json['provider_metadata'],
    createdAt: !exists(json, 'createdAt') ? undefined : new Date(json['createdAt']),
    updatedAt: !exists(json, 'updatedAt') ? undefined : new Date(json['updatedAt']),
  };
}

export function UploadFileToJSON(value?: UploadFile | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    name: value.name,
    alternativeText: value.alternativeText,
    caption: value.caption,
    width: value.width,
    height: value.height,
    formats: value.formats,
    hash: value.hash,
    ext: value.ext,
    mime: value.mime,
    size: value.size,
    url: value.url,
    previewUrl: value.previewUrl,
    provider: value.provider,
    provider_metadata: value.providerMetadata,
    createdAt: value.createdAt === undefined ? undefined : value.createdAt.toISOString(),
    updatedAt: value.updatedAt === undefined ? undefined : value.updatedAt.toISOString(),
  };
}
