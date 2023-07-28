/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint linebreak-style: ["error", "windows"] */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductSection from '../Shared/Product/ProductSection';
import ProductSlider from '../Shared/productSlider/ProductSlider';
import MultiRangeSlider from '../Shared/MultiSlider/MultiRangeSlider';
import headerImg from '../../assets/product-hero.png';
import './style.scss';

function index() {
  const [Layout, setLayout] = useState('col');
  const [prodPerPage, setProdPerPage] = useState(8);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [dropdowns, setDropdowns] = useState({
    accessories: false,
    clothes: false,
    electronics: false,
    furniture: false,
    shoes: false,
    jewelry: false,
    others: false,
  });
  const [filter, setFilter] = useState([]);
  const toggleDropdown = (category) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };
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
  function listIcon() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
        <path opacity="0.5" d="M-2.84144e-07 6.49955C-3.1322e-07 5.83436 0.37561 5.21859 0.979758 4.86617L1.10376 4.7992L9.93528 0.182559L10.0261 0.142244C10.3424 0.0269113 10.6844 -0.0193171 11.0242 0.00733232C11.3641 0.0339818 11.6921 0.132754 11.9815 0.295583C12.271 0.458413 12.5136 0.68068 12.6896 0.944232C12.8656 1.20779 12.97 1.50515 12.9942 1.81204L13 1.94143L13 11.0447L12.9978 11.0765L12.9993 11.1493C12.9828 11.439 12.8948 11.7216 12.7419 11.9767C12.589 12.2318 12.375 12.453 12.1154 12.6241L12.0001 12.6949C11.7303 12.8498 11.4258 12.9488 11.1086 12.9848C10.7913 13.0207 10.4691 12.9928 10.1653 12.903L10.0254 12.8562L9.93528 12.8172L1.11602 8.20575C0.777915 8.03709 0.49608 7.78982 0.299817 7.48965C0.103553 7.18948 2.60038e-05 6.84737 -2.84172e-07 6.4989L-2.84144e-07 6.49955Z" fill="black" />
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
          <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-3/12 mt-4 sm:mt-0 px-6">
            <div className="category mb-10">
              <h3 className="text-2xl font-bold text-gray-500 flex items-center gap-2 mb-4">
                <span>
                  {listIcon()}
                </span>
                {' '}
                <span>
                  الفئات
                </span>
              </h3>
              <ul className="flex flex-col gap-2">
                {/* Accessories */}
                <li
                  className="text-sm cursor-pointer hover:text-color-alt text-gray-500 flex items-center justify-between"
                  onClick={() => toggleDropdown('accessories')}
                >
                  <span>الاكسسوارت</span>
                  <span>{dropdowns.accessories ? '-' : '+'}</span>
                </li>
                <div
                  className={`dropdown-content transition-max-height duration-300 ease-in-out overflow-hidden ${dropdowns.accessories ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <ul className="flex flex-col gap-2">
                    <li className="text-xs cursor-pointer hover:text-color-alt text-gray-500 ms-4">- نظارة شمسية</li>
                    <li className="text-xs cursor-pointer hover:text-color-alt text-gray-500 ms-4">- ايس كاب</li>
                    <li className="text-xs cursor-pointer hover:text-color-alt text-gray-500 ms-4">- سلاسل</li>
                    <li className="text-xs cursor-pointer hover:text-color-alt text-gray-500 ms-4">- خواتم</li>
                  </ul>
                </div>
                {/* clothes */}
                <li
                  onClick={() => toggleDropdown('clothes')}
                  className="text-sm cursor-pointer hover:text-color-alt text-gray-500 flex items-center justify-between"
                >
                  <span>ملابس</span>
                  {dropdowns.clothes ? '-' : '+'}
                </li>
                <div
                  className={`dropdown-content transition-max-height duration-300 ease-in-out overflow-hidden ${dropdowns.clothes ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <ul className="flex flex-col gap-2">
                    <li
                      onClick={() => setFilter((prevFilter) => (prevFilter.includes('men') ? prevFilter.filter((value) => value !== 'men') : [...prevFilter, 'men']))}
                      className={`text-xs cursor-pointer hover:text-color-alt text-gray-500 ms-4 ${filter.includes('men') ? 'text-color-alt font-bold' : ''}`}
                    >
                      - رجالي
                    </li>
                    <li
                      onClick={() => setFilter((prevFilter) => (prevFilter.includes('women') ? prevFilter.filter((value) => value !== 'women') : [...prevFilter, 'women']))}
                      className={`text-xs cursor-pointer hover:text-color-alt text-gray-500 ms-4 ${filter.includes('women') ? 'text-color-alt font-bold' : ''}`}
                    >
                      - حريمي

                    </li>
                    <li
                      onClick={() => setFilter((prevFilter) => (prevFilter.includes('children') ? prevFilter.filter((value) => value !== 'children') : [...prevFilter, 'children']))}
                      className={`text-xs cursor-pointer hover:text-color-alt text-gray-500 ms-4 ${filter.includes('children') ? 'text-color-alt font-bold' : ''}`}
                    >
                      - اطفال

                    </li>
                  </ul>
                </div>
                {/* electronics */}
                <li
                  onClick={() => toggleDropdown('electronics')}
                  className="text-sm cursor-pointer hover:text-color-alt text-gray-500 flex items-center justify-between"
                >
                  <span>الالكترونيات</span>
                  {dropdowns.electronics ? '-' : '+'}
                </li>
                <div
                  className={`dropdown-content transition-max-height duration-300 ease-in-out overflow-hidden ${dropdowns.electronics ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <ul className="flex flex-col gap-2">
                    <li className="text-xs cursor-pointer hover:text-color-alt text-gray-500 ms-4">- لابتوب</li>
                    <li className="text-xs cursor-pointer hover:text-color-alt text-gray-500 ms-4">- هواتف</li>
                    <li className="text-xs cursor-pointer hover:text-color-alt text-gray-500 ms-4">- شاشات</li>
                    <li className="text-xs cursor-pointer hover:text-color-alt text-gray-500 ms-4">- اجهزة منزلية</li>
                  </ul>
                </div>
                {/* furniture */}
                <li
                  onClick={() => toggleDropdown('furniture')}
                  className="text-sm cursor-pointer hover:text-color-alt text-gray-500 flex items-center justify-between"
                >
                  <span>الاثاث</span>
                  {dropdowns.furniture ? '-' : '+'}
                </li>
                <div
                  className={`dropdown-content transition-max-height duration-300 ease-in-out overflow-hidden ${dropdowns.furniture ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <ul className="flex flex-col gap-2">
                    <li className="text-xs cursor-pointer hover:text-color-alt text-gray-500 ms-4">- مكاتب</li>
                    <li className="text-xs cursor-pointer hover:text-color-alt text-gray-500 ms-4">- كراسي</li>
                    <li className="text-xs cursor-pointer hover:text-color-alt text-gray-500 ms-4">- طاولات</li>
                    <li className="text-xs cursor-pointer hover:text-color-alt text-gray-500 ms-4">- تربيزات بلياردو وبينج</li>
                  </ul>
                </div>
                {/* shoes */}
                <li
                  onClick={() => toggleDropdown('shoes')}
                  className="text-sm cursor-pointer hover:text-color-alt text-gray-500 flex items-center justify-between"
                >
                  <span>الاحذية</span>
                  {dropdowns.shoes ? '-' : '+'}
                </li>
                <div
                  className={`dropdown-content transition-max-height duration-300 ease-in-out overflow-hidden ${dropdowns.shoes ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <ul className="flex flex-col gap-2">
                    <li className="text-xs cursor-pointer hover:text-color-alt text-gray-500 ms-4">- نايكي</li>
                    <li className="text-xs cursor-pointer hover:text-color-alt text-gray-500 ms-4">- اديداس</li>
                    <li className="text-xs cursor-pointer hover:text-color-alt text-gray-500 ms-4">- جوتشي</li>
                    <li className="text-xs cursor-pointer hover:text-color-alt text-gray-500 ms-4">- صيني مضروب (ممنوعات يا صحبي)</li>
                  </ul>
                </div>
                {/* jewelry */}
                <li
                  onClick={() => toggleDropdown('jewelry')}
                  className="text-sm cursor-pointer hover:text-color-alt text-gray-500 flex items-center justify-between"
                >
                  <span>المجوهرات</span>
                  {dropdowns.jewelry ? '-' : '+'}
                </li>
                <div
                  className={`dropdown-content transition-max-height duration-300 ease-in-out overflow-hidden ${dropdowns.jewelry ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <ul className="flex flex-col gap-2">
                    <li className="text-xs cursor-pointer hover:text-color-alt text-gray-500 ms-4">- خواتم</li>
                    <li className="text-xs cursor-pointer hover:text-color-alt text-gray-500 ms-4">- سلاسل</li>
                  </ul>
                </div>
                {/* others */}
                <li
                  onClick={() => toggleDropdown('others')}
                  className="text-sm cursor-pointer hover:text-color-alt text-gray-500 flex items-center justify-between"
                >
                  <span>اخري</span>
                  {dropdowns.others ? '-' : '+'}
                </li>
                <div
                  className={`dropdown-content transition-max-height duration-300 ease-in-out overflow-hidden ${dropdowns.others ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <ul className="flex flex-col gap-2">
                    <li className="text-xs cursor-pointer hover:text-color-alt text-gray-500 ms-4">- اغذية</li>
                    <li className="text-xs cursor-pointer hover:text-color-alt text-gray-500 ms-4">- ادوات تنظيف</li>
                    <li className="text-xs cursor-pointer hover:text-color-alt text-gray-500 ms-4">- العاب اطفال</li>
                  </ul>
                </div>
              </ul>
            </div>
            <div className="price mb-20">
              <h3 className="text-2xl font-bold text-gray-500 flex items-center gap-2 mb-4">
                <span>
                  {listIcon()}
                </span>
                {' '}
                <span>
                  السعر
                </span>
              </h3>
              <div className="rangeSliderContainer">
                <MultiRangeSlider
                  min={0}
                  max={1000}
                  onChange={({ min, max }) => {
                    setMinValue(min);
                    setMaxValue(max);
                  }}
                />
              </div>
            </div>
            <div className="size mb-10">
              <h3 className="text-2xl font-bold text-gray-500 flex items-center gap-2 mb-4">
                <span>
                  {listIcon()}
                </span>
                {' '}
                <span>
                  المقاس
                </span>
              </h3>
              <div className="rangeSliderContainer flex gap-2 items-center flex-wrap">
                <span
                  className={`border w-10 h-10 font-bold flex justify-center items-center hover:text-white hover:bg-color-main transition-colors cursor-pointer ${filter.includes('S') ? 'bg-color-main text-white' : ''}`}
                  onClick={() => setFilter((prevFilter) => (prevFilter.includes('S') ? prevFilter.filter((value) => value !== 'S') : [...prevFilter, 'S']))}
                >
                  S
                </span>
                <span
                  className={`border w-10 h-10 font-bold flex justify-center items-center hover:text-white hover:bg-color-main transition-colors cursor-pointer ${filter.includes('M') ? 'bg-color-main text-white' : ''}`}
                  onClick={() => setFilter((prevFilter) => (prevFilter.includes('M') ? prevFilter.filter((value) => value !== 'M') : [...prevFilter, 'M']))}
                >
                  M
                </span>
                <span
                  className={`border w-10 h-10 font-bold flex justify-center items-center hover:text-white hover:bg-color-main transition-colors cursor-pointer ${filter.includes('L') ? 'bg-color-main text-white' : ''}`}
                  onClick={() => setFilter((prevFilter) => (prevFilter.includes('L') ? prevFilter.filter((value) => value !== 'L') : [...prevFilter, 'L']))}
                >
                  L
                </span>
                <span
                  className={`border w-10 h-10 font-bold flex justify-center items-center hover:text-white hover:bg-color-main transition-colors cursor-pointer ${filter.includes('XL') ? 'bg-color-main text-white' : ''}`}
                  onClick={() => setFilter((prevFilter) => (prevFilter.includes('XL') ? prevFilter.filter((value) => value !== 'XL') : [...prevFilter, 'XL']))}
                >
                  XL
                </span>
                <span
                  className={`border w-10 h-10 font-bold flex justify-center items-center hover:text-white hover:bg-color-main transition-colors cursor-pointer ${filter.includes('2XL') ? 'bg-color-main text-white' : ''}`}
                  onClick={() => setFilter((prevFilter) => (prevFilter.includes('2XL') ? prevFilter.filter((value) => value !== '2XL') : [...prevFilter, '2XL']))}
                >
                  2XL
                </span>

              </div>
            </div>
            <div className="color mb-10">
              <h3 className="text-2xl font-bold text-gray-500 flex items-center gap-2 mb-4">
                <span>
                  {listIcon()}
                </span>
                {' '}
                <span>
                  اللون
                </span>
              </h3>
              <div className="rangeSliderContainer flex gap-2 items-center flex-wrap">
                <span
                  onClick={() => setFilter((prevFilter) => (prevFilter.includes('red') ? prevFilter.filter((value) => value !== 'red') : [...prevFilter, 'red']))}
                  className="border w-6 h-6 font-bold rounded-full bg-red-500 cursor-pointer"
                />
                <span
                  onClick={() => setFilter((prevFilter) => (prevFilter.includes('white') ? prevFilter.filter((value) => value !== 'white') : [...prevFilter, 'white']))}
                  className="border w-6 h-6 font-bold rounded-full bg-white cursor-pointer"
                />
                <span
                  onClick={() => setFilter((prevFilter) => (prevFilter.includes('blue') ? prevFilter.filter((value) => value !== 'blue') : [...prevFilter, 'blue']))}
                  className="border w-6 h-6 font-bold rounded-full bg-blue-500 cursor-pointer"
                />
                <span
                  onClick={() => setFilter((prevFilter) => (prevFilter.includes('purple') ? prevFilter.filter((value) => value !== 'purple') : [...prevFilter, 'purple']))}
                  className="border w-6 h-6 font-bold rounded-full bg-purple-500 cursor-pointer"
                />
                <span
                  onClick={() => setFilter((prevFilter) => (prevFilter.includes('green') ? prevFilter.filter((value) => value !== 'green') : [...prevFilter, 'green']))}
                  className="border w-6 h-6 font-bold rounded-full bg-green-500 cursor-pointer"
                />
              </div>
            </div>
            <div className="brand mb-10">
              <h3 className="text-2xl font-bold text-gray-500 flex items-center gap-2 mb-4">
                <span>
                  {listIcon()}
                </span>
                {' '}
                <span>
                  العلامة التجارية
                </span>
              </h3>
              <ul className="flex flex-col gap-2">
                <li className="text-sm cursor-pointer hover:text-color-alt text-gray-500">
                  <span>سوني</span>
                </li>
                <li className="text-sm cursor-pointer hover:text-color-alt text-gray-500">
                  <span>لينوفو</span>
                </li>
                <li className="text-sm cursor-pointer hover:text-color-alt text-gray-500">
                  <span>جونسون & هاندسون</span>
                </li>
                <li className="text-sm cursor-pointer hover:text-color-alt text-gray-500">
                  <span>ابل</span>
                </li>
                <li className="text-sm cursor-pointer hover:text-color-alt text-gray-500">
                  <span>جوجل</span>
                </li>
                <li className="text-sm cursor-pointer hover:text-color-alt text-gray-500">
                  <span>سامسونح</span>
                </li>
                <li className="text-sm cursor-pointer hover:text-color-alt text-gray-500">
                  <span>اخري</span>
                </li>
              </ul>
            </div>
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
            <ProductSection
              pagination
              prodPerPage={prodPerPage}
              styleLayout={Layout}
              filter={filter}
              maxValue={maxValue}
              minValue={minValue}
            />
          </div>
        </div>
        <div className="more__product w-full">
          <div className="my-7  text-center">
            <span className="text-xl font-bold border-b-2 border-cyan-300">منتجات مشابهة</span>
          </div>
          <ProductSlider />
        </div>
      </div>
    </div>
  );
}

export default index;
