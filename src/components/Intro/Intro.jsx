import React from 'react'
import "./Intro.css";
import bg1 from "../imgs/bg1.png";
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";

const Intro = () => {
  return (
    <div className="Container2">
      <img className='intro__img' src={bg1} alt="" />
      <h1 className='intro__text1' >San’at olamiga yo‘l oching</h1>
      <p  className='intro__text2' >Tasviriy san’at, dizayn va ijodiy ishlar uchun yagona platforma. Ilhom oling, o‘rganing va o‘z ijodingizni baham ko‘ring.</p>
      <button className='intro__btn' >Ko‘proq bilish</button>
      <div className="">
        <img className='intro__img1' src={img1} alt="" />
        <img className='intro__img2' src={img2} alt="" />

      </div>
    </div>
  )
}

export default Intro
