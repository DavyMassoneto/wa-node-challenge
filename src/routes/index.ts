import { Router } from 'express'

const router = Router()

router.get('/', (request, response) => {
  return response.json('executing...')
})

export default router
