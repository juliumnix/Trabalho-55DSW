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
import DeliveryScreen from "./pages/AdmPages/DeliveryScreen";
import ClientsScreen from "./pages/AdmPages/ClientsScreen";
import AdministratorsScreen from "./pages/AdmPages/AdministratorsScreen";
import FinishScreen from "./pages/FinishScreen";
import HistoryScreen from "./pages/HistoryScreen";
import DashboardScreen from "./pages/AdmPages/DashboardScreen";
import DroneHistoryScreen from "./pages/AdmPages/DroneHistoryScreen";
import SignUpAdministratorScreen from "./pages/AdmPages/SignUpAdministratorScreen";

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="*" element={<ErrorScreen />} />
        <Route path="/" element={<LoginScreen />} />
        <Route path="/sign-up" element={<SignUpScreen />} />
        <Route path="/admin" element={<AuthenticationScreen />} />
        <Route path="/sign-up-admin" element={<SignUpAdministratorScreen />} />
        <Route
          path="/delivery"
          element={
            <AdminRoute>
              <DeliveryScreen />
            </AdminRoute>
          }
        />
        <Route
          path="/clients"
          element={
            <AdminRoute>
              <ClientsScreen />
            </AdminRoute>
          }
        />
        <Route
          path="/administrators"
          element={
            <AdminRoute>
              <AdministratorsScreen />
            </AdminRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivatedRoute>
              <MenStoreScreen />
            </PrivatedRoute>
          }
        />
        <Route
          path="/register-admin"
          element={
            <AdminRoute>
              <RegisterScreen />
            </AdminRoute>
          }
        />
        <Route
          path="/home-admin"
          element={
            <AdminRoute>
              <DashboardScreen />
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
        <Route
          path="/history"
          element={
            <PrivatedRoute>
              <HistoryScreen />
            </PrivatedRoute>
          }
        />
        <Route
          path="/drone-history"
          element={
            <AdminRoute>
              <DroneHistoryScreen />
            </AdminRoute>
          }
        />
      </Routes>
    </AppProvider>
  );
}

export default App;
