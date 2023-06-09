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

import * as runtime from '../runtime';
import type {
  AboutLocalizationRequest,
  AboutLocalizationResponse,
  AboutRequest,
  AboutResponse,
  GetAboutPopulateParameter,
} from '../models';
import {
  AboutLocalizationRequestFromJSON,
  AboutLocalizationRequestToJSON,
  AboutLocalizationResponseFromJSON,
  AboutLocalizationResponseToJSON,
  AboutRequestFromJSON,
  AboutRequestToJSON,
  AboutResponseFromJSON,
  AboutResponseToJSON,
  GetAboutPopulateParameterFromJSON,
  GetAboutPopulateParameterToJSON,
} from '../models';

export interface GetAboutRequest {
  sort?: string;
  paginationWithCount?: boolean;
  paginationPage?: number;
  paginationPageSize?: number;
  paginationStart?: number;
  paginationLimit?: number;
  fields?: string;
  populate?: GetAboutPopulateParameter;
  filters?: object;
  locale?: string;
}

export interface PostAboutLocalizationsRequest {
  aboutLocalizationRequest: AboutLocalizationRequest;
}

export interface PutAboutRequest {
  aboutRequest: AboutRequest;
}

/**
 *
 */
export class AboutApi extends runtime.BaseAPI {
  /**
   */
  async deleteAboutRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<number>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/about`,
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    if (this.isJsonMime(response.headers.get('content-type'))) {
      return new runtime.JSONApiResponse<number>(response);
    } else {
      return new runtime.TextApiResponse(response) as any;
    }
  }

  /**
   */
  async deleteAbout(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
    const response = await this.deleteAboutRaw(initOverrides);
    return await response.value();
  }

  /**
   */
  async getAboutRaw(
    requestParameters: GetAboutRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<AboutResponse>> {
    const queryParameters: any = {};

    if (requestParameters.sort !== undefined) {
      queryParameters['sort'] = requestParameters.sort;
    }

    if (requestParameters.paginationWithCount !== undefined) {
      queryParameters['pagination[withCount]'] = requestParameters.paginationWithCount;
    }

    if (requestParameters.paginationPage !== undefined) {
      queryParameters['pagination[page]'] = requestParameters.paginationPage;
    }

    if (requestParameters.paginationPageSize !== undefined) {
      queryParameters['pagination[pageSize]'] = requestParameters.paginationPageSize;
    }

    if (requestParameters.paginationStart !== undefined) {
      queryParameters['pagination[start]'] = requestParameters.paginationStart;
    }

    if (requestParameters.paginationLimit !== undefined) {
      queryParameters['pagination[limit]'] = requestParameters.paginationLimit;
    }

    if (requestParameters.fields !== undefined) {
      queryParameters['fields'] = requestParameters.fields;
    }

    if (requestParameters.populate !== undefined) {
      queryParameters['populate'] = requestParameters.populate;
    }

    if (requestParameters.filters !== undefined) {
      queryParameters['filters'] = requestParameters.filters;
    }

    if (requestParameters.locale !== undefined) {
      queryParameters['locale'] = requestParameters.locale;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/about`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => AboutResponseFromJSON(jsonValue));
  }

  /**
   */
  async getAbout(
    requestParameters: GetAboutRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<AboutResponse> {
    const response = await this.getAboutRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   */
  async postAboutLocalizationsRaw(
    requestParameters: PostAboutLocalizationsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<AboutLocalizationResponse>> {
    if (
      requestParameters.aboutLocalizationRequest === null ||
      requestParameters.aboutLocalizationRequest === undefined
    ) {
      throw new runtime.RequiredError(
        'aboutLocalizationRequest',
        'Required parameter requestParameters.aboutLocalizationRequest was null or undefined when calling postAboutLocalizations.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/about/localizations`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: AboutLocalizationRequestToJSON(requestParameters.aboutLocalizationRequest),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      AboutLocalizationResponseFromJSON(jsonValue)
    );
  }

  /**
   */
  async postAboutLocalizations(
    requestParameters: PostAboutLocalizationsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<AboutLocalizationResponse> {
    const response = await this.postAboutLocalizationsRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   */
  async putAboutRaw(
    requestParameters: PutAboutRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<AboutResponse>> {
    if (requestParameters.aboutRequest === null || requestParameters.aboutRequest === undefined) {
      throw new runtime.RequiredError(
        'aboutRequest',
        'Required parameter requestParameters.aboutRequest was null or undefined when calling putAbout.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/about`,
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: AboutRequestToJSON(requestParameters.aboutRequest),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => AboutResponseFromJSON(jsonValue));
  }

  /**
   */
  async putAbout(
    requestParameters: PutAboutRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<AboutResponse> {
    const response = await this.putAboutRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
