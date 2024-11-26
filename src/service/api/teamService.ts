import { userCreationModel, userLoginModel } from "../models/service.models";
import { axiosInstance, handleAxiosError } from "./helper";

export async function getTeams() {
    try {
        const response = await axiosInstance.get("/api/teams");
        return response.data;
    } catch (error) {
        handleAxiosError(error);
    }
}
