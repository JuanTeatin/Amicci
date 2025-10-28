import React from 'react'

const MenuList = ( {menuList, filterItems }) => {
    const [active, setActive] = React.useState(0);
    
  return (
    <>
        {menuList.map((category, index) => {
            return (
                <li 
                    className={`${active === index ? 'active-item' : ''
                    } menu-list-item`}
                    onClick={() => { 
                        filterItems(category)
                        setActive(index);
                    }}
                    key={index}
                >
                    {category}
                </li>
            );
        })}
    </>
  );
};

export default MenuList