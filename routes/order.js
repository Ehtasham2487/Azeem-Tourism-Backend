import express from "express";
import {
  getOrderById,
  getOrders,
  createOrder,
  updateOrderById,
  deleteOrderById,
} from "../controllers/order.js";
import { emailUser } from "../controllers/mailUser.js";
const router = express.Router();

router.get("/get", getOrders);
router.post("/mail/:email", emailUser);
router.post("/create", createOrder);
router.get("/:orderId", getOrderById);
router.post("/:orderId", updateOrderById);
router.delete("/:orderId", deleteOrderById);

export { router as orderRouter };
