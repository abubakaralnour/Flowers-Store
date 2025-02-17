import React from 'react'
import "./Main.css";
import MainImg from './Middle part/MainImg';
import Banner from './Banners/Banner';
import Cards from './Card/Cards';

const Main = () => {
  return (
    <div className='main'>
       
    <MainImg/>
    <Cards/>
    <Banner/>
    </div>
  )
}

export default Main