import axios from "axios";
import { API_URL } from "../constants/config.js";

export const api = axios.create({
  baseURL: API_URL,
});