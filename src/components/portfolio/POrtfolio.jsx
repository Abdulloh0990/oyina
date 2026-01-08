import React from 'react'
import "./POrtfolio.css";
import card1 from "../imgs/card1.png";
import card2 from "../imgs/card2.png";
import card3 from "../imgs/card3.png";
import card4 from "../imgs/card4.png";
import card5 from "../imgs/card5.png";
import card6 from "../imgs/card6.png";      
const POrtfolio = () => {
  return (
    <div className='Container6' >
      <h1 className='port__text' >Portfoliyamiz</h1>
      <div className="port_imgs">
      <img className='port__img1' width={372} src={card1} alt="" />
      <img className='port__img2' src={card2} alt="" />
        <img className='port__img3' width={439} height={324} src={card3} alt="" />
        <img className='port__img4' src={card4} alt="" />
        <img className='port__img5' width={439} height={324} src={card5} alt="" />
        <img className='port__img6' src={card6} alt="" />
    </div>
    </div>
  )
}

export default POrtfolio
