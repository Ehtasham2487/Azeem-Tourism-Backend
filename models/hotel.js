import { Schema, model } from "mongoose";

const hotelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: false,
  },
  rating: {
    type: Number,
    required: false,
  },
  region: {
    type: String,
    enum: ["Pakistan", "UAE"]
  },
  amenities: [String],
  images: {
    type: [],
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export const Hotel = model("hotel", hotelSchema);
