import axios from "axios";

export const handler = {
  Post,
  Get,
};

async function Post(URL, Parameter) {
  return await axios.post(URL, Parameter);
}
async function Get(URL) {
  return await axios.get(URL);
}
