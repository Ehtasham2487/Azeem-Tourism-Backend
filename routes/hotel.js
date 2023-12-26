import express from "express";
import {
  getHotelById,
  getHotels,
  createHotel,
  updateHotelById,
  deleteHotelById,
} from "../controllers/hotel.js";

const router = express.Router();

router.get("/get", getHotels);
router.post("/create", createHotel);
router.get("/get/:hotelId", getHotelById);
router.post("/update/:hotelId", updateHotelById);
router.delete("/delete/:hotelId", deleteHotelById);

export { router as hotelRouter };
