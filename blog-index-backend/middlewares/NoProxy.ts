import { ExpressMiddlewareInterface, BadRequestError } from 'routing-controllers'
import { Request, Response } from 'express'

export class NoProxy implements ExpressMiddlewareInterface {

  public use(request: Request, response: Response, next: () => void ) {
    if (request.headers['x-forwarded-for']) {
      response.send(new BadRequestError('Proxied request is not accepted'))
    } else {
      next()
    }
  }

}