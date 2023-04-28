import axios from "axios";
const { NEXT_PUBLIC_SERVER_URL } = process.env;
const api = axios.create({
  baseURL: `${NEXT_PUBLIC_SERVER_URL}`,
});

export default api;
