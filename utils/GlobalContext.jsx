
import React, { createContext, useContext,useState } from 'react';


const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {


const [user, setuser] = useState("Laeba")
const [cartitem, setcartitem] = useState([])
const [quantity, setQuantity] = useState(0);
const [showVegOnly, setShowVegOnly] = useState(false);

const toggleVeg = () => {
  setShowVegOnly(prevState => !prevState);
};

const handleAdd = (item) => {
  const newQuantity = quantity + 1;
  setQuantity(newQuantity);
  onQuantityChange(newQuantity); 
}

const handleSubtract = () => {
  if (quantity > 0) {
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity); 
  }
};
const addItem = (item) => {
    setcartitem([...cartitem, item]);
  };

  const handleRemoveItem = (itemToRemove) => {
    const updatedItems = cartitem.filter(item => item !== itemToRemove);
    setcartitem(updatedItems);
  };


    return (
        <GlobalContext.Provider value={{user,setuser,addItem,cartitem,handleRemoveItem,handleSubtract,handleAdd,quantity}}>
            {children}
            {/* <RestrauntMenu showVegOnly={showVegOnly} toggleVeg={toggleVeg} />
      <VarietyMenu showVegOnly={showVegOnly} /> */}
        </GlobalContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(GlobalContext);
};
