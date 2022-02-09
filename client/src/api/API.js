import axios from "axios";

export const myApi = (token)=>{
  let myUrl = "http://localhost:5000/api"; //development

if (process.env.NODE_ENV === "production") {
  myUrl = "api";
}

axios.defaults.headers.common['Authorization'] =  "Bearer " + `${token}`;

return axios.create({
  baseURL: myUrl,
});
}

// let myUrl = "http://localhost:5000/api"; //development

// if (process.env.NODE_ENV === "production") {
//   myUrl = "api";
// }

// axios.defaults.headers.common['Authorization'] =  "Bearer " + `${localStorage.getItem("token")}`;

// export default axios.create({
//   baseURL: myUrl,
// });
