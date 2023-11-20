import dotenv from "dotenv";
import Stripe from "stripe";
dotenv.config();
let API_URL, stripe;
if(process.env.NODE_ENV !== 'production'){  
  API_URL = dotenv.config()?.parsed?.API_URL ?? "NO-API-URL";
  stripe = new Stripe(dotenv.config()?.parsed?.SECRET_STRIPE, {
    apiVersion: "2023-08-16",
  });
}
else {
  API_URL = process.env.API_URL;
  stripe = new Stripe(process.env.SECRET_STRIPE, {
    apiVersion: "2023-08-16",
  });  
}
export { API_URL, stripe };