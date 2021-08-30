import { join } from 'path'
import { ConnectionOptions, createConnection } from 'typeorm'

const baseDir = join(__dirname, '..')
const entities = join(baseDir, '**', '**', '**', '*.js')
const migrations = join(baseDir, '**', 'migrations', '*.js')

function createTypeOrmOptions(): ConnectionOptions {
  return {
    type: 'postgres',
    host: 'wa_challenge_postgresql',
    database: process.env.TYPEORM_DATABASE,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    logging: process.env.TYPEORM_LOGGING === 'TRUE',
    entities: [entities],
    migrations: [migrations],
    migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === 'TRUE',
    cli: {
      migrationsDir: migrations,
      entitiesDir: entities,
    },
    synchronize: false,
  }
}

createConnection(createTypeOrmOptions())
