
import './App.css'
import ContextProvider from './ContextAPI/ContextApi'

function App() {

  return (
    <ContextProvider>
       <div className="App">
        <h1 className='font-bold text-4xl'>Welcome to React</h1>
      </div>
    </ContextProvider>
  )
}

export default App
