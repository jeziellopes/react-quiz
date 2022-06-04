export class BadRequestError extends Error {
  constructor () {
    super('Invalid or corrupted request.')
    this.name = 'BadRequestError'
  }
}
