const mongoose = require ("mongoose");
const { Schema } = mongoose;

const PropertySchema = new Schema(
    {
        title: String,
        city: {
            type: Schema.Types.ObjectId,
            ref: 'cities'
        },
        zone: {
            type: Schema.Types.ObjectId,
            ref: 'zones'
        },
        propertyType: Number,
        businessType: Number,
        mainImage: String,
        images: [String],
        ownerId: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        value: Number,
        shortDescription: String,
        description: String,
        status: Number
    }, 
    { timestamps: true }
); 

const Property = mongoose.model("properties", PropertySchema);

module.exports = Property;