import { Router } from 'express'
import multer from 'multer'

import importStates from '../modules/addresses/useCases/importStates'

const statesRoutes = Router()

const upload = multer({ dest: './tmp' })

statesRoutes.post('/import', upload.single('file'), (request, response) => {
  const importStatesController = importStates()
  return importStatesController.handle(request, response)
})

export default statesRoutes
