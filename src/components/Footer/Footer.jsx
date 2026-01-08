import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer__section">
      <div className="footer__container">
        
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="logo__icon">TJ</span>
            <div>
              <h3>TASVIRIY OYINA</h3>
              <p>IJODIY UYISHMASI</p>
            </div>
          </div>
          <p className="footer__desc">
            Ijod va san'atga bag'ishlangan platforma, har bir asar va 
            dizaynning orqasida ilhom va kuchli g'oya turadi.
          </p>
          <div className="footer__socials">
            <i className="fab fa__telegram"></i>
            <i className="fas fa__phone"></i>
            <i className="fab fa__instagram"></i>
          </div>
        </div>

        <div className="footer__links">
          <a href="#">Asosiy</a>
          <a href="#">Xizmatlar</a>
          <a href="#">Biz Haqimizda</a>
        </div>

        <div className="footer__contact">
          <div className="contact__item">
            <i className="fas fa__phone"></i>
            <span>+998 99 999 99 99</span>
          </div>
          <div className="contact__item">
            <i className="far fa__envelope"></i>
            <span>example@gmail.com</span>
          </div>
          <div className="contact__item">
            <i className="fas fa__marker"></i>
            <span>O'zbekiston barcha hududlarda</span>
          </div>
        </div>

      </div>
      <div className="footer__bottom">
        <p>© 2025 Tasviriyoyina.uz. Barcha huquqlar himoyalangan.</p>
      </div>
    </footer>
  )
}

export default Footer