import mongoose from 'mongoose';
const { Schema } = mongoose;

const CategorySchema = new Schema ({
    title : String,
    description: String,
    thumbnail: String,

});

export const CategoryModal = mongoose.model("Categories", CategorySchema);