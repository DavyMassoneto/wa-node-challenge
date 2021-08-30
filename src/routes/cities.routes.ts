import { Router } from 'express'
import multer from 'multer'

import createCity from '../modules/addresses/useCases/createCity'
import importCities from '../modules/addresses/useCases/importCities'

const citiesRoutes = Router()

const upload = multer({ dest: './tmp' })

citiesRoutes.post('/', (request, response) => {
  const createCityController = createCity()
  return createCityController.handle(request, response)
})

citiesRoutes.post('/import', upload.single('file'), (request, response) => {
  const importCitiesController = importCities()
  return importCitiesController.handle(request, response)
})

export default citiesRoutes
