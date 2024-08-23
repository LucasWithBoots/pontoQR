import InputComCaption from "@/components/InputComCaption";
import { createQRCode } from "@/shared/service";
import { ContextQRCodeCriado } from "@/store/context/context-qrcode-criado";
import { Link, router } from "expo-router";
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
  const [erro, setErro] = useState<string | null>("");

  const handleCriarQRCode = () => {
    if (nome && descricao) {
      setErro(null);
      const novoQRCode = {
        nome: nome,
        descricao: descricao,
        qrCode: `${nome}-${descricao}`, // Você pode substituir isso por um valor gerado ou recebido
      };

      createQRCode(novoQRCode).then((resp) => {
        setQRCodes((prev: any) => [...prev, resp]);
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
