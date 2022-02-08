import axios from "axios";

let myUrl = "http://localhost:5000/api"; //development

if (process.env.NODE_ENV === "production") {
  myUrl = "api";
}

axios.defaults.headers.common['Authorization'] =  "Bearer " + `${localStorage.getItem("token")}`;

export default axios.create({
  baseURL: myUrl,
});
