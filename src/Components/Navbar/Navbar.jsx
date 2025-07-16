import React from 'react'
import { assets } from '../../assets/assets'

function Navbar() {
  return (
    <div>
      <img src={assets.logo} alt="" style={{width:150,height:100}} />
    </div>
  )
}

export default Navbar