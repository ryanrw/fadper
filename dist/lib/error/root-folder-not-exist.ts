export class RootFolderNotExistError extends Error {
  constructor(path: string) {
    const message = `Root folder ${path} is not exist. \n
    Please try to check your following input: \n
    \t${path}
    `
    super(message)
    this.name = `RootFolderNotExistError`
  }
}
