const mongoose = require('mongoose');

const titleModel = new mongoose.Schema(
    {
        name: {
            type: String,  
        },
        email: {
            type: String,  
        },
    },
    { timestamps: true },
    { versionKey: false }
);

module.exports = mongoose.model('title', titleModel);