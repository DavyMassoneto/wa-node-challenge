import StatesRepository from '../../repositories/implementations/StatesRepository'
import ImportStatesController from './ImportStatesController'
import ImportStatesUseCase from './ImportStatesUseCase'

export default function importStates(): ImportStatesController {
  const statesRepository = new StatesRepository()

  const importStatesUseCase = new ImportStatesUseCase(statesRepository)

  return new ImportStatesController(importStatesUseCase)
}
