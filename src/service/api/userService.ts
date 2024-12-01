import { userCreationModel, userLoginModel } from "../models/service.models";
import { axiosInstance, handleAxiosError } from "./helper";
import * as SecureStore from "expo-secure-store";

export async function registerUser(user: userCreationModel) {
    try {
        const response = await axiosInstance.post("/api/users", user);
    } catch (error) {
        handleAxiosError(error);
    }
}

export async function loginUser(user: userLoginModel) {
    try {
        const response = await axiosInstance.post("/api/login", user);
        await SecureStore.setItemAsync("jwtToken", response.data.token);
        console.log("Token salvo:", response.data.token);
    } catch (error) {
        handleAxiosError(error);
    }
}

export async function getUserData() {
    try {
        const response = await axiosInstance.get("/api/users/me");
        return response.data;
    } catch (error) {
        handleAxiosError(error);
    }
}

export async function logoutUser() {
    try {
        await SecureStore.deleteItemAsync("jwtToken");
    } catch (error) {
        handleAxiosError(error);
    }
}
