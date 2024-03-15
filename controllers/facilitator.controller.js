import facilitatorSchema from "../models/facilitator.model.js";

const facilitatorController = {

    //add student
    createFacilitator: async (req, res) => {
        try {
            const addFacilitator = await facilitatorSchema.create(req.body);
            res.status(201).json({
                message: "facilitator added successfuly",
                student: addFacilitator
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
    getAllFacilitator: async (req, res) => {
        try {
            const getFacilitator = await facilitatorSchema.find();
            res.status(201).json({
                message: "list of facilitatores",
                student: getFacilitator
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

    getFacilitatorById: async (req, res) => {
        try {
            const getFacilitator = await facilitatorSchema.findById({ _id: req.params.id });
            res.status(201).json({
                message: "get facilitator by id successfuly",
                student: getFacilitator
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

    getFacilitatorByEmail: async (req, res) => {
        try {
            const getFacilitator = await facilitatorSchema.findOne({ email: req.params.email });
            res.status(201).json({
                message: "get facilitator by email successfuly",
                student: getFacilitator
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

    deleteFacilitator: async (req, res) => {
        try {
            const getFacilitator = await facilitatorSchema.findOneAndDelete({ _id: req.params.id });
            res.status(201).json({
                message: "facilitator deleted successfuly",
                student: getFacilitator
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

    updateFacilitatort: async (req, res) => {
        try {

            const updatedFacilitator = await facilitatorSchema.findByIdAndUpdate(req.params.id, req.body, { set: true })
            if (updatedFacilitator) {
                res.status(201).json({
                    message: "facilitator updated successfuly",
                    student: updatedFacilitator
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


export default facilitatorController;