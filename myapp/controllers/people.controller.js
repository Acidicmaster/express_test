const Person = require('../model/people');

// Create and Save a new Person
exports.create = async  (req, res) => {
  // Validate request
  if(!req.body) {
    return res.status(400).send({
        message: "Data content can not be empty"
    });
}

// Create a new person
const person = new Person({
    name : req.body.name,
    occupation : req.body.occupation,
    age : req.body.age,
    employmentStatus : req.body.employmentStatus,
    citizen : req.body.citizen,
    gender : req.body.gender
});

// Save in the database
 await person.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Person."
        });
    });
};

// Retrieve and return all  from the database.
exports.findAll = (req, res) => {
    People.find()
    .then(person => {
        res.send(person).sort(['updatedAt', 1])
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving People."
        });
    });

};

// Find a single person with a Id
exports.findOne = (req, res) => {

};

// Update a person identified by the Id in the request
exports.update = (req, res) => {

};

// Delete a person with the specified noteId in the request
exports.delete = (req, res) => {

};