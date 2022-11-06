import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    App: process.env.APP_KEY,
  },
});

export default api;
