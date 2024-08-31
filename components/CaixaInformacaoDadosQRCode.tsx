import { QRCodeModelDAO } from "@/models/model.qrcode";
import { View, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function CaixaInformacaoDadosQRCode({
  nome,
  descricao,
  qrCode,
  vezesEscanedado,
}: QRCodeModelDAO) {
  return (
    <View className="mb-3 p-3 flex-row justify-between border-2 rounded-lg shadow-lg bg-night">
      <View className="flex-col justify-between">
        <View>
          <Text
            className="text-lg text-white"
            style={{ fontFamily: "SpaceGrotesk-SemiBold" }}
          >
            {nome}
          </Text>
          <Text
            className="text-white"
            style={{ fontFamily: "SpaceGrotesk-Regular" }}
          >
            {descricao}
          </Text>
        </View>
        <Text
          className="text-white"
          style={{ fontFamily: "SpaceGrotesk-Regular" }}
        >
          Vezes escaneado: {vezesEscanedado}
        </Text>
      </View>
      <QRCode value={qrCode} color="#F0EFEC" backgroundColor="transparent" />
    </View>
  );
}
