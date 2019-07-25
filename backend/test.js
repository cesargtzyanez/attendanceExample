const usersDb = require('./app/database/usersDB');
const reportsDB = require('./app/database/reportsDB');

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

const reportsTest = [
  {
    reportDate: Date.now(),
    reportType: 'Attendance',
    userId: 1
  }
];

const test = function () {

  usersTest.forEach(function (user) {
    usersDb.createUser(user).then(res => {
      if (res) console.log('User', res[0].username,'added!');

      const report = {
        reportDate: new Date(),
        reportType: 'Attendance',
        userId: res[0].id
      };

      reportsDB.createReport(report)
          .then(resp => console.log('Report created'))
          .catch(error => console.log('Error creating report: ', error));

    }).catch(error => console.log('Error:', error));
  });


};

module.exports = test;
