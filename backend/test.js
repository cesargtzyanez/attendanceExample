const usersDb = require('./app/database/usersDB');

const userTest = {
  username: 'cesar test',
  role: 'employee',
  email: 'cesarmail',
  password: 'cesar'
};
const test = function() {
  usersDb.insertUser(userTest).then(res => {
    console.log('ADDED!');
  }).catch(error => console.log('valio server', error));
};

module.exports = test;
