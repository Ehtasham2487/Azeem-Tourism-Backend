import { Schema, model, mongoose } from "mongoose";
const orderSchema = new Schema({
  orderType: {
    type: String,
    enum: ["package", "tour", "ticket", "visa", "hotel"],
    required: true,
  },
  objectService: {
    type: mongoose.Types.ObjectId,
    required: true,
    refPath: "orderType",
  },
  fullName: {
    type: String,
    required: true,
  },
  tourName: {
    type: String,
    required: false,
  },
  tourDate: {
    type: Date,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  totalPersons: {
    type: Number,
    required: true,
  },
  pickupTime: {
    type: String,
    required: false,
  },
  pickupLocation: {
    type: String,
    required: false,
  },
  stripeSessionId: {
    // NOT USED FOR FRONT_END
    type: String,
    required: true,
  },
  payment: {
    type: Number,
    required: true,
  },
});

export const Order = model("order", orderSchema);
