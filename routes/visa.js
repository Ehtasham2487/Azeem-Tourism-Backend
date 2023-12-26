import express from "express";
import {
  getVisaById,
  getVisas,
  createVisa,
  updateVisaById,
  deleteVisaById,
} from "../controllers/visa.js";

const router = express.Router();

router.get("/get", getVisas);
router.post("/create", createVisa);
router.get("/get/:visaId", getVisaById);
router.post("/update/:visaId", updateVisaById);
router.delete("/delete/:visaId", deleteVisaById);

export { router as visaRouter };
