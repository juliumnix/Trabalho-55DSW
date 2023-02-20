import { Route, Routes , Navigate} from 'react-router-dom';
import ErrorScreen from './pages/ErrorScreen';
import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';
import ShoppingCart from './pages/ShoppingCartScreen';
import PrivatedRoute from './routes/PrivatedRoute';

function App() {

  return (
    <Routes>
      <Route path="/erro" element={<ErrorScreen />} />
      <Route path='/' element={<LoginScreen />} />
      <Route path='/home' element={<PrivatedRoute><HomeScreen/></PrivatedRoute>} />
      <Route path='rota3' element={<PrivatedRoute><ShoppingCart /></PrivatedRoute>} />
    </Routes>
  );
}

export default App;
