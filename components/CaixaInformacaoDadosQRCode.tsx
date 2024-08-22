import { View, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function CaixaInformacaoDadosQRCode(props: any) {
  return (
    <View className="mb-3 p-3 flex-row justify-between border-2 rounded-lg shadow-lg bg-night">
      <View>
        <Text
          className="text-lg text-white"
          style={{ fontFamily: "SpaceGrotesk-SemiBold" }}
        >
          {props.nome}
        </Text>
        <Text
          className="text-white"
          style={{ fontFamily: "SpaceGrotesk-Regular" }}
        >
          {props.descricao}
        </Text>
      </View>
      <QRCode
        value={props.qrCode}
        color="#F0EFEC"
        backgroundColor="transparent"
      />
    </View>
  );
}
