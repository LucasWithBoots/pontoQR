import BotaoCriarQR from "@/components/BotaoCriarQR";
import Saudacao from "@/components/Saudacao";
import { getQRCodes } from "@/shared/service";
import { ContextQRCodeCriado } from "@/store/context/context-qrcode-criado";
import { useContext, useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function Index() {
  const { qrCodes, setQRCodes } = useContext(ContextQRCodeCriado);

  useEffect(() => {
    getQRCodes().then((resp) => setQRCodes(resp));
  }, []);

  const renderQRCode = ({ item }: any) => (
    <View className="mb-3 p-3 border border-gray-200 rounded">
      <Text className="text-lg font-bold">{item.nome}</Text>
      <Text>{item.descricao}</Text>
      <QRCode value={item.qrCode} />
    </View>
  );

  return (
    <View className="flex-1 mx-5 my-3">
      <Saudacao />
      <BotaoCriarQR />
      <FlatList
        data={qrCodes}
        keyExtractor={(item) => item.id}
        renderItem={renderQRCode}
      />
    </View>
  );
}
