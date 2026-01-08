import React from 'react'
import "./Tash.css";
import img3 from "../imgs/img3.png";
const Tash = () => {
  return (
    <div className='Container5'>
      <img className='tash__img' src={img3} alt="" />
      <div className="">
      <h1 className='tash__text2' >Toshkent</h1>
      <p className='tash__text1' >Tasviriy san’at va dizayn sohasida innovatsion yechimlar, yuqori sifatli xizmatlar va ijodiy qo‘llab-quvvatlashni taqdim etamiz. Bizning jamoamiz sizning tasviriy ijodiyatingizni yangi bosqichga olib chiqishga tayyor.</p>
      <button className='tash__btn' >Batafsil</button>
      </div>
    </div>
  )
}

export default Tash
