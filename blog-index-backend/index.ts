import 'core-js'
import 'reflect-metadata'
import { createExpressServer } from 'routing-controllers'
import { json } from 'body-parser'
import { dbconfig } from './dbconfig'
import { createConnection } from 'typeorm'
import { logger } from './utils/logger'
import * as Controllers from './controllers'

const app = createExpressServer({
  controllers: Object.values(Controllers)
})
app.use(json())

logger.info(`Connecting to database...`)
createConnection(dbconfig).then(() => {
  app.listen(process.env.PORT, () => {
    logger.info(`Server listening on port ${process.env.PORT}!`)
  })
})