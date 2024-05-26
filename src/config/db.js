import knex from 'knex'
import knexConfig from '../../knexfile.js'

const prodMode = process.env.NODE_ENV === 'production'

const db = knex(prodMode ? knexConfig.production : knexConfig.development)

export default db
