import { Request, Response, NextFunction } from 'express'

class EmpresaController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const data = request.body

      return response.send()
    } catch (error) {
      next(error)
    }
  }

  async show(request: Request, response: Response, next: NextFunction) {
    try {
      const page_name = request.params
      

      return response.json()

    } catch (error) {
      
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {}

  async delete(request: Request, response: Response, next: NextFunction) {}
}

export default EmpresaController
