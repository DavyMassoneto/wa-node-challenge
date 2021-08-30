import CitiesRepository from '../../repositories/implementations/CitiesRepository'
import ImportCitiesController from './ImportCitiesController'
import ImportCitiesUseCase from './ImportCitiesUseCase'

export default function importCities(): ImportCitiesController {
  const citiesRepository = new CitiesRepository()

  const importCitiesUseCase = new ImportCitiesUseCase(citiesRepository)

  return new ImportCitiesController(importCitiesUseCase)
}
