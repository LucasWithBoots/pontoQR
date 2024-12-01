import DropdownForms from "@/src/components/dropdown_forms";
import Header from "@/src/components/header";
import InfoQrCode from "@/src/components/infoqrcode";
import { useToaster } from "@/src/contexts/ToasterContext";
import { getQrCodes } from "@/src/service/api/qrCodeService";
import { getTeams } from "@/src/service/api/teamService";
import {
    qrCodeModel,
    QrCodeResponse,
    teamModel,
} from "@/src/service/models/service.models";
import { useEffect, useState } from "react";
import { View, Text, FlatList, ScrollView } from "react-native";

export default function Manageqrcode() {
    const [teams, setTeams] = useState<teamModel[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const { showToast } = useToaster();
    const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
    const [qrCodes, setQrCodes] = useState<QrCodeResponse[]>([]);

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

    const loadQrCodes = async () => {
        try {
            const response = await getQrCodes();
            setQrCodes(response);
        } catch (error) {
            showToast(`Unable to load QR Codes: ${error}`, "error");
        }
    };

    useEffect(() => {
        loadTeams();
        loadQrCodes();
    }, []);

    const dropdownItems = teams.map((team) => ({
        label: team.name,
        value: team.id,
    }));

    const renderDropdownTeams = () => {
        return (
            <DropdownForms
                title="Team"
                placeholder={isLoading ? "Loading teams..." : "Select a team"}
                items={dropdownItems}
                onSelect={(value) => setSelectedTeam(value)}
            />
        );
    };

    return (
        <View>
            <Header title="Manage QRCodes" height={170} />
            <ScrollView>
                <View className="px-6 gap-5 mb-16">
                    <FlatList
                        ListHeaderComponent={renderDropdownTeams}
                        data={qrCodes}
                        renderItem={({ item }) => (
                            <InfoQrCode
                                title={item.title}
                                description={item.description}
                                team={item.id_team.toString()}
                                date={item.date_created}
                                payload={item.payload}
                            />
                        )}
                        contentContainerStyle={{ paddingBottom: 170 }}
                    />
                </View>
            </ScrollView>
        </View>
    );
}
