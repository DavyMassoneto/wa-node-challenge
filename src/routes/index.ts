import { Router } from 'express'

import citiesRoutes from './cities.routes'
import statesRoutes from './states.routes'

const router = Router()

router.get('/', (request, response) => {
  return response.json('executing...')
})

router.use('/states', statesRoutes)
router.use('/cities', citiesRoutes)

export default router
