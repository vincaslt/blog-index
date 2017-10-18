import {
  JsonController,
  Get
} from 'routing-controllers'

@JsonController()
export class TestController {

  @Get('/test')
  public test() {
    return { hi: 'dude' }
  }
}