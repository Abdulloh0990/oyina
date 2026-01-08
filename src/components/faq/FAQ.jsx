import React from 'react';
import "./FAQ.css";
const FAQ = () => {
  return (
    <div className="Container8">
      <h1 className="faq__text1">FAQ</h1>
      
      <div className="faq__wrapper">
        
        <div className="faq__list">
          <div className="faq__card active">
            <div className="faq__num">1</div>
            <p className="faq__question">Tasviriyoyina.uz qanday xizmatlarni taqdim etadi?</p>
            <span className="faq__icon">−</span>
          </div>

          <div className="faq__card">
            <div className="faq__num">2</div>
            <p className="faq__question">Xizmatlarni qanday buyurtma qilish mumkin?</p>
            <span className="faq__toggle-icon">+</span>
          </div>

          <div className="faq__card">
            <div className="faq__num">3</div>
            <p className="faq__question">Xizmatlar uchun narxlar qanday hisoblanadi?</p>
            <span className="faq__toggle-icon">+</span>
          </div>

          <div className="faq__card">
            <div className="faq__num">4</div>
            <p className="faq__question">San'at asarlarini yaratishda qanday uslubda ishlaysiz?</p>
            <span className="faq__icon">+</span>
          </div>

          <div className="faq__card">
            <div className="faq__num">5</div>
            <p className="faq__question">Ishlar qancha vaqt davomida tayyorlanadi?</p>
            <span className="faq__icon">+</span>
          </div>
        </div>

        <div className="faq__display">
          <p>
            Biz grafik dizayn, san'at asarlari yaratish, raqamli san'at, animatsiya 
            va brendni rivojlantirish bo'yicha xizmatlar taqdim etamiz.
          </p>
        </div>

      </div>
    </div>
  );
}

export default FAQ;