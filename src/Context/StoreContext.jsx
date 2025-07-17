import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

function StoreContextProvider(props) {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    //if there is no add items in the cart , newly add the product in the cart
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 })); //if there is the items alredy in the the cart value is increasing by when adding
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 })); // when we remove the items in the crt
  };

  useEffect(()=>{
    console.log(cartItems);
  },[cartItems])

  //using useContext we can pass the value in any where (any pages)
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
}
export default StoreContextProvider;
