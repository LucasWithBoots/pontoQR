import { ContextQRCodeCriado } from "@/store/context/context-qrcode-criado";
import { Link } from "expo-router";
import { useContext } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function QRCodeCriado() {
  const { qrCodes, setQRCodes } = useContext(ContextQRCodeCriado);
  const ultimoQRCode = qrCodes[qrCodes.length - 1];

  return (
    <View className="flex-1 justify-center items-center gap-y-4">
      <View className="bg-white border-4 border-maize p-3 rounded-lg">
        <QRCode value={ultimoQRCode.qrCode} size={170} />
      </View>
      <Text
        className="text-white text-2xl"
        style={{ fontFamily: "SpaceGrotesk-Medium" }}
      >
        Código criado com sucesso!
      </Text>
      <View>
        <Link href="/" asChild>
          <TouchableOpacity
            // onPress={handleCriarQRCode}
            className="bg-folly self-start px-4 py-4 rounded-2xl"
          >
            <Image
              source={require("../assets/images/home.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
