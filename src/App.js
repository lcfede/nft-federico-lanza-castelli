import logo from './logo.svg';
import './App.css';
import { MuiNavbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound';
import Cart from './components/Cart';
import ShopProvider from './components/context/ShopContext';

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <MuiNavbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/category/:id" element={<ItemListContainer />}/>
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
