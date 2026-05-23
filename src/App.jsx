
import './App.css'
import ContextProvider from './ContextAPI/ContextApi'
import Header from './Common/Header'
import Footer from './Common/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <ContextProvider>
      <Header/>
        <Outlet/>
      <Footer/>
    </ContextProvider>
  )
}

export default App
