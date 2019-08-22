/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import { Pool } from 'pg';
import debug from 'debug';
import dotenv from 'dotenv';

dotenv.config();

// eslint-disable-next-line no-unused-vars
class Model {
  constructor(table) {
    this.table = table;
    this.pool = new Pool();

    this.pool.on('error', (err, client) => {
      Model.logger('Unexpected error on idle client', err);
      process.exit(-1);
    });
  }

  static logger(message) {
    return debug('dev')(message);
  }

  async select(columns, clause = '') {
    const query = `SELECT ${columns} FROM ${this.table} ${clause}`;
    Model.logger(`Our SELECT query is: ${query}`);
    const data = await this.pool.query(query);
    return data.rows;
  }

  async insert(columns, values) {
    const query = `INSERT INTO ${this.table} (${columns}) VALUES (${values})`;
    Model.logger(`Our INSERT query is: ${query}`);
    const data = await this.pool.query(query);
    return data.rows;
  }
}// End Class

export default Model;
