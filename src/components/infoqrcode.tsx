import { View, Text } from "react-native";
import { Colors } from "../style/theme";
import QRCode from "react-native-qrcode-svg";

export default function InfoQrCode({
    title,
    description,
    team,
    date,
    payload,
}: {
    title: string;
    description: string;
    team: string;
    date: string;
    payload: string;
}) {
    return (
        <View
            style={{
                backgroundColor: Colors.shark,
                flexDirection: "row",
            }}
            className="rounded-xl px-10 py-8"
        >
            <View
                className="bg-white rounded-xl aspect-square justify-center items-center"
                style={{ width: 120 }}
            >
                <QRCode size={80} value={payload} />
            </View>
            <View style={{ marginLeft: 20, flex: 1 }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Text
                        className="text-white text-3xl"
                        style={{ fontFamily: "SpaceGrotesk-Bold" }}
                    >
                        {title}
                    </Text>
                    <Text
                        className="text-white text-xl"
                        style={{ fontFamily: "SpaceGrotesk-Bold" }}
                    >
                        {team}
                    </Text>
                </View>
                <Text
                    className="text-white text-2xl"
                    style={{ fontFamily: "SpaceGrotesk-Regular" }}
                >
                    {description}
                </Text>
                <Text
                    className="text-xl mt-7"
                    style={{
                        fontFamily: "SpaceGrotesk-Regular",
                        color: "rgba(255, 255, 255, 0.54)",
                    }}
                >
                    {date}
                </Text>
            </View>
        </View>
    );
}
