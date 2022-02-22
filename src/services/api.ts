import axios from "axios";
import { Buffer } from 'buffer';

const username = "eb5f49b3d3cfeb8eb2a0bed2457c8615";
const password = "96926e5e9b9331945a9f3be377681a7f";
const authorizationBasic = Buffer.from(
  `${username}:${password}`,
  "utf8"
).toString("base64");

const api = axios.create({
  baseURL: "https://eventx-api-sscl6.ondigitalocean.app/",
  // baseURL: "http://45.55.122.211/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
api.defaults.headers.common['Authorization'] = `Basic ${authorizationBasic}`;

export default api;
