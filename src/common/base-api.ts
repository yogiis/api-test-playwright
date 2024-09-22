import { APIRequestContext } from '@playwright/test';

class BaseApi {
  protected request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }
}

export default BaseApi;
