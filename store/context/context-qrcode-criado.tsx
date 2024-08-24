import { QRCodeModel } from "@/models/model.qrcode";
import { createContext, ReactNode, useState } from "react";

export const ContextQRCodeCriado = createContext<any>(null);

export default function ContextQRCodeCriadoProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [qrCodes, setQRCodes] = useState<QRCodeModel[]>();

  return (
    <ContextQRCodeCriado.Provider value={{ qrCodes, setQRCodes }}>
      {children}
    </ContextQRCodeCriado.Provider>
  );
}
