import { createContext, useState } from "react";

export const ContextQRCodeCriado = createContext<any>(null);

export default function ContextQRCodeCriadoProvider({ children }: any) {
  const [qrCodes, setQRCodes] = useState<any>([]);

  return (
    <ContextQRCodeCriado.Provider value={{ qrCodes, setQRCodes }}>
      {children}
    </ContextQRCodeCriado.Provider>
  );
}
