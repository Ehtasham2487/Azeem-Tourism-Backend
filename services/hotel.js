import { Hotel } from "../models/hotel.js";

export const getHotels = async () => {
  const response = await Hotel.find({});
  if (!response) throw new Error("Hotels could not be found");
  return response;
};

export const createHotel = async (hotel) => {
  if (!hotel) throw new Error(`Hotel Details empty: ${hotel}`);
  const response = await Hotel.create(hotel);
  if (!response) throw new Error("Hotel could not be created");
  return response;
};

export const updateHotelById = async (hotelId, hotel) => {
  if (!hotelId || !hotel)
    throw new Error(
      `Hotel Id empty: ${hotelId} or Hotel Details empty: ${hotel}`,
    );
  const response = await Hotel.findOneAndUpdate({ _id: hotelId }, hotel, {
    upsert: true,
    returnOriginal: false,
  });
  if (!response) throw new Error("Hotel could not be updated");
  return response;
};

export const getHotelById = async (hotelId) => {
  if (!hotelId) throw new Error(`Hotel Id empty: ${hotelId}`);
  const response = await Hotel.findById(hotelId);
  if (!response) throw new Error("Hotel could not be found");
  return response;
};

export const deleteHotelById = async (hotelId) => {
  if (!hotelId) throw new Error(`Hotel Id empty: ${hotelId}`);
  const response = await Hotel.findByIdAndDelete(hotelId);
  if (!response) throw new Error("Hotel could not be deleted");
  return response;
};
