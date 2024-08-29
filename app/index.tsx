import BotaoCriarQR from "@/components/BotaoCriarQR";
import CaixaInformacaoDadosQRCode from "@/components/CaixaInformacaoDadosQRCode";
import Saudacao from "@/components/Saudacao";
import { QRCodeModel } from "@/models/model.qrcode";
import { getQRCodes } from "@/shared/service";
import { ContextQRCodeCriado } from "@/store/context/context-qrcode-criado";
import { useContext, useEffect } from "react";
import { FlatList, StatusBar, View } from "react-native";
import SelecionarModalidade from "./selecionarModalidade";

export default function Index() {
  const { qrCodes, setQRCodes } = useContext(ContextQRCodeCriado);

  useEffect(() => {
    getQRCodes().then((resp) => setQRCodes(resp));
  }, []);

  const renderQRCode = ({ item }: { item: QRCodeModel }) => (
    <CaixaInformacaoDadosQRCode
      nome={item.nome}
      descricao={item.descricao}
      qrCode={item.qrCode}
    />
  );

  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <View className="flex-1 mx-5 mt-16">
        <SelecionarModalidade />
        <Saudacao />
        <BotaoCriarQR text={"Criar QRCode"} />
        <FlatList
          data={qrCodes}
          keyExtractor={(item) => item.id}
          renderItem={renderQRCode}
        />
      </View>
    </>
  );
}
