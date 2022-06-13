import { SearchRounded, ShoppingCartRounded, BarChart } from '@mui/icons-material'
import React from 'react'

function Header() {
  return (
    <header>
        <img src="" alt="" />
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
             <img src="" alt= ""/>
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