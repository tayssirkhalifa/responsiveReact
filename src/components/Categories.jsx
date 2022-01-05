import React from 'react'
import { categories } from '../data'
import Categoryitem from './Categoryitem'
import "./Categories.css"
const Categories = () => {
    return (
        <div  className='container-category'>
            {categories.map(item=>(
                <Categoryitem item={item}/>
            ))}
        </div>
    )
}

export default Categories
