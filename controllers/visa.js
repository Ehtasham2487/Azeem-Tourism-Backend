import * as visaService from "../services/visa.js";
import { handleError } from "../middleware/error.js";
import { handleResponse } from "../middleware/response.js";

export const getVisas = async (req, res, next) => {
  try {
    const data = await visaService.getVisas();
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const createVisa = async (req, res, next) => {
  try {
    const data = await visaService.createVisa(req.body);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const updateVisaById = async (req, res, next) => {
  try {
    const data = await visaService.updateVisaById(req.params.visaId, req.body);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getVisaById = async (req, res, next) => {
  try {
    const data = await visaService.getVisaById(req.params.visaId);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const deleteVisaById = async (req, res, next) => {
  try {
    const data = await visaService.deleteVisaById(req.params.visaId);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};
