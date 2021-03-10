/* eslint-disable import/no-duplicates */

import express, { Request, Response } from 'express'

const app = express()

const port = 3000

app.get('/', (request: Request, response: Response) => {
  response.send('Server running!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
