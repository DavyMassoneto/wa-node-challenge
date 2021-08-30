import { Request, Response } from 'express'

import ImportCitiesUseCase from './ImportCitiesUseCase'

class ImportCitiesController {
  constructor(private importCitiesUseCase: ImportCitiesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request

    if (!file) {
      throw new Error('file not received')
    }

    await this.importCitiesUseCase.execute(file)

    return response.send()
  }
}

export default ImportCitiesController
