import React from 'react'

function MenuContainer({link, icon}) {
  return (
    <li>
       <a href={link}>
           <span>{icon}</span>
       </a>
    </li>
  )
}

export default MenuContainer