import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    App: process.env.APP_KEY,
  },
});

export default api;
