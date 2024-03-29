import mongoose from "mongoose";

const facilitatorSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    nationalId: {
        type: String,
        required: true,
        unique: true,
        length: 16
    },
    courses: [
        {
            type: String,
            required: true
        }
    ],
    role: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

const facilitator = mongoose.model('facilitatorList', facilitatorSchema);
export default facilitator;