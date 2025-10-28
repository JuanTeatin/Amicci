import React from 'react'
import SectionTitle from '../title/SectionTitle';
import MenuList from './MenuList';
import MenuItem from './MenuItem';
import { menu } from '../../Data';

const Menu = () => {
  return (
    <section className="menu section">
      <div className="container">
        <div className="menu-header">
          <SectionTitle
            subtitle='Nuestro menu' 
            title={
              <>
                Adentrate a ver <span> Nuestro menú</span> 
              </>
            } 
          />

          <ul className="menu-list">
            <MenuList />
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Menu