import { Visa } from "../models/visa.js";

export const getVisas = async () => {
  const response = await Visa.find({});
  if (!response) throw new Error("Visas could not be found");
  return response;
};

export const createVisa = async (visa) => {
  if (!visa) throw new Error(`Visa Details empty: ${visa}`);
  const response = await Visa.create(visa);
  if (!response) throw new Error("Visa could not be created");
  return response;
};

export const updateVisaById = async (visaId, visa) => {
  if (!visaId || !visa)
    throw new Error(`Visa Id empty: ${visaId} or Visa Details empty: ${visa}`);
  const response = await Visa.findOneAndUpdate({ _id: visaId }, visa, {
    upsert: true,
    returnOriginal: false,
  });
  if (!response) throw new Error("Visa could not be updated");
  return response;
};

export const getVisaById = async (visaId) => {
  if (!visaId) throw new Error(`Visa Id empty: ${visaId}`);
  const response = await Visa.findById(visaId);
  if (!response) throw new Error("Visa could not be found");
  return response;
};

export const deleteVisaById = async (visaId) => {
  if (!visaId) throw new Error(`Visa Id empty: ${visaId}`);
  const response = await Visa.findByIdAndDelete(visaId);
  if (!response) throw new Error("Visa could not be deleted");
  return response;
};
