import axios from "axios";

export default axios.create({
    baseURL: "https://jc.ilpv4.dev/accounts/",
    responseType: "json"
});