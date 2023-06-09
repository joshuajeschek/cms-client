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
import type { AboutLocalizationRequestImage } from './AboutLocalizationRequestImage';
import {
  AboutLocalizationRequestImageFromJSON,
  AboutLocalizationRequestImageFromJSONTyped,
  AboutLocalizationRequestImageToJSON,
} from './AboutLocalizationRequestImage';
import type { ContactLinkComponent } from './ContactLinkComponent';
import {
  ContactLinkComponentFromJSON,
  ContactLinkComponentFromJSONTyped,
  ContactLinkComponentToJSON,
} from './ContactLinkComponent';

/**
 *
 * @export
 * @interface ArtistRequestData
 */
export interface ArtistRequestData {
  /**
   *
   * @type {string}
   * @memberof ArtistRequestData
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof ArtistRequestData
   */
  bio?: string;
  /**
   *
   * @type {string}
   * @memberof ArtistRequestData
   */
  handle: string;
  /**
   *
   * @type {Array<AboutLocalizationRequestImage>}
   * @memberof ArtistRequestData
   */
  artworks?: Array<AboutLocalizationRequestImage>;
  /**
   *
   * @type {AboutLocalizationRequestImage}
   * @memberof ArtistRequestData
   */
  picture?: AboutLocalizationRequestImage;
  /**
   *
   * @type {Date}
   * @memberof ArtistRequestData
   */
  birthday?: Date;
  /**
   *
   * @type {Array<ContactLinkComponent>}
   * @memberof ArtistRequestData
   */
  contact?: Array<ContactLinkComponent>;
  /**
   *
   * @type {number}
   * @memberof ArtistRequestData
   */
  priority: number;
  /**
   *
   * @type {string}
   * @memberof ArtistRequestData
   */
  locale?: string;
}

/**
 * Check if a given object implements the ArtistRequestData interface.
 */
export function instanceOfArtistRequestData(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'name' in value;
  isInstance = isInstance && 'handle' in value;
  isInstance = isInstance && 'priority' in value;

  return isInstance;
}

export function ArtistRequestDataFromJSON(json: any): ArtistRequestData {
  return ArtistRequestDataFromJSONTyped(json, false);
}

export function ArtistRequestDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ArtistRequestData {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: json['name'],
    bio: !exists(json, 'bio') ? undefined : json['bio'],
    handle: json['handle'],
    artworks: !exists(json, 'artworks')
      ? undefined
      : (json['artworks'] as Array<any>).map(AboutLocalizationRequestImageFromJSON),
    picture: !exists(json, 'picture')
      ? undefined
      : AboutLocalizationRequestImageFromJSON(json['picture']),
    birthday: !exists(json, 'birthday') ? undefined : new Date(json['birthday']),
    contact: !exists(json, 'contact')
      ? undefined
      : (json['contact'] as Array<any>).map(ContactLinkComponentFromJSON),
    priority: json['priority'],
    locale: !exists(json, 'locale') ? undefined : json['locale'],
  };
}

export function ArtistRequestDataToJSON(value?: ArtistRequestData | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    bio: value.bio,
    handle: value.handle,
    artworks:
      value.artworks === undefined
        ? undefined
        : (value.artworks as Array<any>).map(AboutLocalizationRequestImageToJSON),
    picture: AboutLocalizationRequestImageToJSON(value.picture),
    birthday: value.birthday === undefined ? undefined : value.birthday.toISOString().substr(0, 10),
    contact:
      value.contact === undefined
        ? undefined
        : (value.contact as Array<any>).map(ContactLinkComponentToJSON),
    priority: value.priority,
    locale: value.locale,
  };
}
