import { addScan, getQRCodeByTextoEscaneador } from "@/shared/service";
import {
  BarcodeScanningResult,
  CameraType,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import { router } from "expo-router";
import { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

export default function ScreenEscanearQRCode() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [scannedData, setScannedData] = useState<string>();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  async function handleScanned(data: BarcodeScanningResult) {
    const isQRCodeValid = await getQRCodeByTextoEscaneador(data.data); // Aguarda a verificação

    if (isQRCodeValid) {
      setScannedData(data.data);
    }
  }

  async function confirmarEscaneamento() {
    addScan(scannedData as string);
    router.back();
  }

  function cancelarEscaneamento() {
    setScannedData("");
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        onBarcodeScanned={handleScanned}
      >
        {scannedData ? (
          <View className="bg-night h-64 w-full absolute bottom-0 justify-center items-center rounded-t-2xl">
            <Text
              className="text-isabeline text-xl"
              style={{ fontFamily: "SpaceGrotesk-Bold" }}
            >
              Confirmar o escaneamento?
            </Text>
            <Text
              className="text-isabeline text-xl"
              style={{ fontFamily: "SpaceGrotesk-Regular" }}
            >
              {scannedData}
            </Text>
            <View className="w-full px-24 flex-row justify-between items-center mt-7">
              <TouchableOpacity
                onPress={confirmarEscaneamento}
                className="bg-maize self-start px-5 py-3 rounded-full"
              >
                <Text
                  className="color-night"
                  style={{ fontFamily: "SpaceGrotesk-Bold" }}
                >
                  Sim
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={cancelarEscaneamento}>
                <Text
                  className="color-white"
                  style={{ fontFamily: "SpaceGrotesk-Bold" }}
                >
                  Não
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View className="bg-night h-40 w-full absolute bottom-0 justify-center items-center rounded-t-2xl">
            <Text
              className="text-isabeline text-xl"
              style={{ fontFamily: "SpaceGrotesk-Bold" }}
            >
              Nenhum dado escaneado ainda!
            </Text>
          </View>
        )}
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
