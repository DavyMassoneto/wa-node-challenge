import CitiesRepository from '../../repositories/implementations/CitiesRepository'
import CreateCityController from './CreateCityController'
import CreateCityUseCase from './CreateCityUseCase'

export default function createCity(): CreateCityController {
  const citiesRepository = new CitiesRepository()

  const createCityUseCase = new CreateCityUseCase(citiesRepository)

  return new CreateCityController(createCityUseCase)
}
