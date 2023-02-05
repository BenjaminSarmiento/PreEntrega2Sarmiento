
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./navbar/navbar";
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/categorias/:nombreCategoria' element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

