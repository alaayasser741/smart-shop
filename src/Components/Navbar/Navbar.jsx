/* eslint linebreak-style: ["error", "windows"] */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(true);
  // ! SVG Icons
  const userIcon = () => (
    <svg className="hover:fill-color-main transition-all cursor-pointer" width="18" height="18" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="user">
        <path id="Vector" d="M20.9033 21V19C20.9033 17.9391 20.4819 16.9217 19.7317 16.1716C18.9816 15.4214 17.9642 15 16.9033 15H8.90332C7.84245 15 6.82504 15.4214 6.07489 16.1716C5.32475 16.9217 4.90332 17.9391 4.90332 19V21" stroke={toggleMenu ? 'black' : 'white'} strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path id="Vector_2" d="M12.9033 11C15.1125 11 16.9033 9.20914 16.9033 7C16.9033 4.79086 15.1125 3 12.9033 3C10.6942 3 8.90332 4.79086 8.90332 7C8.90332 9.20914 10.6942 11 12.9033 11Z" stroke={toggleMenu ? 'black' : 'white'} strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
  const heartIcon = () => (
    <svg className="hover:fill-color-main transition-all cursor-pointer" width="18" height="18" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="Vector" d="M20.2913 3.49659C19.7805 2.9856 19.1741 2.58024 18.5066 2.30368C17.8392 2.02711 17.1238 1.88477 16.4013 1.88477C15.6788 1.88477 14.9634 2.02711 14.2959 2.30368C13.6285 2.58024 13.022 2.9856 12.5113 3.49659L11.4513 4.55659L10.3913 3.49659C9.3596 2.4649 7.96032 1.8853 6.50129 1.8853C5.04226 1.8853 3.64298 2.4649 2.61129 3.49659C1.5796 4.52828 1 5.92756 1 7.38659C1 8.84562 1.5796 10.2449 2.61129 11.2766L3.67129 12.3366L11.4513 20.1166L19.2313 12.3366L20.2913 11.2766C20.8023 10.7658 21.2076 10.1594 21.4842 9.49195C21.7608 8.82449 21.9031 8.10908 21.9031 7.38659C21.9031 6.6641 21.7608 5.94869 21.4842 5.28124C21.2076 4.61378 20.8023 4.00735 20.2913 3.49659Z" stroke={toggleMenu ? 'black' : 'white'} strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const cartIcon = () => (
    <svg className="hover:fill-color-main transition-all cursor-pointer" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="cart">
        <path id="Vector" d="M9 22.5C9.55228 22.5 10 22.0523 10 21.5C10 20.9477 9.55228 20.5 9 20.5C8.44772 20.5 8 20.9477 8 21.5C8 22.0523 8.44772 22.5 9 22.5Z" stroke={toggleMenu ? 'black' : 'white'} strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path id="Vector_2" d="M20 22.5C20.5523 22.5 21 22.0523 21 21.5C21 20.9477 20.5523 20.5 20 20.5C19.4477 20.5 19 20.9477 19 21.5C19 22.0523 19.4477 22.5 20 22.5Z" stroke={toggleMenu ? 'black' : 'white'} strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path id="Vector_3" d="M1 1.5H5L7.68 14.89C7.77144 15.3504 8.02191 15.764 8.38755 16.0583C8.75318 16.3526 9.2107 16.509 9.68 16.5H19.4C19.8693 16.509 20.3268 16.3526 20.6925 16.0583C21.0581 15.764 21.3086 15.3504 21.4 14.89L23 6.5H6" stroke={toggleMenu ? 'black' : 'white'} strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
  const searchIcon = () => (
    <svg className="hover:fill-color-main transition-all cursor-pointer" width="18" height="18" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Group 9291">
        <path id="Vector" d="M9.90332 17C14.3216 17 17.9033 13.4183 17.9033 9C17.9033 4.58172 14.3216 1 9.90332 1C5.48504 1 1.90332 4.58172 1.90332 9C1.90332 13.4183 5.48504 17 9.90332 17Z" stroke={toggleMenu ? 'black' : 'white'} strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path id="Vector_2" d="M19.9037 19.0004L15.5537 14.6504" stroke={toggleMenu ? 'black' : 'white'} strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
  const menuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
  const switchToggleMenu = () => !toggleMenu;
  return (
    <nav className="py-16  flex justify-between container mx-auto px-10 sm:px-20 md:px-0">
      <div className="nav__links flex gap-3 md:gap-14 items-center">
        <h1><Link to="/"><img src={logo} alt="logo" /></Link></h1>
        <ul className={toggleMenu ? 'md:flex gap-3 xl:gap-6 text-base md:relative md:start-0 fixed -start-56' : 'bg-color-alt gap-6 p-10 flex flex-col fixed top-0 bottom-0 text-white justify-start start-0 z-50'}>
          <li><Link className="hover:text-color-main transition-colors" to="/">الرئيسية</Link></li>
          <li><Link className="hover:text-color-main transition-colors" to="/product">المنتجات</Link></li>
          <li><Link className="hover:text-color-main transition-colors" to="services">الخدمات</Link></li>
          <li><Link className="hover:text-color-main transition-colors" to="about">نبذة عنا</Link></li>
          <li><Link className="hover:text-color-main transition-colors" to="polices">الشروط والاحكام</Link></li>
          <li><Link className="hover:text-color-main transition-colors" to="blog">المدونة</Link></li>
          <li><Link className="hover:text-color-main transition-colors" to="contact">اتصل بنا</Link></li>
        </ul>
      </div>
      <div className={toggleMenu ? 'nav__profile md:flex gap-3 hidden' : 'fixed z-50 bottom-0 py-10 flex start-10 gap-3'}>
        <span>
          {searchIcon()}
        </span>
        <span>
          {userIcon()}
        </span>
        <span>
          {heartIcon()}
        </span>
        <span>
          {cartIcon()}
        </span>
      </div>
      <span
        className="md:hidden"
        onClick={() => { setToggleMenu(!toggleMenu); }}
        role="button"
        tabIndex="0"
        onKeyUp={switchToggleMenu}
      >
        {menuIcon()}
      </span>
      <div
        onClick={() => { setToggleMenu(true); }}
        className={toggleMenu ? 'hidden opacity-0' : 'bg-black opacity-80 w-full h-full fixed top-0 start-0'}
        role="button"
        tabIndex="-100"
        onKeyUp={switchToggleMenu}
        aria-label="Overlay"
      />
    </nav>
  );
}

export default Navbar;