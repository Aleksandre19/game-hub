import axios from "axios";
// import apiKey from "./api-key";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: process.env.REACT_APP_API_KEY,
  },
});
