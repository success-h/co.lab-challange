import axios from "axios";
const api = axios.create({
  baseURL: "https://naeme-backend.vercel.app/api",
});

export default api;
