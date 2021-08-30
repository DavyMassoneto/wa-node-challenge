import { Router } from 'express'

import statesRoutes from './states.routes'

const router = Router()

router.get('/', (request, response) => {
  return response.json('executing...')
})

router.use('/states', statesRoutes)

export default router
