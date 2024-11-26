import { userCreationModel, userLoginModel } from "../models/service.models";
import { axiosInstance, handleAxiosError } from "./helper";


export async function registerUser(user: userCreationModel) {
    try {
        const response = await axiosInstance.post("/api/users", user);
    } catch (error) {
        handleAxiosError(error);
    }
}

export async function loginUser(user:userLoginModel){
    try {
        const response = await axiosInstance.post("/api/login", user)
    } catch (error) {
        handleAxiosError(error);
    }
}
