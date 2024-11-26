import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://192.168.230.152:8080",
    timeout: 5000,
});

export function handleAxiosError(error: any): never {
    if(axios.isAxiosError(error)){
        if(error.response){
            const status = error.response.status;
            switch (status){
                case 401:
                    throw new Error("Incorrect authentication credentials.")
                default:
                    throw new Error(`Error: ${status}. Please try again.`)
            }
        } else {
            throw new Error("Network error. Please check your connection.")
        }
    } else {
        throw new Error("An unexpected error occurred. Please try again.")
    }
}