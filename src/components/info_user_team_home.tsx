import { Image, Text, View } from "react-native";

export default function InfoUserTeamHome() {
    return (
        <View
            style={{ flexDirection: "row" }}
            className="items-center justify-between"
        >
            <View className="flex-row items-center gap-4">
                <Image
                    className="w-10 h-10 rounded-full"
                    source={require("@/assets/images/baguette.png")}
                />
                <Text
                    className="text-white text-xl"
                    style={{ fontFamily: "SpaceGrotesk-Regular" }}
                >
                    Lucas Carrijo
                </Text>
            </View>
            <View
                style={{
                    width: 8,
                    height: 8,
                    borderRadius: 5,
                    backgroundColor: "red",
                }}
            ></View>
        </View>
    );
}
