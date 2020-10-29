var express = require('express');
var router = express.Router();
const people = require('../controllers/people.controller')




   // Create a new Person
   router.post('/people', people.create);

   // Retrieve all 
   router.get('/people', people.findAll);

   // Retrieve a single person with Id
   router.get('/people/:peopleId', people.findOne);

   // Update a Person with Id
   router.put('/people/:peopleId', people.update);

   // Delete a person with Id
   router.delete('/people/:peopleId', people.delete);
module.exports = router;
