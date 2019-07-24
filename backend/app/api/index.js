const {Router} = require('express');
const bcrypt = require('bcrypt');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
const userDB = require('../database/usersDB');

const router = new Router();

router.post('/login',function (req,resp) {
  console.log('REQUEST:', req.body);

});

router.post('/signin', function(req, res) {
  console.log('REQUEST HERE:', req.body);
  userDB.getUserByEmail(req.body.username).then((resp) => {
        if (!resp.length) {
          return res.status(401).send({
            message: 'Authentication failed. User not found.',
          });
        }

        console.log('USER: ', resp[0]);
        console.log('PW: ', req.body.password);

        //const resPw = bcrypt.compareSync(req.body.password, resp[0].password);
        //console.log('PW:', resPw);

        /*if (resPw) {
          res.json({success: true, token: 'JWT '});
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }*/

        bcrypt.compare(req.body.password, resp[0].password).then(resPw => {
            if (resPw) {
              res.json({success: true, token: 'JWT!! '});
            } else {
              res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
            }
        });
      })
      .catch((error) => {
        console.log('wrong', error);
        res.status(400).send(error)
      });
});

module.exports = router;


