const DB = require('./index');
const bcrypt = require('bcrypt');
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

  static insertUser(user) {
    const rounds = 10;
    const hash = bcrypt.hashSync(user.password, rounds);
    return DB.insertItem(tableName,{...user,password: hash});
  }
}

module.exports = UsersDB;