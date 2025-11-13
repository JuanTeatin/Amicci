import React from 'react'
import SectionTitle from '../title/SectionTitle';
import MenuList from './MenuList';
import MenuItem from './MenuItem';
import { menu } from '../../Data';
import { useState } from 'react';

import "./menu.css";

const allMenuList = ['All', ...new Set(menu.map((menu) => menu.category))];

const Menu = () => {
  const [menuList, setMenuList] = React.useState(allMenuList);  
  const [menuItems, setMenuItems] = React.useState(menu);  

  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(menu);
      return;
    }
  
  const navMenuItems = menu.filter((item) => item.category === category);
    setMenuItems(navMenuItems);
  };

  return (
    <section className="menu section">
      <div className="container">
        <div className="menu-header">
          <SectionTitle
            subtitle='Nuestro menu' 
            title={
              <>
                Adentrate a ver <span className='ourMenu'> Nuestro menú</span> 
              </>
            } 
          />

          <ul className="menu-list">
            <MenuList menuList={menuList} filterItems={filterItems} />
          </ul>
        </div>

        <div className="menu-container grid">
          <MenuItem menuItems={menuItems} />
        </div>
      </div>
    </section>
  )
}

export default Menu