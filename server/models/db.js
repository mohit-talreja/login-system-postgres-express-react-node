const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'tanaya@98',
    port: 5432,
    database: 'users_cred_db',
    max: 25,
    connectionTimeoutMillis: 10000,
    idleTimeoutMillis: 10000
})

module.exports = pool