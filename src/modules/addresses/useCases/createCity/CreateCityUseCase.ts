import City from '../../entities/City'
import ICitiesRepository from '../../repositories/ICitiesRepository'

interface IRequest {
  id: number
  name: string
  state_abbreviation: string
}

class CreateCityUseCase {
  constructor(private citiesRepository: ICitiesRepository) {}

  async execute({ id, name, state_abbreviation }: IRequest): Promise<City> {
    const isCityExists = await this.citiesRepository.findById(id)

    if (isCityExists) {
      throw new Error('City already exists')
    }

    return this.citiesRepository.create({ id, name, state_abbreviation })
  }
}

export default CreateCityUseCase
