import axios from "axios";

const API = axios.create({
  baseURL: "https://api.openchargemap.io",
  headers: { "X-API-KEY": "af07076a-14a5-4b06-befb-338147366478" }
});


const poi = {
  poi: async (params) => API.get("/v3/poi", { params })
};

export default poi;
