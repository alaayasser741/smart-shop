/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint linebreak-style: ["error", "windows"] */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductSection from '../Shared/Product/ProductSection';
import ProductSlider from '../Shared/productSlider/ProductSlider';
import headerImg from '../../assets/product-hero.png';
import './style.scss';

function index() {
  const [Layout, setLayout] = useState('col');
  const [prodPerPage, setProdPerPage] = useState(8);

  const gridStyleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M4 11h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zM4 21h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1z" />
    </svg>

  );
  function ListStyleIcon() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M4 6h2v2H4zm0 5h2v2H4zm0 5h2v2H4zm16-8V6H8.023v2H18.8zM8 11h12v2H8zm0 5h12v2H8z" />
      </svg>
    );
  }
  return (
    <div className="product">
      <div className="product__header mt-5 mb-10 flex justify-center items-center flex-col gap-4">
        <img src={headerImg} alt="headerImg" className="w-full" />
        <h2 className="text-white md:text-5xl sm:text-3xl text-xl font-extrabold">تسوق احدث المنتجات العصرية</h2>
        <span className="text-red-500 md:text-2xl sm:text-xl text-sm font-medium">
          <Link to="/" className="text-white">الرئيسية</Link>
          {' '}
          /
          {' '}
          <span className="text-white">المنتجات</span>
        </span>
      </div>
      <div className="container mx-auto px-4 sm:px-10 md:px-12 lg:px-16 xl:px-20 mb-24">
        <div className="flex flex-wrap mb-24">
          <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-3/12 mt-4 sm:mt-0">
            Aside
          </div>
          <div className="w-full sm:w-3/4 md:w-3/4 lg:w-3/4 xl:w-9/12">
            <div className="product__style flex flex-row gap-4 flex-wrap justify-between border  py-2 px-4 rounded-lg mb-10">
              <div className="style__display items-center flex flex-row gap-4">
                <span className="text-sm">عرض</span>
                <span onClick={() => { setLayout('col'); }} className={Layout === 'col' ? 'hover:bg-color-main rounded-lg p-1 cursor-pointer fill-white hover:fill-white bg-color-main' : 'hover:bg-color-main rounded-lg p-1 cursor-pointer fill-black hover:fill-white'}>{gridStyleIcon()}</span>
                <span onClick={() => { setLayout('row'); }} className={Layout === 'row' ? 'hover:bg-color-main rounded-lg p-1 cursor-pointer fill-white hover:fill-white bg-color-main' : 'hover:bg-color-main rounded-lg p-1 cursor-pointer fill-black hover:fill-white'}>{ListStyleIcon()}</span>
              </div>
              <div className="style__show_product items-center flex flex-row gap-4">
                <span className="text-sm">مشاهدة</span>
                <ul className="flex flex-row  gap-4 text-gray-400 text-sm">
                  <li className={prodPerPage === 8 ? 'text-color-main cursor-pointer' : 'hover:text-color-main cursor-pointer'} onClick={() => { setProdPerPage(8); }}>8</li>
                  <li className={prodPerPage === 12 ? 'text-color-main cursor-pointer' : 'hover:text-color-main cursor-pointer'} onClick={() => { setProdPerPage(12); }}>12</li>
                  <li className={prodPerPage === 18 ? 'text-color-main cursor-pointer' : 'hover:text-color-main cursor-pointer'} onClick={() => { setProdPerPage(18); }}>18</li>
                  <li className={prodPerPage === 24 ? 'text-color-main cursor-pointer' : 'hover:text-color-main cursor-pointer'} onClick={() => { setProdPerPage(24); }}>24</li>
                  <li className={prodPerPage === 30 ? 'text-color-main cursor-pointer' : 'hover:text-color-main cursor-pointer'} onClick={() => { setProdPerPage(30); }}>30</li>
                </ul>
              </div>
              <div className="style__sorting flex items-center flex-row gap-4">
                <span className="text-sm">ترتيب حسب</span>
                <form>
                  <select className="bg-color-main text-white p-1 pe-12 rounded-lg focus:outline-0">
                    <option value="lower-price">الاقل سعرًا</option>
                    <option value="higher-price">الاعلي سعرًا</option>
                    <option value="lower-rate">الاقل تقيم</option>
                    <option value="higher-price">الاعلي تقيم</option>
                  </select>
                </form>
              </div>
            </div>
            <ProductSection pagination prodPerPage={prodPerPage} styleLayout={Layout} />
          </div>
        </div>
        <div className="more__product w-full">
          <ProductSlider />
        </div>
      </div>
    </div>
  );
}

export default index;
