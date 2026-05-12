import axios from "axios";

export const api = () =>{
 return axios.create({
    baseURL: "https://sua-api.com",
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
