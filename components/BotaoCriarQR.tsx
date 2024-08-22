import { Link } from "expo-router";
import { TouchableOpacity, Text, View } from "react-native";

export default function BotaoCriarQR() {
  return (
    <Link href="/criarQRCode" asChild>
      <TouchableOpacity className="h-20 rounded-lg justify-center pl-6 bg-maize">
        <View>
          <Text
            className="text-black text-lg"
            style={{ fontFamily: "SpaceGrotesk-Bold" }}
          >
            Criar QRCode
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
}
