const mongoose = require ("mongoose");
const { Schema } = mongoose;

const ZoneSchema = new Schema(
    {
        code: Number,
        name: String,
        cityId: {
            type: Schema.Types.ObjectId,
            ref: 'cities'
        },
    }
);

const Zone = mongoose.model("zones", ZoneSchema);

module.exports = Zone;