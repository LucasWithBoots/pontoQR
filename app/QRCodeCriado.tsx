import { ContextQRCodeCriado } from "@/store/context/context-qrcode-criado";
import { useContext } from "react";
import { View, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function QRCodeCriado() {
  const valorQRCode = useContext(ContextQRCodeCriado);

  console.log(valorQRCode);

  return (
    <View>
      <QRCode value="teste oioi" />
    </View>
  );
}
