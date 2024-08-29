import { ContextUsuario } from "@/store/context/context-usuario";
import { useContext } from "react";
import { Text, View } from "react-native";

const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long" };
const today = new Date();
const formattedDate = today.toLocaleDateString("pt-BR", options);

export default function Saudacao() {
  const { usuario } = useContext(ContextUsuario);

  return (
    <View className="mb-7">
      <Text
        className="text-2xl text-white"
        style={{ fontFamily: "SpaceGrotesk-Bold" }}
      >
        Olá, {usuario?.nome}
      </Text>
      <Text className="text-white" style={{ fontFamily: "SpaceGrotesk-Light" }}>
        {formattedDate}
      </Text>
    </View>
  );
}
