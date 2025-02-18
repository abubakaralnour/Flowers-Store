import React from 'react'
import "./Main.css";
import MainImg from './Middle part/MainImg';
import Banner from './Banners/Banner';
import Cards from './Card/Cards';
import TextAreaCard from './TextAreaAndCard/TextAreaCard';


const Main = () => {
  return (
    <div className='main'>
       
    <MainImg/>
    <Cards/>
    <Banner/>
    <TextAreaCard/>

    </div>
  )
}

export default Main