import React from 'react'
import "./Jamoa.css";
import azo1 from "../imgs/azo1.png";
import azo2 from "../imgs/azo2.png";
import azo3 from "../imgs/azo3.png";

const Jamoa = () => {
  return (
    <div className="Container4"> 
    <h1 className='jamoa__text' >Bizning Jamoa</h1>
      
      <div className="jamoa__cards">
        <img className='jamoa__card1' src={azo1} alt="" />
        <img className='jamoa__card2' src={azo2} alt="" />
        <img className='jamoa__card3' src={azo3} alt="" />
        <img className='jamoa__card4' src={azo3} alt="" />

      </div>
    </div>
  )
}

export default Jamoa
