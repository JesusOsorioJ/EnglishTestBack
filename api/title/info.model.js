const mongoose = require('mongoose');

const infotestModel = new mongoose.Schema(
    {
        subtitle: {
            type: String,  
        },
    },
    { timestamps: true },
    { versionKey: false }
);

module.exports = mongoose.model('infotest', infotestModel);