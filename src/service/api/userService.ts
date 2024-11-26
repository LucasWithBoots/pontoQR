import axios from "axios";
import { userCreationModel } from "../models/service.models";

axios.defaults.baseURL = "http://10.0.2.2:8080";

export async function registerUser(user: userCreationModel) {
    try {
        const response = await axios.post("/api/users", user, {
            timeout: 5000,
        });
    } catch (error) {
        throw error;
    }
}
