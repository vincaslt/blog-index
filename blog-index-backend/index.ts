import 'core-js'
import 'reflect-metadata'
import * as express from 'express'
import { useExpressServer, RoutingControllersOptions } from 'routing-controllers'
import { json } from 'body-parser'
import * as cors from 'cors'
import { dbconfig } from './dbconfig'
import { config } from './config'
import { createConnection } from 'typeorm'
import { logger } from './utils/logger'
import * as Controllers from './controllers'

const serverOptions: RoutingControllersOptions = {}
const app = express()

app.use(json())
app.use(cors())
app.use('/images', express.static(config.PHOTO_DEST))

logger.info('Initializing controllers')
serverOptions.controllers = Object.values(Controllers)

logger.info(`Connecting to database...`)
createConnection(dbconfig).then(() => {
  useExpressServer(app, serverOptions)
  app.listen(process.env.PORT, () => {
    logger.info(`Server listening on port ${process.env.PORT}!`)
  })
})