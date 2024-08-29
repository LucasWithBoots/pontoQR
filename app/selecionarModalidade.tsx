import BotaoCriarQR from "@/components/BotaoCriarQR";
import InputComCaption from "@/components/InputComCaption";
import { ContextUsuario } from "@/store/context/context-usuario";
import React, { useContext, useState } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";

export default function SelecionarModalidade() {
  const [modalVisible, setModalVisible] = useState(true);
  const [nome, setNome] = useState("");

  const { usuario, setUsuario } = useContext(ContextUsuario);

  function handlePressEscaneader() {
    setUsuario({ nome: nome, funcao: "escaneador" });

    setModalVisible(false);
  }

  function handlePressCriador() {
    setUsuario({ nome: nome, funcao: "criador" });

    setModalVisible(false);
  }

  return (
    <Modal visible={modalVisible}>
      <View className="flex-1 bg-black">
        <Text
          className="text-2xl text-white"
          style={{ fontFamily: "SpaceGrotesk-Bold" }}
        >
          Bem vindo(a)!
        </Text>
        <Text
          className="text-white"
          style={{ fontFamily: "SpaceGrotesk-Light" }}
        >
          Complete os seguintes campos para prosseguir:
        </Text>

        <InputComCaption
          titulo={"Nome"}
          value={nome}
          placeholder={"Fulano de Tal"}
          onChangeText={setNome}
        />

        <TouchableOpacity
          className="bg-folly self-start px-5 py-3 rounded-full"
          onPress={handlePressEscaneader}
        >
          <Text
            className="color-white"
            style={{ fontFamily: "SpaceGrotesk-Bold" }}
          >
            Sou um escaneador
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-folly self-start px-5 py-3 rounded-full"
          onPress={handlePressCriador}
        >
          <Text
            className="color-white"
            style={{ fontFamily: "SpaceGrotesk-Bold" }}
          >
            Sou um criador
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
