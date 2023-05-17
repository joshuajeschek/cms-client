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
  ArtworkListResponse,
  ArtworkLocalizationRequest,
  ArtworkLocalizationResponse,
  ArtworkRequest,
  ArtworkResponse,
  GetAboutPopulateParameter,
} from '../models';
import {
  ArtworkListResponseFromJSON,
  ArtworkListResponseToJSON,
  ArtworkLocalizationRequestFromJSON,
  ArtworkLocalizationRequestToJSON,
  ArtworkLocalizationResponseFromJSON,
  ArtworkLocalizationResponseToJSON,
  ArtworkRequestFromJSON,
  ArtworkRequestToJSON,
  ArtworkResponseFromJSON,
  ArtworkResponseToJSON,
  GetAboutPopulateParameterFromJSON,
  GetAboutPopulateParameterToJSON,
} from '../models';

export interface DeleteArtworksIdRequest {
  id: number;
}

export interface GetArtworksRequest {
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

export interface GetArtworksIdRequest {
  id: number;
}

export interface PostArtworksRequest {
  artworkRequest: ArtworkRequest;
}

export interface PostArtworksIdLocalizationsRequest {
  id: number;
  artworkLocalizationRequest: ArtworkLocalizationRequest;
}

export interface PutArtworksIdRequest {
  id: number;
  artworkRequest: ArtworkRequest;
}

/**
 *
 */
export class ArtworkApi extends runtime.BaseAPI {
  /**
   */
  async deleteArtworksIdRaw(
    requestParameters: DeleteArtworksIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<number>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling deleteArtworksId.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token('bearerAuth', []);

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/artworks/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
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
  async deleteArtworksId(
    requestParameters: DeleteArtworksIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<number> {
    const response = await this.deleteArtworksIdRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   */
  async getArtworksRaw(
    requestParameters: GetArtworksRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<ArtworkListResponse>> {
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

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token('bearerAuth', []);

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/artworks`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ArtworkListResponseFromJSON(jsonValue)
    );
  }

  /**
   */
  async getArtworks(
    requestParameters: GetArtworksRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<ArtworkListResponse> {
    const response = await this.getArtworksRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   */
  async getArtworksIdRaw(
    requestParameters: GetArtworksIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<ArtworkResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling getArtworksId.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token('bearerAuth', []);

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/artworks/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => ArtworkResponseFromJSON(jsonValue));
  }

  /**
   */
  async getArtworksId(
    requestParameters: GetArtworksIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<ArtworkResponse> {
    const response = await this.getArtworksIdRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   */
  async postArtworksRaw(
    requestParameters: PostArtworksRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<ArtworkResponse>> {
    if (
      requestParameters.artworkRequest === null ||
      requestParameters.artworkRequest === undefined
    ) {
      throw new runtime.RequiredError(
        'artworkRequest',
        'Required parameter requestParameters.artworkRequest was null or undefined when calling postArtworks.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token('bearerAuth', []);

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/artworks`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: ArtworkRequestToJSON(requestParameters.artworkRequest),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => ArtworkResponseFromJSON(jsonValue));
  }

  /**
   */
  async postArtworks(
    requestParameters: PostArtworksRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<ArtworkResponse> {
    const response = await this.postArtworksRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   */
  async postArtworksIdLocalizationsRaw(
    requestParameters: PostArtworksIdLocalizationsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<ArtworkLocalizationResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling postArtworksIdLocalizations.'
      );
    }

    if (
      requestParameters.artworkLocalizationRequest === null ||
      requestParameters.artworkLocalizationRequest === undefined
    ) {
      throw new runtime.RequiredError(
        'artworkLocalizationRequest',
        'Required parameter requestParameters.artworkLocalizationRequest was null or undefined when calling postArtworksIdLocalizations.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token('bearerAuth', []);

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/artworks/{id}/localizations`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: ArtworkLocalizationRequestToJSON(requestParameters.artworkLocalizationRequest),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ArtworkLocalizationResponseFromJSON(jsonValue)
    );
  }

  /**
   */
  async postArtworksIdLocalizations(
    requestParameters: PostArtworksIdLocalizationsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<ArtworkLocalizationResponse> {
    const response = await this.postArtworksIdLocalizationsRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   */
  async putArtworksIdRaw(
    requestParameters: PutArtworksIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<ArtworkResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling putArtworksId.'
      );
    }

    if (
      requestParameters.artworkRequest === null ||
      requestParameters.artworkRequest === undefined
    ) {
      throw new runtime.RequiredError(
        'artworkRequest',
        'Required parameter requestParameters.artworkRequest was null or undefined when calling putArtworksId.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token('bearerAuth', []);

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/artworks/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: ArtworkRequestToJSON(requestParameters.artworkRequest),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => ArtworkResponseFromJSON(jsonValue));
  }

  /**
   */
  async putArtworksId(
    requestParameters: PutArtworksIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<ArtworkResponse> {
    const response = await this.putArtworksIdRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
