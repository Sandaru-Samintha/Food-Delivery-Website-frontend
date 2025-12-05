import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

function StoreContextProvider(props) {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000";
  const [token,setToken] = useState("")

  const[food_list,setFoodList]=useState([])

  const addToCart = async (itemId) => {
    if (!itemId) return; // guard against undefined/falsy ids
    const id = String(itemId);
    // safe functional update
    setCartItems((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    if (token) {
      try {
        await axios.post(url + "/api/cart/add", { itemId: id }, { headers: { token } });
      } catch (err) {
        console.warn("addToCart sync failed:", err?.message || err);
      }
    }
  };

  const removeFromCart = async(itemId) => {
    if (!itemId) return;
    const id = String(itemId);
    setCartItems((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current - 1);
      const copy = { ...prev };
      if (next > 0) copy[id] = next;
      else delete copy[id]; // remove zero entries
      return copy;
    });
    if (token) {
      try {
        await axios.post(url + "/api/cart/remove", { itemId: id }, { headers: { token } });
      } catch (err) {
        console.warn("removeFromCart sync failed:", err?.message || err);
      }
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      const qty = cartItems[item];
      if (qty > 0) {
        let itemInfo = food_list.find((product) => String(product._id) === String(item));
        if (!itemInfo) continue; // skip missing products
        const price = Number(itemInfo.price) || 0;
        totalAmount += price * qty;
      }
    }
    return totalAmount;
  };

  //use to fetch the food list from database 
  const fetchFoodList = async()=>{
    const response = await axios.get(url+"/api/food/list");
    setFoodList(response.data.data)
  }

  const loadCartData = async (token)=>{
    try {
      const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
      const raw = response?.data?.cartData || {};
      const cleaned = {};
      Object.entries(raw).forEach(([k, v]) => {
        if (!k) return;
        const key = String(k);
        const qty = Number(v) || 0;
        if (key === "undefined" || qty <= 0) return;
        cleaned[key] = qty;
      });
      setCartItems(cleaned);
    } catch (err) {
      console.warn("loadCartData failed:", err?.message || err);
      setCartItems({});
    }
  }


  // when refresh the page automatically logout,so we need do stop this using that method
  useEffect(()=>{
    async function loadData() {
      await fetchFoodList();
      if(localStorage.getItem("token"))
      {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"))
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
