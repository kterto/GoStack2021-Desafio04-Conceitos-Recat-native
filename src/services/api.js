import axios from "axios";

const api = axios.create({
  baseURL: "http://8825c1499098.ngrok.io",
});

export default api;
