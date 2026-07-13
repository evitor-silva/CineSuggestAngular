import axios from "axios";

export const api = () =>{
 return axios.create({
    baseURL: "https://api-cinesuggest.evitorsilva.site/",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
