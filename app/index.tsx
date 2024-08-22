import BotaoCriarQR from "@/components/BotaoCriarQR";
import CaixaInformacaoDadosQRCode from "@/components/CaixaInformacaoDadosQRCode";
import Saudacao from "@/components/Saudacao";
import { getQRCodes } from "@/shared/service";
import { ContextQRCodeCriado } from "@/store/context/context-qrcode-criado";
import { useContext, useEffect, useState } from "react";
import { FlatList, StatusBar, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function Index() {
  const { qrCodes, setQRCodes } = useContext(ContextQRCodeCriado);

  useEffect(() => {
    getQRCodes().then((resp) => setQRCodes(resp));
  }, []);

  const renderQRCode = ({ item }: any) => (
    <CaixaInformacaoDadosQRCode
      nome={item.nome}
      descricao={item.descricao}
      qrCode={item.qrCode}
    />
  );

  return (
    <>
      <View className="flex-1 mx-5 mt-16">
        <Saudacao />
        <BotaoCriarQR />
        <FlatList
          data={qrCodes}
          keyExtractor={(item) => item.id}
          renderItem={renderQRCode}
        />
      </View>
    </>
  );
}
