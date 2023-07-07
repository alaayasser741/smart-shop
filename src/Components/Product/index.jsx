/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { Link } from 'react-router-dom';
import ProductSection from '../Shared/Product/ProductSection';
import ProductSlider from '../Shared/productSlider/ProductSlider';
import headerImg from '../../assets/product-hero.png';
import './style.scss';

function index() {
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
            <ProductSection pagination />
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
