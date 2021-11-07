import axios from "axios";
import { baseURL } from "../constants/apiPaths";

export default axios.create({
    baseURL: baseURL,
    headers: {"Content-Type": "application/json"},
    responseType: "json"
});