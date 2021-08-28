import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.json('executing...')
})

app.listen(3333)