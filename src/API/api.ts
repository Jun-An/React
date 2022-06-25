import axios from "axios";
// import { AxiosRequestHeaders } from "axios";
export const fetchInformationFromIG = () => {
  return axios.get("api/explore/tags/小王子語錄/?__a=1").then((response) => {
    console.log("response", response);
  });
};
