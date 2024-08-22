import ContextQRCodeCriadoProvider, {
  ContextQRCodeCriado,
} from "@/store/context/context-qrcode-criado";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ContextQRCodeCriadoProvider>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </ContextQRCodeCriadoProvider>
  );
}
