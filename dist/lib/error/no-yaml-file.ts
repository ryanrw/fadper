export class NoYAMLFileError extends Error {
  constructor() {
    const message = `Your input folder doesn't contain any image list config`
    super(message)
    this.name = `NoYAMLFileError`
  }
}
