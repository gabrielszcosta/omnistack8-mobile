import axios from "axios";

const api = axios.create({
  baseURL: "https://deumatch-api.herokuapp.com"
});

export default api;
