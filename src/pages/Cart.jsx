import React from "react";
import { useAppContext } from "../../utils/GlobalContext";
import Navbar from "../Component/Navbar";
import { useState, useEffect } from "react";

const Cart = () => {
  const [totalprice, settotalprice] = useState(null);
  const [GSTPrice, setGSTPrice] = useState(null);
 
  
  const url =  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  const { cartitem, handleRemoveItem  } = useAppContext();
  console.log(cartitem);

 
  useEffect(() => {
    const intialvalue = 0;
    const itemPrice = cartitem.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.card.info.price / 100,
      intialvalue
    );
    console.log("Total Price:", itemPrice);
    const gstPrice = itemPrice * 0.12; // Calculate GST price
    setGSTPrice(gstPrice);
    settotalprice(itemPrice + gstPrice);
  }, [cartitem]);

  useEffect(() => {
    console.log(totalprice); // This will log the updated totalprice
  }, [totalprice]);


  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto flex justify-between">
        <div>
          {cartitem.map((item, index) => {
            return (
              <div key={index} className="my-4  border border-gray-100 ">
                <div className="flex  gap-20 justify-between  ">
                  <img
                    className="h-24"
                    src={url + item?.card?.info?.imageId}
                    alt="product"
                  />
                  <div className="flex flex-col gap-1 w-40">
                    <h1 className="text-lg font-bold">
                      {item?.card?.info?.name}
                    </h1>
                    <h1 className="text-gray-500 font-light text-sm">
                      {item?.card?.info?.itemAttribute?.vegClassifier}
                    </h1>
                    <button onClick={()=>handleRemoveItem(item)} className=" w-32 text-white bg-orange-600 px-2 py-1 rounded-md">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="border border-gray-100 py-3 px-5 w-60">
          <h1 className="text-2xl font-bold pb-4">Bill Details</h1>
          <h3 className="text-lg">Items Total </h3>
          <div className="flex items-center justify-between"> 
          <h3 className="text-lg">GST Bill</h3>
          <h3 className="text-lg"> {GSTPrice}</h3>
          </div>
          <div className="flex items-center justify-between"> 
          <h3 className="text-lg">Total Ammount</h3>
          <h3 className="text-lg">  {totalprice}</h3>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Cart;
