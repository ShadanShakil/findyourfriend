import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema ({
    fullname : String,
    email: String,
    password: String,
    location:{
        longitude: Number,
        latitude: Number,
    },
    profileImg: String,
    address: String,
    bio: String,
});

export const UserModel = mongoose.models.Users || mongoose.model('Users', UserSchema);