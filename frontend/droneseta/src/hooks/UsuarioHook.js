import { createContext, useContext, useState } from "react";

const UsuarioContext = createContext();

export function useUsuario() {
  const context = useContext(UsuarioContext);

  if (!context) {
    throw new Error("useUsuario must be used within a UsuarioContext");
  }

  return context;
}

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({});

  function getUsuario() {
    return usuario;
  }

  function handleUsuario(usuario) {
    setUsuario(usuario);
  }

  function clearUsuario() {
    setUsuario({});
  }

  function setUsuarioFromLocalState() {
    clearUsuario();
    if (!localStorage.getItem("authLogin")) {
      return;
    } else {
      console.log(
        "setUsuarioFromLocalState",
        JSON.parse(localStorage.getItem("authLogin"))
      );
      return handleUsuario(JSON.parse(localStorage.getItem("authLogin")));
    }
  }

  function getUsuarioFromLocalState() {
    return JSON.parse(localStorage.getItem("authLogin"));
  }

  function clearUsuarioFromLocalState() {
    return localStorage.removeItem("authLogin");
  }

  return (
    <UsuarioContext.Provider
      value={{
        getUsuario,
        handleUsuario,
        setUsuarioFromLocalState,
        clearUsuarioFromLocalState,
        getUsuarioFromLocalState,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};
