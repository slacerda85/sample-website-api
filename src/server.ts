/* eslint-disable import/no-duplicates */
import express, { Request, Response } from 'express'
import routes from './routes'

const app = express()

const port = 3001

app.use(routes)
app.get('/', (request: Request, response: Response) => {
  response.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
