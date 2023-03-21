const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    regNo: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
},{timestamps: true});

module.exports = mongoose.model('User', userSchema);