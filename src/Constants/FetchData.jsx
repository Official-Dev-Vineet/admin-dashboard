// fetch data and send data to server and modify data
import axios from "axios";
const BASE_URL = "https://newsapi.org/v2/everything";
const options = {
  method: "GET",
  headers: {
    "x-api-key": "000c8eb3d797462f8bbaf8e95d3e459b",
  },
};
export const FetchAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}?q=${url}`, options);
  return data;
};
const BASE_Image = "https://api.pexels.com/v1/search";
const options2 = {
  method: "GET",
  headers: {
    Authorization: "563492ad6f91700001000001af762a74bbf447dd8b768b453406edc7",
  },
};
export const FetchImage = async (url) => {
  const { data } = await axios.get(`${BASE_Image}?query=${url}`, options2);
  return data;
};
