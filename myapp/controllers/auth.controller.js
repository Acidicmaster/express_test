const User = require('../model/user');
const bcrypt = require('bcryptjs');
//const jwt = require('jsonwebtoken');
let {registerValidation,loginValidation} = require('../controllers/infastructure/validation');



exports.post_auth = async function(req, res) {

  // Validating data
  const {error} = registerValidation(req.body);
  if(error) return res.status(400).send("error occured from the inputs");

  // Checking if user is already in the database?
  var emailCheck = await User.findOne({email : req.body.email});
  if (emailCheck)return res.status(400).send("Email already exist ");

  //Hashing password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password,salt);
  
      const user = new User({
        name : req.body.name,
        email : req.body.email,
        password : hashedPassword
    }); try{
      const savedUser = await user.save();
      res.send({user: user.name, email : user.email});
    }
    catch(err){
      res.status(400).send(err);

    }
};

exports.get_auth = function(req, res) {
    res.send("ok");
  };

  exports.post_login = async (req,res)=>{
    // Validating data
  const {error} = loginValidation(req.body);
  if(error) return res.status(400).send("error occured from the inputs");

  // Checking if user is already in the database?
  var user = await User.findOne({email : req.body.email});
  if (!user)return res.status(400).send("Email or password is Incorrect ");
  
  // validate password
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)return res.status(400).send("password is Incorrect ");

  res.send("log in is successfull");

  // create and assign token
  //const token = jwt.sign({_id : user.id}, process.env.TOKEN_SECRET);
 // res.header('auth-token',token).send(token);


  };