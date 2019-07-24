const {Router} = require('express');
const userDB = require('../database/usersDB');


const router = new Router();

router.get('/users', (req, res) => {
  userDB.getAllUsers()
      .then(response => {
        res.json(response)
      })
      .catch(error => {
        console.log(error);
        res.json(error);
      })
});

router.get('/admins', (req, res) => {
  userDB.getAdmins()
      .then(response => {
        res.json(response)
      })
      .catch(error => {
        console.log(error);
        res.json(error);
      })
});

router.get('/employees', (req, res) => {
  userDB.getEmployees()
      .then(response => {
        res.json(response)
      })
      .catch(error => {
        console.log(error);
        res.json(error);
      })
});

module.exports = router;
