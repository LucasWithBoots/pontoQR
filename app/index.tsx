import BotaoCriarQR from "@/components/BotaoCriarQR";
import CaixaInformacaoDadosQRCode from "@/components/CaixaInformacaoDadosQRCode";
import Saudacao from "@/components/Saudacao";
import { QRCodeModel } from "@/models/model.qrcode";
import { getQRCodes } from "@/shared/service";
import { ContextQRCodeCriado } from "@/store/context/context-qrcode-criado";
import { useContext, useEffect } from "react";
import { FlatList, StatusBar, View, Text } from "react-native";
import SelecionarModalidade from "./selecionarModalidade";
import { ContextUsuario } from "@/store/context/context-usuario";

export default function Index() {
  const { qrCodes, setQRCodes } = useContext(ContextQRCodeCriado);
  const { usuario, setUsuario } = useContext(ContextUsuario);

  // Nome padrão se não existir usuario?.nome
  useEffect(() => {
    if (!usuario?.nome) {
      setUsuario({ nome: "Fulano" });
    }
  });

  const funcao = usuario?.funcao;

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
      <SelecionarModalidade />
      {funcao === "criador" ? (
        <View className="flex-1 mx-5 mt-16">
          <Saudacao />
          <BotaoCriarQR text={"Criar QRCode"} href="/criarQRCode" />
          <FlatList
            data={qrCodes}
            keyExtractor={(item) => item.id}
            renderItem={renderQRCode}
          />
        </View>
      ) : (
        <View className="flex-1 mx-5 mt-16">
          <Saudacao />
          <BotaoCriarQR text={"Escanear"} href="/escanearQRCode" />
        </View>
      )}
    </>
  );
}
