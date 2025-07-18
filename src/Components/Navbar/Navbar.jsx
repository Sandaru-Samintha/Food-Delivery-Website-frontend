import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { assets } from '../../assets/assets';
import "./Navbar.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";


function Navbar({setShowLogin}) {

  const [menu,setMenu]=useState("Home")
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <div className='navbar'>
      <Link to="/"><img src={assets.logo} alt=""  className="logo"  /></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href="#explore-menu" onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
        <a href="#app-download" onClick={()=>setMenu("Mobile App")} className={menu==="Mobile App"?"active":""}>Mobile App</a>
        <a href="#footer" onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</a>
      </ul>
      
      <div className='navbar-right'>
        <CiSearch className='navbar-icon'/>
        <div className='navbar-search-icon'>
          <Link to="/cart"><FaShoppingCart  className='navbar-icon'/></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>

    </div>
  )
}

export default Navbar