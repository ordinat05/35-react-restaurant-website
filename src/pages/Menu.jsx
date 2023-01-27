import React from 'react'
import { MenuList } from "../helpers/MenuList"

function Menu() {
  return (
    <div className='menu'>
      🍀 This Component Menu.jsx
      <h1 className='menuTitle'>Our Menu</h1>
      <div className='menuList'>
        {MenuList.map((menuItem, key) => {
          return <div className='menuItem' key={key}>
            <div><img src={menuItem.image} /></div>
            <h3>{menuItem.name}</h3>
            <p>{menuItem.price} &#8378;</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Menu