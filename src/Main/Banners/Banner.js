import React from 'react'
import ShopAllBestBtn from './ShopAllBestBtn'
import "./Banners.css"
import TopBaner from './TopBaner'
import Markes from './Markes'
import SameDayCom from './SameDayCom'
import Birthday from './Birthday'
import Visit from './Visit'


const Banner = () => {
  return (
    <div className='banner'>
        <ShopAllBestBtn/>
        <TopBaner/>
        <Markes/>
    <SameDayCom/>
   <Birthday/>
  <Visit/>
    </div>
  )
}

export default Banner