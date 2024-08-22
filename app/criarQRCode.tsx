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
  const [nome, setNome] = useState("Nome do qrcode");
  const [descricao, setDescricao] = useState("Nome da descrição");

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
    <View>
      <Text className="text-2xl">Especificações do QRCode</Text>
      <InputComCaption titulo="Nome" value={nome} onChangeText={setNome} />

      <InputComCaption
        titulo="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />
      <Link href="/QRCodeCriado" asChild>
        <TouchableOpacity onPress={handleCriarQRCode}>
          <Text>Criar</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
