import mongoose from 'mongoose';
const { Schema } = mongoose;

const EventsSchema = new Schema ({
    title : String,
    description: String,
    startTime: String,
    ensTime: String,
    location:{
        longitude: Number,
        latitude: Number,
    },
    address: String,
    createdBy: {type: mongoose.Types.ObjectId, ref:"Users"},
    going: {type: mongoose.Types.ObjectId, ref:"Users"},

});

export const EventModal = mongoose.model("Events", EventsSchema);