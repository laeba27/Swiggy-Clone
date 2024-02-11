
import React, { createContext, useContext,useState } from 'react';


const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {


const [user, setuser] = useState("Sagar")
const [cartitem, setcartitem] = useState([])

const addItem = (item) => {
    setcartitem([...cartitem, item]);
  };

  const handleRemoveItem = (itemToRemove) => {
    const updatedItems = cartitem.filter(item => item !== itemToRemove);
    setcartitem(updatedItems);
  };

    return (
        <GlobalContext.Provider value={{user,setuser,addItem,cartitem,handleRemoveItem}}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(GlobalContext);
};
