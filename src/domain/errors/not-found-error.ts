export class NotFoundError extends Error {
  constructor() {
    super('Could not find what was requested.')
    this.name = 'NotFoundError'
  }
}
