import Header from "@/src/components/header";
import MainButtonForms from "@/src/components/main_button_forms";
import { Link } from "expo-router";
import { useLocalSearchParams, useSearchParams } from "expo-router/build/hooks";
import { View, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function QrCodeCreated() {
    const { payload } = useLocalSearchParams<{ payload: string }>();

    return (
        <View>
            <Header title="Successfully created!" height={170} />
            <View
                style={{
                    justifyContent: "center",
                }}
            >
                <View
                    className="bg-white rounded-xl mx-auto mb-24 mt-7 justify-center items-center"
                    style={{
                        height: 300,
                        width: 300,
                    }}
                >
                    <QRCode size={250} value={payload} />
                </View>
                <MainButtonForms text="Export as PDF" />
                <Text
                    className="text-white text-xl text-center mx-8 mt-10"
                    style={{ fontFamily: "SpaceGrotesk-Medium" }}
                >
                    You can also view the generated QR code on the QR code{" "}
                    <Link className="underline" href="..">
                        management screen
                    </Link>
                </Text>
            </View>
        </View>
    );
}
