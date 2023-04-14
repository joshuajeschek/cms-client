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

/**
 * @type ErrorData
 *
 * @export
 */
export type ErrorData = Array<any> | object;

export function ErrorDataFromJSON(json: any): ErrorData {
  return ErrorDataFromJSONTyped(json, false);
}

export function ErrorDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorData {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    ...(Array < any > FromJSONTyped(json, true)),
    ...objectFromJSONTyped(json, true),
  };
}

export function ErrorDataToJSON(value?: ErrorData | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }

  if (instanceOfArray<any>(value)) {
    return Array < any > ToJSON(value as Array<any>);
  }
  if (instanceOfobject(value)) {
    return objectToJSON(value as object);
  }

  return {};
}
