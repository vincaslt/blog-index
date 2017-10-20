import { ConnectionOptions } from 'typeorm'
import * as Entities from './entities'

export const dbconfig: ConnectionOptions = {
  synchronize: true,
  database: process.env.DB_NAME || 'blog_app',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'root',
  port: parseInt(process.env.DP_PORT || '3306', 10),
  type: 'mysql',
  entities: Object.values(Entities)
}