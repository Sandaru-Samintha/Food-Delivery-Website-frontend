import React from 'react'
import "./Header.css"


function Header() {
  return (
    <div className='header'>
      <div className='header-content'>
        <h2>Order your favourite food here</h2>
        <p>Craving something tasty? We bring your favorite meals from top local restaurants straight to your door—hot, fresh, and fast. Whether you're at home, at work, or anywhere in between, we’ve got your hunger covered. Order now and enjoy the flavor of convenience!</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header