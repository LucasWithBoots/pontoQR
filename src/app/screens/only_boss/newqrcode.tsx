import { View } from "react-native";
import Header from "@/src/components/header";
import TextInputForms from "@/src/components/text_input_forms";
import MainButtonForms from "@/src/components/main_button_forms";
import DropdownForms from "@/src/components/dropdown_forms";
import { useEffect, useState } from "react";
import { getTeams } from "@/src/service/api/teamService";
import Toast from "@/src/components/toast";
import { teamModel } from "@/src/service/models/service.models";
import { useToaster } from "@/src/contexts/ToasterContext";
import { postQrCode } from "@/src/service/api/qrCodeService";
import { router } from "expo-router";
import { useUser } from "@/src/contexts/UserContext";

export default function Newqrcode() {
    const { showToast } = useToaster();
    const { user } = useUser();
    const [teams, setTeams] = useState<teamModel[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const loadTeams = async () => {
        try {
            const response = await getTeams();
            setTeams(response);
        } catch (error) {
            showToast(`Unable to load teams: ${error}`, "error");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadTeams();
    }, []);

    const dropdownItems = teams.map((team) => ({
        label: team.name,
        value: team.id,
    }));

    useEffect(() => {
        if (isLoading) {
            showToast("Creating QRCode...", "none");
        }
    }, [isLoading]);

    const handleSubmit = async () => {
        if (selectedTeam == null || description == "" || title == "") {
            showToast("Please fill in all fields.", "warning");
            return;
        }

        setIsLoading(true);

        try {
            const user_id = user!!.id.toString();
            await postQrCode({ user_id, selectedTeam, title, description });
            showToast("QRCode created successfully!", "success");

            setTimeout(() => {
                router.replace("./qrcodecreated");
            }, 3000);
        } catch (error: any) {}
    };

    return (
        <>
            <View>
                <Header title="Create new QRCode" height={170} />
                <View className="px-6 gap-5 mb-16">
                    <DropdownForms
                        title="Team"
                        placeholder={
                            isLoading ? "Loading teams..." : "Select a team"
                        }
                        items={dropdownItems}
                        onSelect={(value) => setSelectedTeam(value)}
                    />
                    <TextInputForms
                        title={"Title"}
                        placeholder={"Write a title"}
                        value={title}
                        onChangeText={setTitle}
                        isSecure={false}
                    />
                    <TextInputForms
                        title={"Description"}
                        placeholder={"Write a description"}
                        value={description}
                        onChangeText={setDescription}
                        isSecure={false}
                    />
                </View>
                <MainButtonForms text={"Create"} onPress={handleSubmit} />
            </View>
        </>
    );
}
