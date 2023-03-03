import { Navigate } from "react-router-dom";
import { useUsuario } from "../hooks/UsuarioHook";

export default function PrivatedRoute({ children }) {
  console.log(JSON.parse(localStorage.getItem("authLogin")));
  if (!localStorage.getItem("authLogin")) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}
