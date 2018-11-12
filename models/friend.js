const mongoose = require('mongoose');


const friendSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    gender: String,
    language: String,
    email: String,
    age: Number,
    contacts: [{firstName: String, lastName: String}]
});

export default mongoose.model('Friend', friendSchema);
