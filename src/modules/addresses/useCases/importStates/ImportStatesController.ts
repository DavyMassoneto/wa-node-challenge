import { Request, Response } from 'express'

import ImportStatesUseCase from './ImportStatesUseCase'

class ImportStatesController {
  constructor(private importStatesUseCase: ImportStatesUseCase) {}

  handle(request: Request, response: Response): Response {
    const { file } = request

    if (!file) {
      throw new Error('file not received')
    }

    this.importStatesUseCase.execute(file)

    return response.send()
  }
}

export default ImportStatesController
