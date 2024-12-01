import { useUser } from "@/src/contexts/UserContext";
import { qrCodeModel } from "../models/service.models";
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
}) {
    const qrCode: qrCodeModel = {
        id_creator: user_id,
        id_team: selectedTeam,
        title,
        description,
    };

    try {
        const response = await axiosInstance.post("/api/qrcodes", qrCode);
    } catch (error) {
        handleAxiosError(error);
    }
}
