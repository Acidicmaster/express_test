var express = require('express');
var router = express.Router();
const User = require('../model/user');
let {post_auth,get_auth,post_login} = require('../controllers/auth.controller');


router.post('/register',post_auth);
router.get('/register',get_auth);
router.post('/login',post_login);

module.exports = router;
