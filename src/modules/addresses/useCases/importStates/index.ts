import ImportStatesController from './ImportStatesController'
import ImportStatesUseCase from './ImportStatesUseCase'

export default function importStates(): ImportStatesController {
  const importStatesUseCase = new ImportStatesUseCase()

  return new ImportStatesController(importStatesUseCase)
}
