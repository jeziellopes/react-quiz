import { HttpClient, HttpRequest, HttpResponse } from '@data/protocols'

export class HttpClientDecorator implements HttpClient {
  constructor(private readonly httpClient: HttpClient) {}

  async request(data: HttpRequest): Promise<HttpResponse> {
    return this.httpClient.request(data)
  }
}
