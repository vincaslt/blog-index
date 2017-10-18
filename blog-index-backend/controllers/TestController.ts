import {
  JsonController,
  Get
} from 'routing-controllers'
import {  } from 'typeorm'

@JsonController()
export class TestController {

  @Get('/test')
  public test() {
    return { hi: 'dude' }
  }
}