import InputComCaption from "@/components/InputComCaption";
import { Link } from "expo-router";
import { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { ContextQRCodeCriado } from "@/store/context/context-qrcode-criado";

export default function ScreenEspecificacoesQR() {
  const [nome, setNome] = useState("Nome do qrcode");
  const [descricao, setDescricao] = useState("Nome da descrição");

  const { setValorQRCode } = useContext(ContextQRCodeCriado);

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
        <TouchableOpacity onPress={() => setValorQRCode("teste veyr")}>
          <Text>Criar</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
