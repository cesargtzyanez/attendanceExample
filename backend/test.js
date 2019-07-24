const usersDb = require('./app/database/usersDB');

const usersTest = [
  {
    username: 'Karla',
    role: 'admin',
    email: 'karla@email',
    password: 'karlapwd'
  },
  {
    username: 'Leonardo',
    role: 'employee',
    email: 'leo@email',
    password: 'leopwd'
  },
  {
    username: 'Constanza',
    role: 'employee',
    email: 'constanza@email',
    password: 'constanzapwd'
  },
  {
    username: 'César',
    role: 'admin',
    email: 'cesar@email',
    password: 'cesarpwd'
  }
];
const test = function () {

  usersTest.forEach(function (user) {
    usersDb.insertUser(user).then(res => {
      if (res) console.log('User', res[0].username,'added!');
    }).catch(error => console.log('Error:', error));
  });

};

module.exports = test;
