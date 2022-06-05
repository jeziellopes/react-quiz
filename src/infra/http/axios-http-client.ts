/* eslint-disable no-use-before-define */
import { HttpRequest, HttpResponse, HttpClient } from '@data/protocols/http'
import axios, { AxiosInstance, AxiosResponse } from 'axios'

export class AxiosHttpClient implements HttpClient {
  private baseURL?: string
  private instance?: AxiosInstance

  constructor(baseURL: string) {
    this.baseURL = baseURL
  }

  public getInstance() {
    if (!this.instance) {
      this.instance = axios.create({ baseURL: this.baseURL })
    }
    return this.instance
  }

  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await this.getInstance().request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
      })
    } catch (error: any) {
      axiosResponse = error.response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    }
  }
}
