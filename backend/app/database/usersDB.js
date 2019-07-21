const DB = require('./index');
const tableName = 'users';

class UsersDB {
  static getAllUsers() {
    return DB.getAll(tableName);
  }

  static getAdmins() {
    return DB.getBy(tableName,'role','admin');
  }

  static getEmployees() {
    return DB.getBy(tableName,'role','employee');
  }

  static insertUser(valuesObj) {
    return DB.insertItem(tableName,valuesObj);
  }
}

module.exports = UsersDB;