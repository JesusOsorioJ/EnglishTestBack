const mongoose = require('mongoose');

const titlesEvaluationModel = new mongoose.Schema(
    {
        subtitle: {
            type: String,  
        },
        result: {
        },
    },
    { timestamps: true },
    { versionKey: false }
);

module.exports = mongoose.model('titlesEvaluation', titlesEvaluationModel);