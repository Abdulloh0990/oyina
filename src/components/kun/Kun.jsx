import React from 'react'
import "./Kun.css";
import bg2 from "../imgs/bg2.png";
const Kun = () => {
  return (
    <div className="Container3"> 
    <div className="kun__flex">
      <h1  className='kun__text1'  >Kun Yangligi</h1>
      <button className='kun__btn' > 🎈 Filter</button>
    </div>
    <img className='kun__img1' src={bg2} alt="" />
    </div>
  )
}

export default Kun
