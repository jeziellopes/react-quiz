import { Questions } from '@adapters/redux/entities'
import { Question } from '@domain/entities'

export class QuestionViewModel {
  category!: string
  type!: string
  difficulty!: string
  question!: string
  correct_answer!: string
  incorrect_answers!: string[]
  selected_answer!: string
  all_answers!: string[]

  static map(entity: QuestionViewModel): QuestionViewModel {
    return QuestionsViewModel.toEntity(entity)
  }

  static orderQuestionOptionsByName(questionOptions: string[]): string[] {
    return questionOptions.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))
  }

  static mergeQuestionOptions(entity: Question): string[] {
    return [...(entity?.incorrect_answers || []), entity?.correct_answer || '']
  }

  static mergeAndOrderByNameQuestionOptions(entity: Question): string[] {
    return QuestionViewModel.orderQuestionOptionsByName(
      QuestionViewModel.mergeQuestionOptions(entity)
    )
  }

  static questionsLength(entities: QuestionViewModel[]): number {
    return entities.length ? entities.length - 1 : 0
  }

  static hasOptions(entity: QuestionViewModel) {
    return entity?.all_answers?.length
  }

  static isValid(entity: QuestionViewModel) {
    return QuestionViewModel.hasOptions(entity)
  }
}

export class QuestionsViewModel {
  [key: number]: QuestionViewModel

  static toEntity(entity: Question) {
    return {
      category: entity.category,
      type: entity.type,
      difficulty: entity.difficulty,
      question: entity.question,
      correct_answer: entity.correct_answer,
      incorrect_answers: entity.incorrect_answers,
      selected_answer: entity.selected_answer || '',
      all_answers: QuestionViewModel.mergeAndOrderByNameQuestionOptions(entity),
    }
  }

  static mapCollection(entities: Questions): QuestionViewModel[] {
    return Object.values(entities || []).map(QuestionViewModel.map)
  }
}
