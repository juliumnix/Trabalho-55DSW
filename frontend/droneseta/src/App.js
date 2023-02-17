import { Route, Routes } from 'react-router-dom';
import ErrorScreen from './pages/ErrorScreen';
import HomeScreen from './pages/HomeScreen';
import Login from './pages/LoginScreen';
import ShoppingCart from './pages/ShoppingCartScreen';

function App() {
  return (
      <Routes>
        <Route path="*" element={<ErrorScreen/>} />
        <Route path='/' element={<Login />} />
        <Route path='rota2' element={<HomeScreen />} />
        <Route path='rota3' element={<ShoppingCart />} />
      </Routes>
  );
}

export default App;
