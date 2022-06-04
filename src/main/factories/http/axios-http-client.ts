import { AxiosHttpClient } from '@infra/http'

export const makeAxiosHttpClient = (baseURL: string): AxiosHttpClient =>
  new AxiosHttpClient(baseURL)
