const {Router} = require('express');
const bcrypt = require('bcrypt');
const userDB = require('../database/usersDB');

const router = new Router();

router.post('/login', function (req, res) {
  console.log('REQUEST HERE:', req.body);
  userDB.getUserByEmail(req.body.email)
      .then((resp) => {
        console.log('User found:',resp);
        if (!resp.length) {
          return res.status(401).send({
            message: 'Authentication failed. User not found.',
          });
        }

        bcrypt.compare(req.body.password, resp[0].password).then(resPw => {
          if (resPw) {
            res.json({success: true});
          } else {
            res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
          }
        });
      })
      .catch((error) => {
        console.log('Error:', error);
        res.status(400).send(error)
      });
});

module.exports = router;


