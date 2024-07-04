import axios from "axios";
import {BASE_URL} from "./constants";

//create axios instance
const axiosInstance = axios.create({
    // set base url, timeOut of 10 s,header type
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        "Contene-Type": "application/json",
    },
});

// add the axios request interceptor to attsch the auth token to every request
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

//export the configured axios instance for use in other parts of the app
export default axiosInstance;