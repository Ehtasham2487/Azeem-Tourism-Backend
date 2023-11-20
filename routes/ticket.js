import express from "express";
import {
  getTicketById,
  getTickets,
  createTicket,
  updateTicketById,
  deleteTicketById,
} from "../controllers/ticket.js";
const router = express.Router();

router.get("/get", getTickets);
router.post("/create", createTicket);
router.get("/get/:ticketId", getTicketById);
router.post("/update/:ticketId", updateTicketById);
router.delete("/delete/:ticketId", deleteTicketById);

export { router as ticketRouter };
