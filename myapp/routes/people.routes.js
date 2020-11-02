var express = require('express');
var router = express.Router();
let {create,findAll,findOne,update,deletes} = require('../controllers/people.controller')




   // Create a new Person
   router.post('/people', create);

   // Retrieve all 
   router.get('/people', findAll);

   // Retrieve a single person with Id
   router.get('/people/:Id', findOne);

   // Update a Person with Id
   router.put('/people/:Id',update);

   // Delete a person with Id
  router.delete('/people/:Id', deletes);
module.exports = router;
