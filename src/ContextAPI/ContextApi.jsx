import { createContext } from 'react';
import { useState } from 'react';
import ProductData from '../Store/ProductData';


export const Context = createContext();



 export default function ContextProvider({ children }) {
    
    const [Products, setProducts] = useState(ProductData);


   console.log(Products);

    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    );
}
