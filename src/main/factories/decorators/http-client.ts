import { HttpClient } from '@data/protocols'
import { HttpClientDecorator } from '@main/decorators'
import { makeBaseURL, makeAxiosHttpClient } from '@main/factories/http'

export const makeHttpClientDecorator = (): HttpClient =>
  new HttpClientDecorator(makeAxiosHttpClient(makeBaseURL()))
