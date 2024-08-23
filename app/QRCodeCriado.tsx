import { ContextQRCodeCriado } from "@/store/context/context-qrcode-criado";
import { useContext } from "react";
import { View, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function QRCodeCriado() {
  const { qrCodes, setQRCodes } = useContext(ContextQRCodeCriado);
  const ultimoQRCode = qrCodes[qrCodes.length - 1];

  return (
    <View className="flex-1 justify-center items-center gap-y-4">
      <QRCode value={ultimoQRCode.qrCode} />
      <Text
        className="text-white text-2xl"
        style={{ fontFamily: "SpaceGrotesk-Medium" }}
      >
        Código criado com sucesso!
      </Text>
    </View>
  );
}
