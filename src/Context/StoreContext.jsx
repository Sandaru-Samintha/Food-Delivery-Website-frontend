import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

function StoreContextProvider(props) {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000";
  const [token,setToken] = useState("")

  const[food_list,setFoodList]=useState([])

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

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product.id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  }

  // useEffect(()=>{
  //   console.log(cartItems);
  // },[cartItems])

  //using useContext we can pass the value in any where (any pages)


//use to fetch the food list from database 
const fetchFoodList = async()=>{
  const response = await axios.get(url+"/api/food/list");
  setFoodList(response.data.data)
}


  // when refresh the page automatically logout,so we need do stop this using that method
  useEffect(()=>{
    async function loadData() {
      await fetchFoodList();
      if(localStorage.getItem("token"))
      {
        setToken(localStorage.getItem("token"));
      }
    }
    loadData();
  },[])
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
}
export default StoreContextProvider;
