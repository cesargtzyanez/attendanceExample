const { Pool } = require('pg');

const config = {
  user: 'node_user',
  host: 'localhost',
  database: 'attendancedb',
  port: '5432'
};
const pool = new Pool(config);

class DB {

  static getAll(table) {
    const query = `SELECT * FROM ${table}`;
    return new Promise((resolve, reject) => {
      pool.query(
          query,
          [],
          (error, res) => {
            if (error) return reject(error);
            resolve(res.rows);
          }
      );
    });
  }

  static getBy(table,column,value) {
    const query = `SELECT * FROM ${table} WHERE ${column} = '${value}'`;
    return new Promise((resolve, reject) => {
      pool.query(
          query,
          [],
          (error, res) => {
            if (error) return reject(error);
            resolve(res.rows);
          }
      );
    });
  }

  static insertItem(table, params) {
    const valuesIndexes = Object.keys(params).map((param,index) => '$'+(index + 1) ).toString();
    const columns = Object.keys(params).toString();
    const values = Object.values(params);
    const query = `INSERT INTO ${table}(${columns}) VALUES (${valuesIndexes}) RETURNING *`;

    return new Promise((resolve, reject) => {
      pool.query(
          query,
          values,
          (error, res) => {
            if (error) return reject(error);
            resolve(res.rows);
          }
      );
    });
  }

}

module.exports = DB;
