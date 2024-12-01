import axios from "axios";
import * as SecureStore from "expo-secure-store";

export const axiosInstance = axios.create({
    // Android Studio Emulator
    baseURL: "http://10.0.2.2:8080",

    // Expo Go
    // baseURL: "http://YOURIP:8080",
    timeout: 5000,
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const token = await SecureStore.getItemAsync("jwtToken");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export function handleAxiosError(error: any): never {
    if (axios.isAxiosError(error)) {
        if (error.response) {
            const status = error.response.status;
            switch (status) {
                case 401:
                    throw new Error("Incorrect authentication credentials.");
                default:
                    throw new Error(`Error: ${status}. Please try again.`);
            }
        } else {
            throw new Error("Network error. Please check your connection.");
        }
    } else {
        throw new Error("An unexpected error occurred. Please try again.");
    }
}
