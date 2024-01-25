
import ItemListContainer from './components/card/ItemListContainer/ItemListContainer'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import NavBar from './components/nav/NavBar'
import ItemDetailContainer from './components/card/itemDetailContainer/ItemDetailContainer';
import { ChakraProvider } from '@chakra-ui/react'
import NotFound from './components/404/NotFound';

import './index.css'


function App() {

  return (
    <ChakraProvider>
      <div className='bg-[#EDEDED] w-full h-full'>
        <BrowserRouter >
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
        </BrowserRouter>
      </div>
    </ChakraProvider>
  )
}

export default App