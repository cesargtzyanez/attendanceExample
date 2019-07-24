const DB = require('./index');
const bcrypt = require('bcrypt');
const tableName = 'users';

class UsersDB {
  static getAllUsers() {
    return DB.getAll(tableName);
  }

  static getUserByEmail(email) {
    return DB.getBy(tableName,'email',email);
  }

  static getAdmins() {
    return DB.getBy(tableName,'role','admin');
  }

  static getEmployees() {
    return DB.getBy(tableName,'role','employee');
  }

  static createUser(user) {
    return this.getUserByEmail(user.email)
        .then((resp)=>{
          if (!resp.length) {
            const rounds = 10;
            const hash = bcrypt.hashSync(user.password, rounds);
            return DB.insertItem(tableName,{...user,password: hash});
          } else {
            return console.log('Error: There is already a user with the email:', user.email);
          }

        }).catch(error=> console.log('Error Inserting User:', error));
  }
}

module.exports = UsersDB;