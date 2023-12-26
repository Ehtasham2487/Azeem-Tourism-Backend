import { Schema, model } from "mongoose";

const visaSchema = new Schema({
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  region: {
    type: String,
    enum: ["Pakistan", "UAE"]
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: String,
    required: false,
    maxlength: 15,
  },
  images: {
    type: [],
    required: false,
  },
  videos: {
    type: [],
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  duration: {
    type: Number,
    required: false,
  },
  active: {
    type: Boolean,
    required: false,
  },
});

export const Visa = model("visa", visaSchema);
