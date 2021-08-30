import { Router } from 'express'
import multer from 'multer'

import importCities from '../modules/addresses/useCases/importCities'

const citiesRoutes = Router()

const upload = multer({ dest: './tmp' })

citiesRoutes.post('/import', upload.single('file'), (request, response) => {
  const importCitiesController = importCities()
  return importCitiesController.handle(request, response)
})

export default citiesRoutes
