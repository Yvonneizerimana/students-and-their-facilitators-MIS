import facilitatorController from "../controllers/facilitator.controller.js";
import express from "express";
const router2 = express.Router();


router2.post("/facilitator/addFacilitator", facilitatorController.createFacilitator);
router2.get("/facilitator/getAllFacilitator", facilitatorController.getAllFacilitator);
router2.get("/facilitator/getFacilitatorById/:id", facilitatorController.getFacilitatorById);
router2.get("/facilitator/getFacilitatorByEmail/:email", facilitatorController.getFacilitatorByEmail);
router2.delete("/facilitator/deleteFacilitator/:id", facilitatorController.deleteFacilitator);
router2.put("/facilitator/updateFacilitator/:id", facilitatorController.updateFacilitatort);

export default router2;