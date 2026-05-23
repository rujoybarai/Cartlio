import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home.jsx';

const router = createBrowserRouter([
  {path: '/', element: <App /> , children:
  [

   {path:'/',element: <Home/>},

  ]},



]);

createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}>
        <StrictMode>
            <App />
        </StrictMode>
    </RouterProvider>
  
)
