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
    Person.find()
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
    Person.findById(req.params.Id)
    .then(person => {
        if(!person) {
            return res.status(404).send({
                message: "person not found with id " + req.params.Id
            });            
        }
        res.send(person);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "person not found with id " + req.params.Id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving person with id " + req.params.Id
        });
    });

};

// Update a person identified by the Id in the request
exports.update = (req, res) => {
// Validate Request
if(!req.body) {
    return res.status(400).send({
        message: "Data content can not be empty"
    });
}

// Find Person and update it with the request body
Person.findByIdAndUpdate(req.params.Id, {
    name : req.body.name,
    occupation : req.body.occupation,
    age : req.body.age,
    employmentStatus : req.body.employmentStatus,
    citizen : req.body.citizen,
    gender : req.body.gender
   
}, {new: true})
.then(person => {
    if(!person) {
        return res.status(404).send({
            message: "Person not found with id " + req.params.Id
        });
    }
    res.send(person);
}).catch(err => {
    if(err.kind === 'ObjectId') {
        return res.status(404).send({
            message: "Person not found with id " + req.params.Id
        });                
    }
    return res.status(500).send({
        message: "Error updating Person with id " + req.params.Id
    });
});

};

// Delete a person with the specified noteId in the request
exports.delete = (req, res) => {

};