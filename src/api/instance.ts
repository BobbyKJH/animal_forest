import axios from "axios";

const instance = axios.create({
  baseURL: "https://bobbykjh.github.io/forest/",
});

export default instance;
