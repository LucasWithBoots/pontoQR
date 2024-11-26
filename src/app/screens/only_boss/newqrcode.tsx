import { View } from "react-native";
import Header from "@/src/components/header";
import TextInputForms from "@/src/components/text_input_forms";
import MainButtonForms from "@/src/components/main_button_forms";
import DropdownForms from "@/src/components/dropdown_forms";
import { useEffect, useState } from "react";
import { getTeams } from "@/src/service/api/teamService";
import Toast from "@/src/components/toast";
import { teamModel } from "@/src/service/models/service.models";

export default function Newqrcode() {
    const [teams, setTeams] = useState<teamModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastSituation, setToastSituation] = useState<
        "success" | "error" | "warning"
    >("success");

    const showToast = (
        message: string,
        situation: "success" | "error" | "warning",
    ) => {
        setToastMessage(message);
        setToastSituation(situation);
        setToastVisible(true);
    };

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
                        title={"Location"}
                        placeholder={"Select a location"}
                    />
                    <TextInputForms
                        title={"Description"}
                        placeholder={"Write a description"}
                    />
                </View>
                <MainButtonForms text={"Create"} href=".." />
            </View>
            <Toast
                message={toastMessage}
                situation={toastSituation}
                visible={toastVisible}
                onClose={() => setToastVisible(false)}
            />
        </>
    );
}
