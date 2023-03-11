import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  console.log(localStorage.getItem("authLoginAdmin"));
  if (!localStorage.getItem("authLoginAdmin")) {
    console.log(localStorage.getItem("authLoginAdmin"));
    return <Navigate to="/admin" />;
  } else {
    return children;
  }
}
