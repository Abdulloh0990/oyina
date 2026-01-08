import React from 'react';
import "./Contact.css";
import img5 from "../imgs/img5.png"

const Contact = () => {
  return (
    <div className="Container9">
      <h2 className="contact__text">Biz bilan bog'laning</h2>
      
      <div className="contact__wrapper">
        <form className="contact__form">
          <div className="input__group">
            <label>Ism</label>
            <input type="text" placeholder="Ismingizni kiriting" />
          </div>

          <div className="input__group">
            <label>Email</label>
            <input type="email" placeholder="Emailingizni kiriting" />
          </div>

          <div className="input__group">
            <label>Telefon Raqam</label>
            <input type="text" defaultValue="+998" />
          </div>

          <div className="input__group">
            <label>Xabar</label>
            <textarea placeholder="Xabaringizni yozing"></textarea>
          </div>

          <button type="button" className="contact__btn">
            Biz bilan bog'laning
          </button>
        </form>

        <div className="contact__img">
          <img src={img5} alt="Biz bilan bog'laning" />
        </div>
      </div>
    </div>
  );
}

export default Contact;