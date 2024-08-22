import { createContext, useState } from "react";

export const ContextQRCodeCriado = createContext<any>("Default Value");

export default function ContextQRCodeCriadoProvider({ children }: any) {
  const [valorQRCode, setValorQRCode] = useState("Default Value");

  return (
    <ContextQRCodeCriado.Provider value={{ valorQRCode, setValorQRCode }}>
      {children}
    </ContextQRCodeCriado.Provider>
  );
}
