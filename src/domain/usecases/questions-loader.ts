import { Question } from '@domain/entities'

export interface QuestionsLoader {
  load: (quizId: QuestionsLoader.Param) => Promise<QuestionsLoader.Model[]>
}

export namespace QuestionsLoader {
  export type Param = string

  export type Model = Question
}
