import { Request, Response } from 'express'

import CreateCityUseCase from './CreateCityUseCase'

class CreateCityController {
  constructor(private createCityUseCase: CreateCityUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, name, state_abbreviation } = request.body

    const city = await this.createCityUseCase.execute({ id, name, state_abbreviation })

    return response.status(201).json(city)
  }
}

export default CreateCityController
