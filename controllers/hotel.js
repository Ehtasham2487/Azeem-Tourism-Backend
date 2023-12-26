import * as hotelService from "../services/hotel.js";
import { handleError } from "../middleware/error.js";
import { handleResponse } from "../middleware/response.js";

export const getHotels = async (req, res, next) => {
  try {
    const data = await hotelService.getHotels();
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const createHotel = async (req, res, next) => {
  try {
    const response = await hotelService.createHotel(req.body);
    handleResponse(res, 200, response);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const updateHotelById = async (req, res, next) => {
  try {
    const response = await hotelService.updateHotelById(
      req.params.hotelId,
      req.body,
    );
    handleResponse(res, 200, response);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getHotelById = async (req, res, next) => {
  try {
    const response = await hotelService.getHotelById(req.params.hotelId);
    handleResponse(res, 200, response);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const deleteHotelById = async (req, res, next) => {
  try {
    const response = await hotelService.deleteHotelById(req.params.hotelId);
    handleResponse(res, 200, response);
  } catch (error) {
    handleError(error, res, next);
  }
};
