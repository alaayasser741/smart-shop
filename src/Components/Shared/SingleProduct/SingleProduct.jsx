/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint linebreak-style: ["error", "windows"] */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Rate from 'rc-rate';
import ProductSlider from '../productSlider/ProductSlider';
import 'rc-rate/assets/index.css';
import headerImg from '../../../assets/product-hero.png';
import './style.scss';

const heartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="hover:fill-color-main transition-all cursor-pointer hover:stroke-color-alt" id="Vector" d="M20.2913 3.49659C19.7805 2.9856 19.1741 2.58024 18.5066 2.30368C17.8392 2.02711 17.1238 1.88477 16.4013 1.88477C15.6788 1.88477 14.9634 2.02711 14.2959 2.30368C13.6285 2.58024 13.022 2.9856 12.5113 3.49659L11.4513 4.55659L10.3913 3.49659C9.3596 2.4649 7.96032 1.8853 6.50129 1.8853C5.04226 1.8853 3.64298 2.4649 2.61129 3.49659C1.5796 4.52828 1 5.92756 1 7.38659C1 8.84562 1.5796 10.2449 2.61129 11.2766L3.67129 12.3366L11.4513 20.1166L19.2313 12.3366L20.2913 11.2766C20.8023 10.7658 21.2076 10.1594 21.4842 9.49195C21.7608 8.82449 21.9031 8.10908 21.9031 7.38659C21.9031 6.6641 21.7608 5.94869 21.4842 5.28124C21.2076 4.61378 20.8023 4.00735 20.2913 3.49659Z" stroke="black" fill="#ccc" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
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
const facebookIcon = () => (
  <svg width="36" height="35" viewBox="0 0 59 58" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Facebook - Original" clipPath="url(#clip0_204_2348)">
      <path id="Vector" d="M58.333 29C58.333 12.9837 45.3493 0 29.333 0C13.3167 0 0.333008 12.9837 0.333008 29C0.333008 43.4745 10.9378 55.4721 24.8018 57.6477V37.3828H17.4385V29H24.8018V22.6109C24.8018 15.3428 29.1314 11.3281 35.7555 11.3281C38.9274 11.3281 42.2471 11.8945 42.2471 11.8945V19.0312H38.5904C34.988 19.0312 33.8643 21.2669 33.8643 23.5625V29H41.9072L40.6215 37.3828H33.8643V57.6477C47.7282 55.4721 58.333 43.4745 58.333 29Z" fill="#1877F2" />
      <path id="Vector_2" d="M40.6205 37.3848L41.9062 29.002H33.8633V23.5645C33.8633 21.2711 34.987 19.0332 38.5894 19.0332H42.2461V11.8965C42.2461 11.8965 38.9275 11.3301 35.7545 11.3301C29.1304 11.3301 24.8008 15.3448 24.8008 22.6129V29.002H17.4375V37.3848H24.8008V57.6497C27.8034 58.1194 30.8607 58.1194 33.8633 57.6497V37.3848H40.6205Z" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0_204_2348">
        <rect width="58" height="58" fill="white" transform="translate(0.333008)" />
      </clipPath>
    </defs>
  </svg>
);
const twitterIcon = () => (
  <svg width="36" height="35" viewBox="0 0 56 58" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Twitter">
      <g id="Twitter_2">
        <path id="back" d="M0 29C0 12.9837 12.536 0 28 0C43.464 0 56 12.9837 56 29C56 45.0163 43.464 58 28 58C12.536 58 0 45.0163 0 29Z" fill="#55ACEE" />
        <path id="Shape" d="M27.1614 23.572L27.2202 24.5754L26.2409 24.4525C22.6763 23.9815 19.5623 22.3842 16.9182 19.7014L15.6256 18.3703L15.2926 19.3533C14.5876 21.5445 15.038 23.8587 16.5069 25.4151C17.2904 26.2752 17.1141 26.398 15.7627 25.8861C15.2926 25.7222 14.8813 25.5994 14.8422 25.6608C14.7051 25.8042 15.1751 27.6677 15.5472 28.405C16.0565 29.4289 17.0945 30.4324 18.2305 31.0263L19.1901 31.4973L18.0542 31.5178C16.9574 31.5178 16.9182 31.5382 17.0357 31.9683C17.4274 33.2994 18.9747 34.7125 20.6982 35.3268L21.9125 35.7569L20.8549 36.4122C19.2881 37.3542 17.447 37.8867 15.606 37.9277C14.7247 37.9481 14 38.03 14 38.0915C14 38.2963 16.3894 39.4431 17.78 39.8936C21.9517 41.2248 26.9068 40.6513 30.628 38.3782C33.2721 36.7604 35.9161 33.5452 37.15 30.4324C37.8159 28.7736 38.4818 25.7427 38.4818 24.2887C38.4818 23.3467 38.5405 23.2238 39.6373 22.0975C40.2836 21.4421 40.8908 20.7254 41.0083 20.5206C41.2042 20.1315 41.1846 20.1315 40.1857 20.4796C38.5209 21.094 38.2859 21.0121 39.1085 20.0905C39.7157 19.4352 40.4403 18.2474 40.4403 17.8993C40.4403 17.8379 40.1465 17.9403 39.8136 18.1246C39.4611 18.3294 38.6776 18.6365 38.0901 18.8209L37.0325 19.169L36.0728 18.4932C35.544 18.1246 34.7997 17.715 34.408 17.5921C33.4092 17.3054 31.8815 17.3464 30.9806 17.674C28.5324 18.5956 26.9851 20.9711 27.1614 23.572Z" fill="white" />
      </g>
    </g>
  </svg>

);
const whatsappIcon = () => (
  <svg width="36" height="35" viewBox="0 0 59 58" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Component">
      <g id="WhatsApp">
        <path id="Oval" d="M29.5 58C45.7924 58 59 45.0163 59 29C59 12.9837 45.7924 0 29.5 0C13.2076 0 0 12.9837 0 29C0 45.0163 13.2076 58 29.5 58Z" fill="#25D366" />
        <path id="Page-1" fillRule="evenodd" clipRule="evenodd" d="M30.4722 45.1338H30.465C27.5292 45.1328 24.6444 44.4087 22.0823 43.0348L12.7832 45.4328L15.2718 36.497C13.7367 33.8818 12.929 30.9153 12.9303 27.876C12.9341 18.3682 20.8033 10.6328 30.4721 10.6328C35.1647 10.6348 39.569 12.4306 42.8808 15.6902C46.1927 18.9496 48.0156 23.282 48.0138 27.8896C48.0099 37.3953 40.1438 45.1299 30.4722 45.1338ZM22.5131 39.913L23.0455 40.2236C25.2841 41.5295 27.8501 42.2205 30.4663 42.2215H30.4722C38.5082 42.2215 45.0487 35.7917 45.0519 27.8886C45.0535 24.0589 43.5384 20.4579 40.7857 17.7487C38.033 15.0395 34.3723 13.5467 30.478 13.5454C22.4358 13.5454 15.8952 19.9746 15.892 27.877C15.8909 30.5853 16.6617 33.2228 18.1212 35.5047L18.4678 36.047L16.9949 41.336L22.5131 39.913ZM38.7093 31.6023C39.015 31.7475 39.2214 31.8456 39.3096 31.9903C39.4191 32.1699 39.4191 33.0326 39.0541 34.0393C38.6887 35.0457 36.9376 35.9643 36.0954 36.088C35.3403 36.199 34.3848 36.2452 33.3348 35.9172C32.6982 35.7187 31.8818 35.4536 30.8361 35.0096C26.7271 33.2654 23.9502 29.3504 23.4254 28.6104C23.3886 28.5586 23.3629 28.5223 23.3486 28.5035L23.345 28.4989C23.1131 28.1946 21.5589 26.1561 21.5589 24.0462C21.5589 22.0615 22.5506 21.0212 23.0071 20.5424C23.0384 20.5096 23.0671 20.4794 23.0929 20.4517C23.4946 20.0204 23.9695 19.9125 24.2617 19.9125C24.5539 19.9125 24.8464 19.9152 25.1018 19.9278C25.1333 19.9293 25.166 19.9291 25.1999 19.9289C25.4554 19.9275 25.7738 19.9256 26.0879 20.6674C26.2088 20.9529 26.3856 21.3761 26.5721 21.8225C26.9493 22.7251 27.366 23.7224 27.4393 23.8667C27.5489 24.0824 27.6219 24.3339 27.4758 24.6216C27.4539 24.6648 27.4336 24.7055 27.4142 24.7444C27.3045 24.9646 27.2238 25.1266 27.0375 25.3404C26.9643 25.4244 26.8886 25.515 26.8129 25.6057C26.6621 25.7862 26.5114 25.9667 26.3801 26.0953C26.1606 26.3101 25.9322 26.5432 26.1879 26.9746C26.4436 27.406 27.3232 28.8169 28.6262 29.9595C30.0269 31.1876 31.2443 31.7067 31.8613 31.9699C31.9818 32.0212 32.0794 32.0629 32.151 32.0981C32.5892 32.3138 32.8449 32.2777 33.1005 31.9903C33.3562 31.7027 34.1962 30.7321 34.4884 30.3008C34.7805 29.8696 35.0728 29.9414 35.4745 30.0851C35.8764 30.229 38.0313 31.2713 38.4696 31.4869C38.5552 31.5291 38.6351 31.5671 38.7093 31.6023Z" fill="#FDFDFD" />
      </g>
    </g>
  </svg>
);
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
function SingleProduct() {
  const productId = localStorage.getItem('product__id');
  const [productData, setProductData] = useState([]);
  const [productComments, setProductComments] = useState([]);
  const [productQTY, setProductQTY] = useState(1);
  const [mainImage, setMainImage] = useState(`.${productData.img}`);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productSize, setProductSize] = useState('');
  const [productColor, setProductColor] = useState('');
  const [productImg, setProductImg] = useState('');
  const [toggleProductDetails, setToggleProductDetails] = useState(3);
  const [rating, setRating] = useState(0);
  const [commentTitle, setCommentTitle] = useState('');
  const [commentDetails, setCommentDetails] = useState('');
  const [commentUserName, setCommentUserName] = useState('');
  const [commentEmail, setCommentEmail] = useState('');
  const [loading, setLoading] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
    console.log(value);
  };

  const handleImageClick = (newImage) => {
    setMainImage(`.${newImage}`);
  };
  function incrementQTY() {
    setProductQTY(productQTY + 1);
  }
  function decrementQTY() {
    if (productQTY > 1) {
      setProductQTY(productQTY - 1);
    }
  }
  useEffect(() => {
    axios.get(`http://localhost:3005/product/${productId}`)
      .then((res) => {
        setProductData(res.data);
        setProductName(res.data.name);
        setProductImg(res.data.img);
        setProductPrice(res.data.priceAfterDiscount);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios.get('http://localhost:3005/comments')
      .then((res) => {
        setProductComments(res.data);
      })
      .catch((err) => console.log(err));
  }, [loading]);
  const ProductCartData = {
    name: productName,
    price: productPrice,
    QTY: productQTY,
    img: productImg,
    size: productSize,
    color: productColor,
  };
  const addToCart = () => {
    axios.post('http://localhost:3005/cart', ProductCartData)
      .then((response) => {
        console.log('New Product added successfully to cart:', response.data);
      })
      .catch((error) => {
        console.error('Error adding Product:', error);
      });
  };
  const now = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString('ar-EG', options);
  const ProductReview = {
    username: commentUserName,
    date: formattedDate,
    title: commentTitle,
    comment: commentDetails,
    rate: rating,
  };
  const addRate = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3005/comments', ProductReview).then((res) => { console.log(res.data); setLoading(1); }).catch((err) => { console.log(err); });
  };

  function handleSizeClick(size) {
    setProductSize(size);
    const spanElements = document.querySelectorAll('.size-selector');
    spanElements.forEach((element) => {
      if (element.textContent !== size) {
        element.classList.remove('bg-color-main');
      } else {
        element.classList.add('bg-color-main');
      }
    });
  }
  function handleColorClick(color) {
    setProductColor(color);
    const spanElements = document.querySelectorAll('.color-selector');
    spanElements.forEach((element) => {
      if (element.textContent !== color) {
        element.classList.remove('bg-color-main');
      } else {
        element.classList.add('bg-color-main');
      }
    });
  }
  return (
    <div className="single__product">
      <div className="product__header mt-5 mb-10 flex justify-center items-center flex-col gap-4">
        <img src={headerImg} alt="headerImg" className="w-full" />
        <h2 className="text-white md:text-5xl sm:text-3xl text-xl font-extrabold">تسوق احدث المنتجات العصرية</h2>
        <span className="text-red-500 md:text-2xl sm:text-xl text-sm font-medium">
          <Link to="/" className="text-white">الرئيسية</Link>
          {' '}
          /
          {' '}
          <Link to="/product" className="text-white">المنتجات</Link>
          {' '}
          /
          {' '}
          <span className="text-white">{productData.name}</span>
        </span>
      </div>
      <div className="container mx-auto px-4 sm:px-10 md:px-12 lg:px-16 xl:px-20 mb-24">
        <div className="product__Details flex gap-8 flex-col sm:flex-row mb-20">
          <div className="product__images" style={{ maxWidth: '310px' }}>
            <div className="img__main" style={{ maxWidth: '300px' }}>
              <img src={`.${productData.img}`} alt="mainImg" className="w-full" />
            </div>
            <div className="img__more grid lg:grid-cols-4 gap-4 mt-4 grid-cols-3">
              <img
                src={`.${productData.img}`}
                alt="productImg"
                className={`border border-gray-300 w-24 h-24 object-contain cursor-pointer ${mainImage === productData.img ? 'border-blue-500' : ''}`}
                onClick={() => handleImageClick(productData.img)}
              />
              <img
                src="https://cdn1.vectorstock.com/i/1000x1000/87/20/default-placeholder-businesswoman-half-length-por-vector-21188720.jpg"
                alt="productImg"
                className={`border border-gray-300 w-24 h-24 object-contain cursor-pointer ${mainImage === 'https://cdn1.vectorstock.com/i/1000x1000/87/20/default-placeholder-businesswoman-half-length-por-vector-21188720.jpg' ? 'border-blue-500' : ''}`}
                onClick={() => handleImageClick('https://cdn1.vectorstock.com/i/1000x1000/87/20/default-placeholder-businesswoman-half-length-por-vector-21188720.jpg')}
              />
              <img
                src="https://cdn1.vectorstock.com/i/1000x1000/87/20/default-placeholder-businesswoman-half-length-por-vector-21188720.jpg"
                alt="productImg"
                className={`border border-gray-300 w-24 h-24 object-contain cursor-pointer ${mainImage === 'https://cdn1.vectorstock.com/i/1000x1000/87/20/default-placeholder-businesswoman-half-length-por-vector-21188720.jpg' ? 'border-blue-500' : ''}`}
                onClick={() => handleImageClick('https://cdn1.vectorstock.com/i/1000x1000/87/20/default-placeholder-businesswoman-half-length-por-vector-21188720.jpg')}
              />
            </div>
          </div>

          <div className="single__product_info">
            <h3 className="text-4xl font-bold mb-4">{productData.name}</h3>
            <div className="single__product_price flex items-center gap-8 mb-4">
              <span className="text-xl font-normal text-gray-500">
                {productData.priceAfterDiscount}
                {' '}
                ج.م
              </span>
              <del className="text-xl font-normal text-gray-500">
                {productData.priceBeforeDiscount}
                {' '}
                ج.م
              </del>
            </div>
            <div className="product__stars flex mb-4">
              {typeof productData.stars === 'number' && !Number.isNaN(productData.stars) && (
                <>
                  {[...Array(Math.max(0, productData.stars))].map((_, index) => (
                    <span key={index}>{GoldenStarIcon()}</span>
                  ))}
                  {[...Array(Math.max(0, 5 - productData.stars))].map((_, index) => (
                    <span key={index}>{GrayStarIcon()}</span>
                  ))}
                  <span>1203</span>
                </>
              )}
            </div>
            <p className="text-lg text-gray-500 mb-4">
              مثل هذا النص أو العديد
              من النصوص الأخرى إضافة
              إلى زيادة عدد الحروف التى يولدها التطبيق
            </p>
            <div className="color mb-10">
              <h4 className="text-xl font-bold mb-4">اللون :</h4>
              <div className="rangeSliderContainer flex gap-2 items-center flex-wrap">
                <span
                  onClick={() => handleColorClick('red')}
                  className={`border w-6 h-6 font-bold rounded-full bg-red-500 cursor-pointer color-selector ${productColor === 'red' ? 'border-2 border-gray-800' : ''
                  }`}
                />
                <span
                  onClick={() => handleColorClick('white')}
                  className={`border w-6 h-6 font-bold rounded-full bg-white cursor-pointer color-selector ${productColor === 'white' ? 'border-2 border-gray-800' : ''
                  }`}
                />
                <span
                  onClick={() => handleColorClick('blue')}
                  className={`border w-6 h-6 font-bold rounded-full bg-blue-500 cursor-pointer color-selector ${productColor === 'blue' ? 'border-2 border-gray-800' : ''
                  }`}
                />
                <span
                  onClick={() => handleColorClick('purple')}
                  className={`border w-6 h-6 font-bold rounded-full bg-purple-500 cursor-pointer color-selector ${productColor === 'purple' ? 'border-2 border-gray-800' : ''
                  }`}
                />
                <span
                  onClick={() => handleColorClick('green')}
                  className={`border w-6 h-6 font-bold rounded-full bg-green-500 cursor-pointer color-selector ${productColor === 'green' ? 'border-2 border-gray-800' : ''
                  }`}
                />
              </div>
            </div>
            <div className="size mb-10">
              <h4 className="text-xl font-bold mb-4">
                المقاس :
              </h4>
              <div className="rangeSliderContainer flex gap-2 items-center flex-wrap">
                <span
                  onClick={() => handleSizeClick('S')}
                  className={`border w-10 h-10 font-bold flex justify-center items-center hover:text-white transition-colors cursor-pointer size-selector hover:bg-color-main ${productSize === 'S' ? 'bg-color-main text-white' : ''
                  }`}
                >
                  S
                </span>
                <span
                  onClick={() => handleSizeClick('M')}
                  className={`border w-10 h-10 font-bold flex justify-center items-center hover:text-white transition-colors cursor-pointer size-selector hover:bg-color-main ${productSize === 'M' ? 'bg-color-main text-white' : ''
                  }`}
                >
                  M
                </span>
                <span
                  onClick={() => handleSizeClick('L')}
                  className={`border w-10 h-10 font-bold flex justify-center items-center hover:text-white transition-colors cursor-pointer size-selector hover:bg-color-main ${productSize === 'L' ? 'bg-color-main text-white' : ''
                  }`}
                >
                  L
                </span>
                <span
                  onClick={() => handleSizeClick('XL')}
                  className={`border w-10 h-10 font-bold flex justify-center items-center hover:text-white transition-colors cursor-pointer size-selector hover:bg-color-main ${productSize === 'XL' ? 'bg-color-main text-white' : ''
                  }`}
                >
                  XL
                </span>
                <span
                  onClick={() => handleSizeClick('2XL')}
                  className={`border w-10 h-10 font-bold flex justify-center items-center hover:text-white transition-colors cursor-pointer size-selector hover:bg-color-main ${productSize === '2XL' ? 'bg-color-main text-white' : ''
                  }`}
                >
                  2XL
                </span>
              </div>
            </div>
            <div className="add__product flex items-center gap-4 mb-4">
              <div className="custom-number-input h-10 w-32" dir="ltr">
                <div className="flex flex-row h-10 w-full rounded-xl overflow-hidden relative bg-transparent">
                  <button
                    type="button"
                    onClick={() => decrementQTY()}
                    className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                  >
                    <span
                      className="m-auto text-2xl font-thin"
                    >
                      −

                    </span>
                  </button>
                  <input type="number" className="focus:outline-none text-center w-full bg-white border font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={productQTY} readOnly />
                  <button
                    type="button"
                    onClick={() => incrementQTY()}
                    className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                  >
                    <span
                      className="m-auto text-2xl font-thin"
                    >
                      +

                    </span>
                  </button>
                </div>
              </div>
              <button onClick={() => addToCart()} type="button" className="bg-color-main hover:bg-color-alt transition-colors px-4 py-2 rounded-xl text-white">اضف للسلة</button>
            </div>
            <div className="product__fav flex items-center gap-4 mb-4">
              <span>{heartIcon()}</span>
              <span>اضف للمفضلة</span>
            </div>
            <div className="product__social_share">
              <h4 className="text-xl font-bold mb-4"> شارك عبر مواقع التواصل </h4>
              <div className="product__social flex items-center gap-4">
                <a href="https://twitter.com/alaayasser741" target="_blank" rel="noreferrer">
                  <span>{twitterIcon()}</span>
                </a>
                <a href="https://www.facebook.com/alaayasser741/" target="_blank" rel="noreferrer">
                  <span>{facebookIcon()}</span>
                </a>
                <a href="https://wa.me/2001556774943" target="_blank" rel="noreferrer">
                  <span>{whatsappIcon()}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="single__product_moreDetails">
          <ul className="product__toggle border-b pb-4 flex justify-center items-center gap-4 text-sm mb-10">
            <li onClick={() => setToggleProductDetails(1)} className={toggleProductDetails === 1 ? 'toggle--border' : ''}>الوصف</li>
            <li onClick={() => setToggleProductDetails(2)} className={toggleProductDetails === 2 ? 'toggle--border' : ''}>معلومات اضافية</li>
            <li onClick={() => setToggleProductDetails(3)} className={toggleProductDetails === 3 ? 'toggle--border' : ''}>تقيمات المنتج</li>
          </ul>
          <div className="product__review flex gap-4 flex-col md:flex-row">
            <div className="product__comments_container basis-1/2">
              <span className="text-xl font-medium block mb-2">
                {productComments && productComments.length}
                {' '}
                تقيمات
              </span>
              <div className="product__comments">
                {productComments && productComments.slice().reverse().map(({
                  id, username, comment, rate, date, title,
                }) => (
                  <div key={id} className="comment__box mt-8 flex gap-4 items-start px-2">
                    <div className="comment__img overflow-hidden">
                      <img src="https://static.wixstatic.com/media/472d0e_533fa71841b94e619cc309a85904093f~mv2.png/v1/fill/w_640,h_640,fp_0.50_0.50,lg_1,q_90,enc_auto/472d0e_533fa71841b94e619cc309a85904093f~mv2.png" alt="profileImg" />
                    </div>
                    <div className="comment__info">
                      <h3 className="text-xl font-medium mb-2">{title}</h3>
                      <p className="text-lg text-gray-500 mb-2">{comment}</p>
                      <div className="product__stars flex mb-2">
                        {[...Array(rate)].map((_, index) => (
                          <span key={index}>{GoldenStarIcon()}</span>
                        ))}
                        {[...Array(5 - rate)].map((_, index) => (
                          <span key={index}>{GrayStarIcon()}</span>
                        ))}
                      </div>
                      <div className="comment__details flex gap-4">
                        <h4 className="text-sm">{username}</h4>
                        <span className="text-sm text-gray-500">{date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="product__add_comment flex flex-col gap-4 basis-1/2">
              <h3>اضف تقييم</h3>
              <div className="add_rate">
                <Rate count={5} value={rating} onChange={handleRatingChange} />
              </div>
              <form onSubmit={addRate} className="flex flex-col gap-4">
                <input required className="border rounded-3xl py-2 px-4 w-full focus:outline-none" type="text" value={commentTitle} placeholder="عنوان التقييم" onChange={(e) => setCommentTitle(e.target.value)} />
                <textarea required className="resize-none border rounded-3xl py-2 px-4 w-full h-36 focus:outline-none" placeholder="اكتب تقييمك هنا" value={commentDetails} onChange={(e) => setCommentDetails(e.target.value)} />
                <div className="user_info flex  justify-between gap-8">
                  <input required className="border rounded-3xl py-2 px-4 w-full focus:outline-none" type="text" placeholder="اسمك" value={commentUserName} onChange={(e) => setCommentUserName(e.target.value)} />
                  <input required className="border rounded-3xl py-2 px-4 w-full focus:outline-none" type="email" placeholder="بريدك الالكتروني" value={commentEmail} onChange={(e) => setCommentEmail(e.target.value)} />
                </div>
                <div className="add__comment_btn">
                  <input type="submit" value="أضف الآن" className="bg-color-main text-white transition-colors hover:bg-color-alt py-2 px-8 rounded-3xl cursor-pointer" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-10 md:px-12 lg:px-16 xl:px-20 mb-24">
        <div className="my-7  text-center">
          <span className="text-xl font-bold border-b-2 border-cyan-300">منتجات مشابهة</span>
        </div>
        <ProductSlider shared noNavigation />
      </div>
    </div>
  );
}

export default SingleProduct;
