export class Question {
  category!: string
  type!: string
  difficulty!: string
  question!: string
  correct_answer!: string
  incorrect_answers!: string[]
  selected_answer!: string

  static map(entity: Question): Question {
    return Questions.toEntity(entity)
  }

  static orderQuestionOptionsByName(questionOptions: string[]): string[] {
    return questionOptions.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))
  }

  static mergeQuestionOptions(entity: Question): string[] {
    return [...(entity?.incorrect_answers || []), entity?.correct_answer || '']
  }

  static mergeAndOrderByNameQuestionOptions(entity: Question): string[] {
    return Question.orderQuestionOptionsByName(
      Question.mergeQuestionOptions(entity)
    )
  }

  static withoutAnswer(entity: Question): Question {
    return {
      ...entity,
      selected_answer: '',
    }
  }
}

export class Questions {
  [key: number]: Question

  static toEntity(entity: Question) {
    return {
      category: entity.category,
      type: entity.type,
      difficulty: entity.difficulty,
      question: entity.question,
      correct_answer: entity.correct_answer,
      incorrect_answers: entity.incorrect_answers,
      selected_answer: entity.selected_answer || '',
    }
  }

  static mapCollection(entities: Questions): Question[] {
    return Object.values(entities || []).map(Question.map)
  }

  static calculateCorrectAnswersCount(entities: Questions): number {
    return Object.values(entities).reduce(
      (count: number, question: Question) =>
        count + (question.correct_answer === question.selected_answer ? 1 : 0),
      0
    )
  }

  static withoutAnswers(entities: Questions): Questions {
    return Object.values(entities).map(Question.withoutAnswer)
  }
}
