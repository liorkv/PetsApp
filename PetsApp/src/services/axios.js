import axios from "axios";

const BASE_URL = "http://localhost:5299/api";

export default axios.create({
  baseURL: BASE_URL,
});
