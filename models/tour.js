import { Schema, model } from "mongoose";
const tourSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    enum: ["Pakistan", "UAE" , "Both"],
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  images: {
    type: [],
    required: true,
  },
  videos: {
    type: [],
    required: false,
  },
  totalCount: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  milestone: {
    type: [{
      title: String,
      image: String,
    }],
    required: false,
  },
  isDiscounted: {
    type: Boolean,
    default: false,
  },
  Discount: {
    type: Number,
  },
});

export const Tour = model("tour", tourSchema);
