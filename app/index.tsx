import BotaoCriarQR from "@/components/BotaoCriarQR";
import Saudacao from "@/components/Saudacao";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 mx-5 my-3">
      <Saudacao />
      <BotaoCriarQR />
    </View>
  );
}
