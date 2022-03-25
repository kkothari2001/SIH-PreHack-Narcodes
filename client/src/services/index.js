import axios from "axios";
import user from "./user.js";

const BASEURL = "http://localhost:5000";

axios.defaults.baseURL = BASEURL + "/api";

axios.interceptors.request.use(
    (config) => {
        const headers = {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
        };
        return { ...config, headers };
    },
    (error) => {
        return Promise.error(error);
    }
);

export const Routes = {
    user,
}

export default axios;