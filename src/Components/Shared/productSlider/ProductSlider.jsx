/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
/* eslint linebreak-style: ["error", "windows"] */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
// eslint-disable-next-line import/no-unresolved
import { Navigation } from 'swiper/modules';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';
import './style.scss';

function GoldenStarIcon() {
  return (
    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="star" clipPath="url(#clip0_545_1641)">
        <g id="Group">
          <path id="Vector" d="M10.5217 15.8352L6.91759 18.0151C6.25756 18.4146 5.44988 17.824 5.62358 17.0771L6.57889 12.978L3.39162 10.2163C2.80975 9.71257 3.1224 8.75726 3.88665 8.69647L8.08133 8.3404L9.72273 4.46705C10.018 3.76359 11.0254 3.76359 11.3207 4.46705L12.9621 8.33171L17.1568 8.68778C17.921 8.74857 18.2337 9.70389 17.6518 10.2076L14.4645 12.9693L15.4199 17.0685C15.5935 17.8153 14.7859 18.4059 14.1258 18.0064L10.5217 15.8352Z" fill="#FFB800" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_545_1641">
          <rect width="20.8431" height="20.8431" fill="white" transform="matrix(-1 0 0 1 20.9434 0.835938)" />
        </clipPath>
      </defs>
    </svg>
  );
}
function GrayStarIcon() {
  return (
    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="star" clipPath="url(#clip0_545_1617)">
        <g id="Group">
          <path id="Vector" d="M10.5461 15.8352L6.942 18.0151C6.28197 18.4146 5.4743 17.824 5.64799 17.0771L6.6033 12.978L3.41604 10.2163C2.83417 9.71257 3.14681 8.75726 3.91106 8.69647L8.10574 8.3404L9.74714 4.46705C10.0424 3.76359 11.0498 3.76359 11.3451 4.46705L12.9865 8.33171L17.1812 8.68778C17.9454 8.74857 18.2581 9.70389 17.6762 10.2076L14.489 12.9693L15.4443 17.0685C15.618 17.8153 14.8103 18.4059 14.1503 18.0064L10.5461 15.8352Z" fill="#323232" fillOpacity="0.5" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_545_1617">
          <rect width="20.8431" height="20.8431" fill="white" transform="matrix(-1 0 0 1 20.9678 0.835938)" />
        </clipPath>
      </defs>
    </svg>
  );
}
function cartIcon() {
  return (
    <svg className="hover:fill-color-main transition-all cursor-pointer" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="cart">
        <path id="Vector" d="M9 22.5C9.55228 22.5 10 22.0523 10 21.5C10 20.9477 9.55228 20.5 9 20.5C8.44772 20.5 8 20.9477 8 21.5C8 22.0523 8.44772 22.5 9 22.5Z" stroke="black" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path id="Vector_2" d="M20 22.5C20.5523 22.5 21 22.0523 21 21.5C21 20.9477 20.5523 20.5 20 20.5C19.4477 20.5 19 20.9477 19 21.5C19 22.0523 19.4477 22.5 20 22.5Z" stroke="black" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path id="Vector_3" d="M1 1.5H5L7.68 14.89C7.77144 15.3504 8.02191 15.764 8.38755 16.0583C8.75318 16.3526 9.2107 16.509 9.68 16.5H19.4C19.8693 16.509 20.3268 16.3526 20.6925 16.0583C21.0581 15.764 21.3086 15.3504 21.4 14.89L23 6.5H6" stroke="black" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
function loadingProductBox() {
  return (
    <div className="product__box product__box--loading relative">
      <div className="product__img mb-3">
        {/* Placeholder for product image */}
        <div className="animate-pulse bg-gray-300 h-40 w-full" />
      </div>
      <div className="product__info flex items-start justify-between">
        <div className="product__title">
          <div className="product__stars flex mb-2">
            {/* Placeholder for star icons */}
            <div className="animate-pulse bg-gray-300 h-4 w-12" />
          </div>
          {/* Placeholder for product title */}
          <div className="animate-pulse bg-gray-300 h-6 w-1/2 mb-2" />
          <div className="product__size flex gap-2">
            {/* Placeholder for product size options */}
            <div className="animate-pulse bg-gray-300 h-8 w-8" />
            <div className="animate-pulse bg-gray-300 h-8 w-8" />
            <div className="animate-pulse bg-gray-300 h-8 w-8" />
          </div>
        </div>
        <div className="product__price flex flex-col items-end gap-1">
          {/* Placeholder for product price */}
          <div className="animate-pulse bg-gray-300 h-6 w-16" />
          <div className="animate-pulse bg-gray-300 h-6 w-16" />
        </div>
      </div>
      {/* Placeholder for cart icon */}
      <div className="animate-pulse bg-gray-300 h-8 w-8 rounded-full absolute top-2 start-2" />
    </div>
  );
}

function ProductSlider() {
  const [data, setData] = useState([]);
  // ! Fetch product data
  useEffect(() => {
    axios.get('http://localhost:3005/product')
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);
  // * SVG Icon

  return (
    <Swiper
                // install Swiper modules
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay
      navigation
      className="mb-24 swiper__slider"
      breakpoints={{
        470: {
          width: 470,
          slidesPerView: 2,
        },
        768: {
          width: 768,
          slidesPerView: 3,
        },
      }}
    >
      {data.length > 0 ? data.map(({
        id, name, size, stars, priceAfterDiscount, priceBeforeDiscount, img,
      }) => (
        <SwiperSlide key={id}>
          <div className="product__box relative">
            <div className="product__img mb-3">
              <img src={img} alt="productImg" />
            </div>
            <div className="product__info flex items-start justify-between">
              <div className="product__title">
                <div className="product__stars flex mb-2">
                  {[...Array(stars)].map((_, index) => (
                    <span key={index}>{GoldenStarIcon()}</span>
                  ))}
                  {[...Array(5 - stars)].map((_, index) => (
                    <span key={index}>{GrayStarIcon()}</span>
                  ))}
                </div>
                <h3 className="font-medium mb-2">{name}</h3>
                <div className="product__size flex gap-2">
                  {size.map((s, index) => (
                    <span
                      key={index}
                      className="flex justify-center items-center w-8 h-8 border font-medium border-black"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="product__price flex flex-col items-end gap-1">
                <span className="text-color-main">
                  {priceAfterDiscount}
                  ج.م
                </span>
                <del className="text-color-main">
                  {priceBeforeDiscount}
                  ج.م
                </del>
              </div>
            </div>
            <span className="p-2 border rounded-full hover:bg-color-main transition-all border-gray-400 absolute top-2 start-2 cursor-pointer">{cartIcon()}</span>
          </div>
        </SwiperSlide>
      )) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {loadingProductBox()}
          {loadingProductBox()}
          {loadingProductBox()}
          {loadingProductBox()}
        </div>
      )}
    </Swiper>
  );
}

export default ProductSlider;
