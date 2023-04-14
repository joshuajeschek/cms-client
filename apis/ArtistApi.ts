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
  ArtistListResponse,
  ArtistLocalizationRequest,
  ArtistLocalizationResponse,
  ArtistRequest,
  ArtistResponse,
} from '../models';
import {
  ArtistListResponseFromJSON,
  ArtistListResponseToJSON,
  ArtistLocalizationRequestFromJSON,
  ArtistLocalizationRequestToJSON,
  ArtistLocalizationResponseFromJSON,
  ArtistLocalizationResponseToJSON,
  ArtistRequestFromJSON,
  ArtistRequestToJSON,
  ArtistResponseFromJSON,
  ArtistResponseToJSON,
} from '../models';

export interface DeleteArtistsIdRequest {
  id: number;
}

export interface GetArtistsRequest {
  sort?: string;
  paginationWithCount?: boolean;
  paginationPage?: number;
  paginationPageSize?: number;
  paginationStart?: number;
  paginationLimit?: number;
  fields?: string;
  populate?: string;
  filters?: object;
  locale?: string;
}

export interface GetArtistsIdRequest {
  id: number;
}

export interface PostArtistsRequest {
  artistRequest: ArtistRequest;
}

export interface PostArtistsIdLocalizationsRequest {
  id: number;
  artistLocalizationRequest: ArtistLocalizationRequest;
}

export interface PutArtistsIdRequest {
  id: number;
  artistRequest: ArtistRequest;
}

/**
 *
 */
export class ArtistApi extends runtime.BaseAPI {
  /**
   */
  async deleteArtistsIdRaw(
    requestParameters: DeleteArtistsIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<number>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling deleteArtistsId.'
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
        path: `/artists/{id}`.replace(
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
  async deleteArtistsId(
    requestParameters: DeleteArtistsIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<number> {
    const response = await this.deleteArtistsIdRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   */
  async getArtistsRaw(
    requestParameters: GetArtistsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<ArtistListResponse>> {
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
        path: `/artists`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ArtistListResponseFromJSON(jsonValue)
    );
  }

  /**
   */
  async getArtists(
    requestParameters: GetArtistsRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<ArtistListResponse> {
    const response = await this.getArtistsRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   */
  async getArtistsIdRaw(
    requestParameters: GetArtistsIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<ArtistResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling getArtistsId.'
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
        path: `/artists/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => ArtistResponseFromJSON(jsonValue));
  }

  /**
   */
  async getArtistsId(
    requestParameters: GetArtistsIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<ArtistResponse> {
    const response = await this.getArtistsIdRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   */
  async postArtistsRaw(
    requestParameters: PostArtistsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<ArtistResponse>> {
    if (requestParameters.artistRequest === null || requestParameters.artistRequest === undefined) {
      throw new runtime.RequiredError(
        'artistRequest',
        'Required parameter requestParameters.artistRequest was null or undefined when calling postArtists.'
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
        path: `/artists`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: ArtistRequestToJSON(requestParameters.artistRequest),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => ArtistResponseFromJSON(jsonValue));
  }

  /**
   */
  async postArtists(
    requestParameters: PostArtistsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<ArtistResponse> {
    const response = await this.postArtistsRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   */
  async postArtistsIdLocalizationsRaw(
    requestParameters: PostArtistsIdLocalizationsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<ArtistLocalizationResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling postArtistsIdLocalizations.'
      );
    }

    if (
      requestParameters.artistLocalizationRequest === null ||
      requestParameters.artistLocalizationRequest === undefined
    ) {
      throw new runtime.RequiredError(
        'artistLocalizationRequest',
        'Required parameter requestParameters.artistLocalizationRequest was null or undefined when calling postArtistsIdLocalizations.'
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
        path: `/artists/{id}/localizations`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: ArtistLocalizationRequestToJSON(requestParameters.artistLocalizationRequest),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ArtistLocalizationResponseFromJSON(jsonValue)
    );
  }

  /**
   */
  async postArtistsIdLocalizations(
    requestParameters: PostArtistsIdLocalizationsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<ArtistLocalizationResponse> {
    const response = await this.postArtistsIdLocalizationsRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   */
  async putArtistsIdRaw(
    requestParameters: PutArtistsIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<ArtistResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling putArtistsId.'
      );
    }

    if (requestParameters.artistRequest === null || requestParameters.artistRequest === undefined) {
      throw new runtime.RequiredError(
        'artistRequest',
        'Required parameter requestParameters.artistRequest was null or undefined when calling putArtistsId.'
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
        path: `/artists/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: ArtistRequestToJSON(requestParameters.artistRequest),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => ArtistResponseFromJSON(jsonValue));
  }

  /**
   */
  async putArtistsId(
    requestParameters: PutArtistsIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<ArtistResponse> {
    const response = await this.putArtistsIdRaw(requestParameters, initOverrides);
    return await response.value();
  }
}