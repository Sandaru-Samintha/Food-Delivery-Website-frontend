import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { assets } from '../../assets/assets';
import "./Navbar.css";
import { useState } from "react";


function Navbar() {

  const [menu,setMenu]=useState("Home")
  return (
    <div className='navbar'>
      <img src={assets.logo} alt=""  className="logo"  />
      <ul className='navbar-menu'>
        <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
        <li onClick={()=>setMenu("Mobile App")} className={menu==="Mobile App"?"active":""}>Mobile App</li>
        <li onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</li>
      </ul>
      
      <div className='navbar-right'>
        <CiSearch className='navbar-icon'/>
        <div className='navbar-search-icon'>
          <FaShoppingCart  className='navbar-icon'/>
          <div className='dot'></div>
        </div>
        <button>Sign in</button>
      </div>

    </div>
  )
}

export default Navbar