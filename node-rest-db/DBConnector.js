import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'flight_data',
    password: 'pgadmin',
    port: 5433,
});

// using pool api with callback
// NB: this is single query pool if we need something complex, like transaction handler, etc see https://node-postgres.com/features/transactions
const executeQuery = (query, args, callback) => pool.query(query, args, callback);

export default executeQuery;