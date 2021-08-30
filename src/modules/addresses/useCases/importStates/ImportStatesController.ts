import { Request, Response } from 'express'

import ImportStatesUseCase from './ImportStatesUseCase'

class ImportStatesController {
  constructor(private importStatesUseCase: ImportStatesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request

    if (!file) {
      throw new Error('file not received')
    }

    await this.importStatesUseCase.execute(file)

    return response.send()
  }
}

export default ImportStatesController
