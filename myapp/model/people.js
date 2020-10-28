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
    Age : {
        type : Number,
        required : true,
        max : 3
    },
    emplomentStatus: {
        type: String,
        enum : ['employed', 'self-employed','unemployed','student'],
        default: 'employed'
    },
    email : {
        type : String,
        required : true,
        max : 240
    },
   
   
}, {
    timestamps: true
});

module.exports = mongoose.model('People', PeopleSchema);
