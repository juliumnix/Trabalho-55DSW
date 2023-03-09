import { Route, Routes } from "react-router-dom";
import AuthenticationScreen from "./pages/AdmPages/AuthenticationScreen";
import ErrorScreen from "./pages/ErrorScreen";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import ShoppingCart from "./pages/ShoppingCartScreen";
import PrivatedRoute from "./routes/PrivatedRoute";
import AdminRoute from "./routes/AdminRoute";
import RegisterScreen from "./pages/AdmPages/RegisterScreen";
import AppProvider from "./AppProvider";
import MenStoreScreen from "./pages/MenStoreScreen";

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/erro" element={<ErrorScreen />} />
        <Route path="/" element={<LoginScreen />} />
        <Route path="/admin" element={<AuthenticationScreen />} />
        <Route
          path="/menStore"
          element={
            <PrivatedRoute>
              <MenStoreScreen />
            </PrivatedRoute>
          }
        />
        <Route
          path="/home/admin"
          element={
            <AdminRoute>
              <RegisterScreen />
            </AdminRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivatedRoute>
              <HomeScreen />
            </PrivatedRoute>
          }
        />
        <Route
          path="/shoppingCart"
          element={
            <PrivatedRoute>
              <ShoppingCart />
            </PrivatedRoute>
          }
        />
      </Routes>
    </AppProvider>
  );
}

export default App;
