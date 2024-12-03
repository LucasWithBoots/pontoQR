import { userCreationModel, userLoginModel } from "../models/service.models";
import { axiosInstance, handleAxiosError } from "./helper";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
        await AsyncStorage.setItem("jwtToken", response.data.token);
        console.log("Token salvo:", response.data.token);
    } catch (error) {
        handleAxiosError(error);
    }
}

export async function getUserData(token?: string) {
    try {
        const response = await axiosInstance.get("/api/users/me", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        handleAxiosError(error);
    }
}

export async function logoutUser() {
    try {
        await AsyncStorage.removeItem("jwtToken");
    } catch (error) {
        handleAxiosError(error);
    }
}
