const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb+srv://ranjeet:gupta@cluster0.6ecgrbz.mongodb.net/blogs?retryWrites=true&w=majority');

module.exports = connection;