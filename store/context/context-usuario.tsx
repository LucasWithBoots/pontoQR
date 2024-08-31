import { UsuarioModel } from "@/models/model.usuario";
import { createContext, ReactNode, useState } from "react";

export const ContextUsuario = createContext<any>(null);

export default function ContextUsuarioProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [usuario, setUsuario] = useState<UsuarioModel>();

  return (
    <ContextUsuario.Provider value={{ usuario, setUsuario }}>
      {children}
    </ContextUsuario.Provider>
  );
}
