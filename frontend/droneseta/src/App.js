import { Route, Routes } from "react-router-dom";
import AuthenticationScreen from "./pages/AdmPages/AuthenticationScreen";
import ErrorScreen from "./pages/ErrorScreen";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import SignUpScreen from "./pages/SignUpScreen";
import ShoppingCart from "./pages/ShoppingCartScreen";
import PrivatedRoute from "./routes/PrivatedRoute";
import AdminRoute from "./routes/AdminRoute";
import RegisterScreen from "./pages/AdmPages/RegisterScreen";
import AppProvider from "./AppProvider";
import MenStoreScreen from "./pages/MenStoreScreen";
import ProductSelectedScreen from "./pages/ProductSelectedScreen";
import SizeScreen from "./pages/AdmPages/SizeScreen";

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="*" element={<ErrorScreen />} />
        <Route path="/" element={<LoginScreen />} />
        <Route path="/sign-up" element={<SignUpScreen />} />
        <Route path="/admin" element={<AuthenticationScreen />} />
        <Route
          path="/products"
          element={
            <PrivatedRoute>
              <MenStoreScreen />
            </PrivatedRoute>
          }
        />
        <Route
          path="/home-admin"
          element={
            <AdminRoute>
              <RegisterScreen />
            </AdminRoute>
          }
        />
        <Route
          path="/size-admin"
          element={
            <AdminRoute>
              <SizeScreen />
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
          path="/shopping-cart"
          element={
            <PrivatedRoute>
              <ShoppingCart />
            </PrivatedRoute>
          }
        />
        <Route
          path="/product-selected/:id"
          element={
            <PrivatedRoute>
              <ProductSelectedScreen />
            </PrivatedRoute>
          }
        />
      </Routes>
    </AppProvider>
  );
}

export default App;
