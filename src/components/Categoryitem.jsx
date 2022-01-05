import { InsertEmoticon } from '@mui/icons-material'
import React from 'react'
import { Responsive } from '../Responsive'
const Categoryitem = ({item}) => {
    return (
        <div className='container-category-item'>
          
          <img className='imagecat' src={item.img} ></img>
          <div className='infocat'>
              <h1 className='titlecat'>{item.title} </h1>
               <button className='buttoncat'>SHOP NOW</button>
          </div>
         
        </div>
    )
}

export default Categoryitem
