import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magni eum animi, dignissimos aspernatur laudantium quod sapiente voluptates amet perspiciatis excepturi hic unde, ratione ut? Commodi ex deserunt sapiente fugiat?</p>
            <div className="explore-menu-list">
                {
                    menu_list.map((item, index) => {
                        return (
                            <div onClick={() => setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)} key={`item:${index}`} className='explore-menu-list-item'>
                                <img className={category===item.menu_name?'active':''} src={item.menu_image} alt='menu-img' />
                                <p>{item.menu_name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu
