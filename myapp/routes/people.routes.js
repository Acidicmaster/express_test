var express = require('express');
var router = express.Router();
let {create,findAll,findOne,update} = require('../controllers/people.controller')




   // Create a new Person
   router.post('/people', create);

   // Retrieve all 
   router.get('/people', findAll);

   // Retrieve a single person with Id
   router.get('/people/:peopleId', findOne);

   // Update a Person with Id
   router.put('/people/:peopleId',update);

   // Delete a person with Id
  // router.delete('/people/:peopleId', delete);
module.exports = router;
