import React from 'react';
import "./Sharhlar.css"; 
import img4 from "../imgs/img4.png"; 
import img5 from "../imgs/bg3.png"; 

const Sharhlar = () => {
  return (
    <div className='Container7'>
      <h1 className='sharh__text1'>Biz Haqimizda Sharhlar</h1>
      
      <div className="sharh__flex">
        <div className="sharh__images">
          <img className='sharh__img1' src={img4} alt="Asosiy rasm" />
          <img className='sharh__img2' src={img5} alt="Fon rasmi" />
        </div>

        <div className="sharh__content">
          <p className='sharh__text2'>
            Tasviriy san’at va dizayn sohasida innovatsion yechimlar, yuqori sifatli 
            xizmatlar va ijodiy qo‘llab-quvvatlashni taqdim etamiz. Bizning jamoamiz 
            sizning tasviriy ijodiyatingizni yangi bosqichga olib chiqishga tayyor.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sharhlar;