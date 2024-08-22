import { Text, View } from "react-native";

export default function Saudacao() {
  return (
    <View className="mb-7">
      <Text
        className="text-2xl text-white"
        style={{ fontFamily: "SpaceGrotesk-Bold" }}
      >
        Olá, Lucas
      </Text>
      <Text className="text-white" style={{ fontFamily: "SpaceGrotesk-Light" }}>
        21 de agosto
      </Text>
    </View>
  );
}
