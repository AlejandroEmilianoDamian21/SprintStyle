
import ItemListContainer from './components/card/ItemListContainer/ItemListContainer'
import { Routes, Route } from "react-router-dom";
import NavBar from './components/nav/NavBar'
import { ChakraProvider } from '@chakra-ui/react'

import './index.css'


function App() {

  return (
    <ChakraProvider>
    <div className='bg-[#EDEDED] w-full h-full'>
     <NavBar />
    <Routes>
    {/*********************HOME************************/}
    <Route path="/" element={<ItemListContainer greeting="Hi"/>}/>
    {/**************************************************/}
    </Routes>
    </div>
    </ChakraProvider>
  )
}

export default App