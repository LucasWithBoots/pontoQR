import InputComCaption from "@/components/InputComCaption";
import { createQRCode } from "@/shared/service";
import { ContextQRCodeCriado } from "@/store/context/context-qrcode-criado";
import { Link } from "expo-router";
import { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";

export default function ScreenEspecificacoesQR() {
  const { qrCodes, setQRCodes } = useContext(ContextQRCodeCriado);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleCriarQRCode = () => {
    const novoQRCode = {
      nome: nome,
      descricao: descricao,
      qrCode: `${nome}-${descricao}`, // Você pode substituir isso por um valor gerado ou recebido
    };

    createQRCode(novoQRCode).then((resp) => {
      setQRCodes((prev: any) => [...prev, resp]);
    });
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
        placeholder="PlaceHolder N"
        value={nome}
        onChangeText={setNome}
      />

      <InputComCaption
        titulo="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        placeholder="PlaceHolder D"
      />
      <Link href="/QRCodeCriado" asChild>
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
      </Link>
    </View>
  );
}
