import * as pino from 'pino'

const pretty = pino.pretty()
pretty.pipe(process.stdout)

export const logger = pino({
  name: 'app',
  safe: true
}, pretty)