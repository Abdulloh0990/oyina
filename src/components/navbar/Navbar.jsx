import React from 'react'
import "./Navbar.css";
import logo1 from "../imgs/logo.png";
const Navbar = () => {
  return (
    <div className="Container1">
        <img src={logo1} alt="logo" />
      <ul>
        <li>
            <a href="#">Asosiy</a>
        </li>
         <li>
            <a href="#">Kun Yangiliklari</a>
        </li> <li>
            <a href="#">Biz Haqimizda</a>
        </li> <li>
            <a href="#">Portfolio</a>
        </li>
      </ul>
      <button className='nav__btn' >Bog’lanish</button>
    </div>
  )
}

export default Navbar
