import InputComCaption from "@/components/InputComCaption";
import { QRCodeModel, QRCodeModelDAO } from "@/models/model.qrcode";
import { createQRCode } from "@/shared/service";
import { ContextQRCodeCriado } from "@/store/context/context-qrcode-criado";
import { router } from "expo-router";
import { useContext, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function ScreenEspecificacoesQR() {
  const { setQRCodes } = useContext(ContextQRCodeCriado);
  const [nome, setNome] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [erro, setErro] = useState<string | null>();

  const handleCriarQRCode = () => {
    if (nome.trim() && descricao.trim()) {
      setErro(null);
      const novoQRCode: QRCodeModelDAO = {
        nome: nome,
        descricao: descricao,
        qrCode: `${nome}-${descricao}`, // Você pode substituir isso por um valor gerado ou recebido
      };

      createQRCode(novoQRCode).then((resp) => {
        setQRCodes((prev: QRCodeModel[]) => [...prev, resp]);
      });

      router.navigate("/QRCodeCriado");
    } else {
      setErro("É necessário preencher ambos os campos!");
    }
  };

  return (
    <View className="mx-5 mt-16">
      <Text
        className="text-2xl text-white mb-7"
        style={{ fontFamily: "SpaceGrotesk-Bold" }}
      >
        Especificações do QR Code
      </Text>
      <InputComCaption
        titulo="Nome"
        placeholder="Nome do QR Code"
        value={nome}
        onChangeText={setNome}
      />

      <InputComCaption
        titulo="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Descrição do QR Code"
      />

      {erro ? <Text className="text-folly mb-5">{erro}</Text> : null}

      <TouchableOpacity
        onPress={handleCriarQRCode}
        className="bg-folly self-start px-5 py-3 rounded-full"
      >
        <Text
          className="color-white"
          style={{ fontFamily: "SpaceGrotesk-Bold" }}
        >
          Criar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
