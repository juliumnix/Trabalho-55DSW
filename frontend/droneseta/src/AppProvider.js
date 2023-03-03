import React from "react";
import { UsuarioProvider } from "./hooks/UsuarioHook";

const AppProvider = ({ children }) => (
  <UsuarioProvider>{children}</UsuarioProvider>
);

export default AppProvider;
