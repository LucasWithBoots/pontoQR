import { Link } from "expo-router";
import { TouchableOpacity, Text, View } from "react-native";

export default function BotaoCriarQR() {
  return (
    <Link href="/criarQRCode" asChild>
      <TouchableOpacity className="bg-cyan-500 h-20 rounded-lg justify-center pl-6">
        <Text>Criar QRCode</Text>
      </TouchableOpacity>
    </Link>
  );
}
