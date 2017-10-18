import 'core-js'
import 'reflect-metadata'
import { createExpressServer } from 'routing-controllers'
import { json } from 'body-parser'
import * as Controllers from './controllers'

const app = createExpressServer({
  controllers: Object.values(Controllers)
})
app.use(json())

app.listen(process.env.PORT, () => {
  console.info(`Server listening on port ${process.env.PORT}!`)
})
