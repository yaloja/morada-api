const mongoose = require ("mongoose");
const { Schema } = mongoose;

const CitySchema = new Schema(
    {
        code: Number,
        name: String
    }
);

const City = mongoose.model("cities", CitySchema);

module.exports = City;