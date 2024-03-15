import studentSchema from "../models/student.model.js";

const studentController = {

    //add student
    createStudent: async (req, res) => {
        try {
            const addStudent = await studentSchema.create(req.body);
            res.status(201).json({
                message: "student added successfuly",
                student: addStudent
            })
        }
        catch (error) {
            console.error(error.message);
            res.status(500).json({
                message: "internal server error"
            })
        }
    },

    //get all student
    getAllStudents: async (req, res) => {
        try {
            const getStudents = await studentSchema.find();
            res.status(201).json({
                message: "list of students",
                student: getStudents
            })
        }
        catch (error) {
            console.error(error.message);
            res.status(500).json({
                message: "internal server error"
            })
        }
    },

    //get by id

    getStudentsById: async (req, res) => {
        try {
            const getStudents = await studentSchema.findById({ _id: req.params.id });
            res.status(201).json({
                message: "get student successfuly",
                student: getStudents
            })
        }
        catch (error) {
            console.error(error.message);
            res.status(500).json({
                message: "internal server error"
            })
        }
    },

    //get by email

    getStudentsByEmail: async (req, res) => {
        try {
            const getStudents = await studentSchema.findOne({ email: req.params.email });
            res.status(201).json({
                message: "get student by email successfuly",
                student: getStudents
            })
        }
        catch (error) {
            console.error(error.message);
            res.status(500).json({
                message: "internal server error"
            })
        }
    },

    //delete

    deleteStudent: async (req, res) => {
        try {
            const getStudents = await studentSchema.findOneAndDelete({ _id: req.params.id });
            res.status(201).json({
                message: "deleted successfuly",
                student: getStudents
            })
        }
        catch (error) {
            console.error(error.message);
            res.status(500).json({
                message: "internal server error"
            })
        }
    },

    //update student

    updateStudent: async (req, res) => {
        try {

            const updatedStudent = await studentSchema.findByIdAndUpdate(req.params.id, req.body, { set: true })
            if (updatedStudent) {
                res.status(201).json({
                    message: "student updated successfuly",
                    student: updatedStudent
                })
            }
            else {
                res.status(404).json({
                    message: "Student not found"
                })
            }
        }
        catch (error) {
            console.error(error.message);
            res.status(500).json({
                message: "internal server error"
            })
        }
    },


}


export default studentController;