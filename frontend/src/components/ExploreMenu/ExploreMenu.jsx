import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Feast Your Eyes on Our Menu</h1>
      <p className='explore-menu-text'> Our diverse menu is crafted to satisfy every craving, offering a rich array of dishes that cater to all tastes and preferences. From sizzling appetizers and hearty entrees to delectable desserts and refreshing beverages, each item is prepared with the finest ingredients and utmost care.</p>
    <div className="explore-menu-list">
        {menu_list && menu_list.map((item,index) => {
            return (
                <div onClick={ () => setCategory(prev=>prev===item.menu_name ? "All" : item.menu_name)}key={index} className="explore-menu-list-item">
                    <img className={category===item.menu_name ? "active" : ""}src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
    </div>
    <hr />
    </div>
  )
}

export default ExploreMenu
