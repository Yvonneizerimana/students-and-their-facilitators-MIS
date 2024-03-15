import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    nationalId: {
        type: String,
        required: true,
        require: true
    },
    gender: {
        type: String,
        required: true,
        enum: {
            values: ["Male", "Female"],
            message: "gender must be either Male or Female"
        }
    }
})

const student = mongoose.model("studentList", studentSchema);
export default student;