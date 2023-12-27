
import ItemListContainer from './components/card/ItemListContainer/ItemListContainer'
import NavBar from './components/nav/NavBar'
import './index.css'


function App() {

  return (
    <div className='bg-[#EDEDED] w-full h-full'>
     <NavBar />
      <ItemListContainer  greeting="Greeting"/> 
    </div>
  )
}

export default App