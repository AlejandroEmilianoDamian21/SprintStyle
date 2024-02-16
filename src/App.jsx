import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import ItemListContainer from './components/card/ItemListContainer/ItemListContainer'
import NavBar from './components/nav/NavBar'
import ItemDetailContainer from './components/card/itemDetailContainer/ItemDetailContainer';
import NotFound from './components/404/NotFound';
import CartProvider from "./context/CartContext";
import './index.css'

function App() {

  return (
    <ChakraProvider>
      <div className='bg-[#EDEDED] w-full h-full'>
        <BrowserRouter >
        <CartProvider >
        <NavBar />
        <Routes>
          {/*********************HOME************************/}
          <Route path="/" element={<ItemListContainer />} />
          {/**************************************************/}

          {/*********************CATEGORY************************/}
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          {/**************************************************/}

          {/*********************ITEM************************/}
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          {/**************************************************/}
          
          {/*********************ITEM************************/}
          <Route path="*" element={<NotFound/>} />
          {/**************************************************/}
        </Routes>
        </CartProvider>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  )
}

export default App