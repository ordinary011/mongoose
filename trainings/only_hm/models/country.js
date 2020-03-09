const mongoose = require('mongoose');

let CountrySchema = new mongoose.Schema({
    country: String,
    population: Number,
    nuclear: Boolean,
    area: Number,
    militaries: Number
});


let CountryModel = mongoose.model('country', CountrySchema);

module.exports = CountryModel;










