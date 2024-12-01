import { useUser } from "@/src/contexts/UserContext";
import { qrCodeModel, QrCodeResponse } from "../models/service.models";
import { axiosInstance, handleAxiosError } from "./helper";

export async function postQrCode({
    user_id,
    selectedTeam,
    title,
    description,
}: {
    user_id: string;
    selectedTeam: string;
    title: string;
    description: string;
}): Promise<QrCodeResponse | undefined> {
    const qrCode: qrCodeModel = {
        id_creator: user_id,
        id_team: selectedTeam,
        title,
        description,
    };

    try {
        const response = await axiosInstance.post("/api/qrcodes", qrCode);
        return response.data;
    } catch (error) {
        handleAxiosError(error);
        return undefined;
    }
}

export async function getQrCodes(): Promise<QrCodeResponse[]> {
    try {
        const response = await axiosInstance.get("/api/qrcodes");
        return response.data;
    } catch (error) {
        handleAxiosError(error);
    }
}
