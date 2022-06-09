import { HttpClient } from '@data/protocols'
import { HttpStatusCode } from '@data/protocols/http'
import {
  BadRequestError,
  InternalServerError,
  NotFoundError,
  UnexpectedError,
} from '@domain/errors'
import { QuestionsLoader } from '@domain/usecases'

export class RemoteQuestionsLoader implements QuestionsLoader {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<QuestionsLoader.Model[]>
  ) {}

  async load(quizId: string): Promise<QuestionsLoader.Model[]> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${quizId}`,
      method: 'get',
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      case HttpStatusCode.badRequest:
        throw new BadRequestError()
      case HttpStatusCode.notFound:
        throw new NotFoundError()
      case HttpStatusCode.serverError:
        throw new InternalServerError()
      default:
        throw new UnexpectedError()
    }
  }
}

export namespace RemoteQuestionsLoader {
  export type Model = QuestionsLoader.Model
}
