import express from "express";
import {
  getTourById,
  getTours,
  createTour,
  updateTourById,
  deleteTourById,
} from "../controllers/tour.js";
const router = express.Router();

router.get("/get", getTours);
router.post("/create", createTour);
router.get("/get/:tourId", getTourById);
router.post("/update/:tourId", updateTourById);
router.delete("/delete/:tourId", deleteTourById);

export { router as tourRouter };
