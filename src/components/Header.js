import { SearchRounded, ShoppingCartRounded, BarChart } from '@mui/icons-material'
import logo, profile from '../images/logo.jpg'
import {logo, profile from '../images/profile.jpg'
import React from 'react'

function Header() {
  return (
    <header>
        <img src={logo} alt="" className='logo'/>

        <div className="inputBox">
            <SearchRounded className='search-icon' />
            <input type="text" placeholder="search"/>
        </div>

        <div className="shoppingCart">
          <ShoppingCartRounded className='cart' />
          <div className="cart_content">
            <p>2</p>
          </div>
        </div>

        <div className="profileContainer">
           <div className="imageBox">
             <img src={profile} alt= "" className='profilePic'/>
           </div>
           <h2 className="userName">Seremba Patrick</h2>
        </div>

        <div className="toggleMenu">
          <BarChart className='toggleIcon' />
        </div>
    </header>
  )
}

export default Header