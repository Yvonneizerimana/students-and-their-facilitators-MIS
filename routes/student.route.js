import studentController from "../controllers/student.controller.js";
import express from "express";
const router = express.Router();


router.post("/student/addStudents", studentController.createStudent);
router.get("/student/getAllStudents", studentController.getAllStudents);
router.get("/student/getStudentsById/:id", studentController.getStudentsById);
router.get("/student/getStudentsByEmail/:email", studentController.getStudentsByEmail);
router.delete("/student/deleteStudent/:id", studentController.deleteStudent);
router.put("/student/updateStudent/:id", studentController.updateStudent);

export default router;