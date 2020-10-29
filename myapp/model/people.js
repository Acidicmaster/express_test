const mongoose = require('mongoose');

const PeopleSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        min : 6
    },
    occupation : {
        type : String,
        required : true,
        min : 6
    },
    age : {
        type : Number,
        required : true,
        max : 150
    },
    employmentStatus: {
        type: String,
        enum : ['employed', 'self-employed','unemployed','student'],
        default: 'employed'
    },
    citizen : {
        type : Boolean
    },
    gender: {
        type: String,
        enum : ['male', 'female'],
        default: 'male'
    },
   
   
}, {
    timestamps: true
});

module.exports = mongoose.model('People', PeopleSchema);
