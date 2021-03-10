import express, { Request, Response } from 'express'

// Classes com maiusculo
import EmpresaController from './controllers/EmpresaController'

import modeloDeNegocios from './data/modeloDeNegocios.json'
import sustentabilidade from './data/sustentabilidade.json'
import nossaHistoria from './data/nossaHistoria.json'

const getModeloDeNegocios = (request: Request, response: Response) => {
  response.json(modeloDeNegocios)
}

const getSustentabilidade = (request: Request, response: Response) => {
  response.json(sustentabilidade)
}

const getNossaHistoria = (request: Request, response: Response) => {
  response.json(nossaHistoria)
}

const routes = express.Router()

// objetos da classe com letra minuscula
// const empresaController = new EmpresaController()


routes.get('/a-empresa/modelo-de-negocios', getModeloDeNegocios)
routes.get('/a-empresa/sustentabilidade', getSustentabilidade)
routes.get('/a-empresa/nossa-historia', getNossaHistoria)
// routes.post('/a-empresa', )
// routes.put('/a-empresa/:page_name', )
// routes.delete('/a-empresa/:page_name', )

/* routes.get()
routes.post()
routes.put()
routes.delete()

routes.get()
routes.post()
routes.put()
routes.delete()

routes.get()
routes.post()
routes.put()
routes.delete()

routes.get()
routes.post()
routes.put()
routes.delete()

routes.get()
routes.post()
routes.put()
routes.delete() */


export default routes
