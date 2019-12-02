export class NoOutputError extends Error {
  constructor() {
    const message = `No output path specified.`
    super(message)
    this.name = `NoOutputError`
  }
}
