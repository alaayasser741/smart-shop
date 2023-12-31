/* eslint linebreak-style: ["error", "windows"] */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { Navigation, Pagination } from 'swiper/modules';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductSection from '../Shared/Product/ProductSection';
import ProductSlider from '../Shared/productSlider/ProductSlider';
import heroImage from '../../assets/hero-image.png';
import heroImage2 from '../../assets/hero-image2.png';
import heroImage3 from '../../assets/hero-image3.png';
import discountImg1 from '../../assets/dress-discount.png';
import discountImg2 from '../../assets/children-discount.png';
import brand1 from '../../assets/brandlogo1.png';
import brand2 from '../../assets/brandlogo2.png';
import brand3 from '../../assets/brandlogo3.png';
import brand4 from '../../assets/brandlogo4.png';
import brand5 from '../../assets/brandlogo5.png';
import ads1 from '../../assets/home1.png';
import ads2 from '../../assets/home2.png';
import ads3 from '../../assets/home3.png';

// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';
import './style.scss';

const vanIcon = () => (
  <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Group 8955">
      <g id="Group 8954">
        <path id="Vector" d="M12.627 18.75V17.9788C12.201 17.9788 11.8558 18.3241 11.8558 18.75H12.627ZM26.377 18.75H27.1481C27.1481 18.3241 26.8029 17.9788 26.377 17.9788V18.75ZM26.377 21.25V20.4788C26.1724 20.4788 25.9763 20.5601 25.8316 20.7047C25.687 20.8493 25.6058 21.0455 25.6058 21.25H26.377ZM12.627 19.5212H26.377V17.9788H12.627V19.5212ZM25.6058 18.75V33.75H27.1481V18.75H25.6058ZM13.3981 31.25V18.75H11.8558V31.25H13.3981ZM26.377 22.0212H32.5176V20.4788H26.377V22.0212ZM36.8558 26.3594V31.25H38.3981V26.3594H36.8558ZM27.1481 33.75L27.1481 21.25H25.6058L25.6058 33.75L27.1481 33.75ZM33.8494 34.9725C33.1743 35.6476 32.0796 35.6476 31.4045 34.9725L30.3139 36.0631C31.5914 37.3405 33.6626 37.3405 34.94 36.0631L33.8494 34.9725ZM31.4045 32.5275C32.0796 31.8524 33.1743 31.8524 33.8494 32.5275L34.94 31.4369C33.6626 30.1595 31.5914 30.1595 30.3139 31.4369L31.4045 32.5275ZM18.8494 34.9725C18.1743 35.6476 17.0796 35.6476 16.4045 34.9725L15.3139 36.0631C16.5914 37.3405 18.6625 37.3405 19.94 36.0631L18.8494 34.9725ZM16.4045 32.5275C17.0796 31.8524 18.1743 31.8524 18.8494 32.5275L19.94 31.4369C18.6625 30.1595 16.5914 30.1595 15.3139 31.4369L16.4045 32.5275ZM33.8494 32.5275C34.1871 32.8653 34.3558 33.3064 34.3558 33.75H35.8981C35.8981 32.914 35.5786 32.0755 34.94 31.4369L33.8494 32.5275ZM34.3558 33.75C34.3558 34.1936 34.1871 34.6347 33.8494 34.9725L34.94 36.0631C35.5786 35.4245 35.8981 34.586 35.8981 33.75H34.3558ZM30.127 32.9788H26.377V34.5212H30.127V32.9788ZM31.4045 34.9725C31.0668 34.6347 30.8981 34.1936 30.8981 33.75H29.3558C29.3558 34.586 29.6753 35.4245 30.3139 36.0631L31.4045 34.9725ZM30.8981 33.75C30.8981 33.3064 31.0668 32.8653 31.4045 32.5275L30.3139 31.4369C29.6753 32.0755 29.3558 32.914 29.3558 33.75H30.8981ZM16.4045 34.9725C16.0668 34.6347 15.8981 34.1936 15.8981 33.75H14.3558C14.3558 34.586 14.6753 35.4245 15.3139 36.0631L16.4045 34.9725ZM15.8981 33.75C15.8981 33.3064 16.0668 32.8653 16.4045 32.5275L15.3139 31.4369C14.6753 32.0755 14.3558 32.914 14.3558 33.75H15.8981ZM26.377 32.9788H20.127V34.5212H26.377V32.9788ZM18.8494 32.5275C19.1871 32.8653 19.3558 33.3064 19.3558 33.75H20.8981C20.8981 32.914 20.5786 32.0755 19.94 31.4369L18.8494 32.5275ZM19.3558 33.75C19.3558 34.1936 19.1871 34.6347 18.8494 34.9725L19.94 36.0631C20.5786 35.4245 20.8981 34.586 20.8981 33.75H19.3558ZM36.8558 31.25C36.8558 32.2048 36.0818 32.9788 35.127 32.9788V34.5212C36.9336 34.5212 38.3981 33.0566 38.3981 31.25H36.8558ZM32.5176 22.0212C34.9135 22.0212 36.8558 23.9635 36.8558 26.3594H38.3981C38.3981 23.1116 35.7653 20.4788 32.5176 20.4788V22.0212ZM11.8558 31.25C11.8558 33.0566 13.3203 34.5212 15.127 34.5212V32.9788C14.1722 32.9788 13.3981 32.2048 13.3981 31.25H11.8558Z" fill="#7FD3DF" />
        <path id="Rectangle 8" d="M14.502 15C14.502 14.3096 15.0616 13.75 15.752 13.75V13.75C17.823 13.75 19.502 15.4289 19.502 17.5V18.75H18.252C16.1809 18.75 14.502 17.0711 14.502 15V15Z" stroke="#7FD3DF" strokeWidth="1.54236" strokeLinejoin="round" />
        <path id="Rectangle 9" d="M24.502 15C24.502 14.3096 23.9423 13.75 23.252 13.75V13.75C21.1809 13.75 19.502 15.4289 19.502 17.5V18.75H20.752C22.823 18.75 24.502 17.0711 24.502 15V15Z" stroke="#7FD3DF" strokeWidth="1.54236" strokeLinejoin="round" />
      </g>
    </g>
  </svg>
);
const mobileIcon = () => (
  <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="loma/line/mobile">
      <g id="mobile">
        <path id="Rectangle 1326" d="M8.28809 7.32388C8.28809 5.35008 9.88817 3.75 11.862 3.75H19.7142C21.688 3.75 23.2881 5.35008 23.2881 7.32388V22.6761C23.2881 24.6499 21.688 26.25 19.7142 26.25H11.862C9.88817 26.25 8.28809 24.6499 8.28809 22.6761V7.32388Z" stroke="#7FD3DF" strokeWidth="1.91458" />
        <circle id="Ellipse 128" cx="15.7881" cy="22.5" r="1.25" fill="#7FD3DF" />
        <path id="Vector 470" d="M13.2881 7.5L18.2881 7.5" stroke="#7FD3DF" strokeWidth="1.91458" strokeLinecap="round" />
      </g>
    </g>
  </svg>

);
const walletIcon = () => (
  <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="loma/line/wallet _remove">
      <g id="wallet _remove">
        <path id="Rectangle 1332" d="M18.8997 25.448H9.1019C7.1342 25.448 5.53906 23.8529 5.53906 21.8852V15.014C5.53906 13.0463 7.1342 11.4512 9.1019 11.4512H22.3353C24.303 11.4512 25.8981 13.0463 25.8981 15.014V18.4496" stroke="#7FD3DF" strokeWidth="1.90866" strokeLinecap="round" />
        <path id="Rectangle 1335" d="M5.53906 14.6332V10.8159C5.53906 9.059 6.96329 7.63477 8.72017 7.63477H9.99261H11.106M23.3533 11.134V10.8159C23.3533 9.059 21.929 7.63477 20.1722 7.63477H18.8997" stroke="#7FD3DF" strokeWidth="1.90866" />
        <path id="Rectangle 1334" d="M5.53906 16.541H8.72017C9.77429 16.541 10.6288 17.3956 10.6288 18.4497V18.4497C10.6288 19.5038 9.77429 20.3583 8.72017 20.3583H5.53906V16.541Z" stroke="#7FD3DF" strokeWidth="1.90866" />
        <path id="Vector 479" d="M9.35645 10.8158L11.1201 5.52487C11.2067 5.26508 11.4498 5.08984 11.7237 5.08984H18.6925C19.1152 5.08984 19.4204 5.49442 19.3043 5.90085L18.2635 9.54339L17.6273 11.4521" stroke="#7FD3DF" strokeWidth="1.90866" strokeLinecap="round" />
        <path id="Vector" d="M25.0453 22.9325L21.6992 22.9141" stroke="#7FD3DF" strokeWidth="1.90866" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </g>
  </svg>

);
const giftIcon = () => (
  <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="General / Gift">
      <g id="Group 8963">
        <path id="Vector 50" d="M5.2998 13.7617V23.6737C5.2998 25.0422 6.40924 26.1517 7.77779 26.1517H22.6457C24.0143 26.1517 25.1237 25.0422 25.1237 23.6737V13.7617" stroke="#7FD3DF" strokeWidth="2.47799" strokeLinecap="round" strokeLinejoin="round" />
        <path id="Rectangle 8" d="M7.77734 5.70881C7.77734 3.99812 9.16413 2.61133 10.8748 2.61133V2.61133C13.2698 2.61133 15.2113 4.55283 15.2113 6.9478V8.80629H10.8748C9.16413 8.80629 7.77734 7.4195 7.77734 5.70881V5.70881Z" stroke="#7FD3DF" strokeWidth="2.47799" strokeLinejoin="round" />
        <path id="Rectangle 9" d="M22.6455 5.70881C22.6455 3.99812 21.2587 2.61133 19.548 2.61133V2.61133C17.1531 2.61133 15.2115 4.55283 15.2115 6.9478V8.80629H19.548C21.2587 8.80629 22.6455 7.4195 22.6455 5.70881V5.70881Z" stroke="#7FD3DF" strokeWidth="2.47799" strokeLinejoin="round" />
        <path id="Rectangle 10" d="M4.06055 8.80664H26.3624V13.7626H4.06055V8.80664Z" stroke="#7FD3DF" strokeWidth="2.47799" strokeLinecap="round" strokeLinejoin="round" />
        <path id="Vector 51" d="M15.2119 13.7617V26.1517" stroke="#7FD3DF" strokeWidth="2.47799" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </g>
  </svg>
);
const index = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  // ? counter
  useEffect(() => {
    const startDate = new Date('January 1, 2024 00:00:00');
    const interval = setInterval(() => {
      const currentDate = new Date();
      const timeRemaining = startDate - currentDate;

      if (timeRemaining > 0) {
        const remainingDays = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const remainingHours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
        const remainingMinutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
        const remainingSeconds = Math.floor((timeRemaining / 1000) % 60);

        setDays(remainingDays);
        setHours(remainingHours);
        setMinutes(remainingMinutes);
        setSeconds(remainingSeconds);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <main className="home">
      <div className="slider container mx-auto px-10 sm:px-24 md:px-0 xl:px-24">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="mb-24"
        >
          <SwiperSlide>
            <div className="hero flex md:flex-row flex-col-reverse items-center justify-between">
              <div className="home__info text-center">
                <span className="sm:text-2xl text-sm">براندات نسائي عالمية</span>
                <h3 className="sm:text-5xl text-4xl py-3">احدث ادوات الجمال</h3>
                <p className="sm:text-2xl text-sm mb-8">عالم الجمال</p>
                <Link to="/product" className="bg-color-main hover:bg-color-alt transition-colors py-3 px-8 rounded-full text-white">اكتشف الان</Link>
              </div>
              <div className="home__img">
                <img src={heroImage} alt="modelImage" />
              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className="hero flex md:flex-row flex-col-reverse items-center justify-between">
              <div className="home__info text-center">
                <span className="sm:text-2xl text-sm">براندات الشباب</span>
                <h3 className="sm:text-5xl text-4xl py-3">احدث البراندات العالمية</h3>
                <p className="sm:text-2xl text-sm mb-8">عالم الشباب</p>
                <Link to="/product" className="bg-pink-300 hover:bg-pink-400 transition-colors py-3 px-8 rounded-full text-white">اكتشف الان</Link>
              </div>
              <div className="home__img">
                <img src={heroImage2} alt="modelImage" />
              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className="hero flex md:flex-row flex-col-reverse items-center justify-between">
              <div className="home__info text-center">
                <span className="sm:text-2xl text-sm">براندات الرياضية</span>
                <h3 className="sm:text-5xl text-4xl py-3">احدث البراندات الرياضية</h3>
                <p className="sm:text-2xl text-sm mb-8">عالم الرياضة</p>
                <Link to="/product" className="bg-yellow-700 hover:bg-yellow-800 transition-colors py-3 px-8 rounded-full text-white">اكتشف الان</Link>
              </div>
              <div className="home__img">
                <img src={heroImage3} alt="modelImage" />
              </div>
            </div>

          </SwiperSlide>
        </Swiper>
      </div>
      <div className="services container mx-auto px-10 sm:px-24 md:px-0 xl:px-24">
        <div className="mb-24 flex gap-4 md:flex-row flex-col justify-between flex-wrap border-b-2 pb-5 border-gray-500-300">
          <div className="service__box flex gap-2 items-center">
            <span className="w-14 h-14 flex items-center justify-center border rounded-xl border-gray-300">{vanIcon()}</span>
            <div className="box__info">
              <h3 className="text-lg font-medium">توصيل مجاني</h3>
              <span className="text-gray-400 text-sm">للطلبات اعلي من 200 جنية</span>
            </div>
          </div>

          <div className="service__box flex gap-2 items-center">
            <span className="w-14 h-14 flex items-center justify-center border rounded-xl border-gray-300">{mobileIcon()}</span>
            <div className="box__info">
              <h3 className="text-lg font-medium">دعم فني</h3>
              <span className="text-gray-400 text-sm">دعم علي مدار الساعة</span>
            </div>
          </div>

          <div className="service__box flex gap-2 items-center">
            <span className="w-14 h-14 flex items-center justify-center border rounded-xl border-gray-300">{walletIcon()}</span>
            <div className="box__info">
              <h3 className="text-lg font-medium">استرجاع الاموال</h3>
              <span className="text-gray-400 text-sm">استرداد امن لاموالك</span>
            </div>
          </div>

          <div className="service__box flex gap-2 items-center">
            <span className="w-14 h-14 flex items-center justify-center border rounded-xl border-gray-300">{giftIcon()}</span>
            <div className="box__info">
              <h3 className="text-lg font-medium">عروض حصرية</h3>
              <span className="text-gray-400 text-sm">خصومات كبيرة علي منتجاتنا</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-10 sm:px-24 md:px-0 xl:px-24 discount flex-col flex items-center md:items-stretch md:flex-row-reverse justify-between mb-24 gap-4">
        <div className="discount__box flex flex-row-reverse items-center justify-around px-10">
          <div className="discount__info">
            <span className="sm:text-lg font-medium text-sm">خصم كبير</span>
            <h3 className="sm:text-2xl text-xl font-bold">فساتين بناتي</h3>
            <Link to="/product" className="sm:text-lg text-sm border-b-2 border-cyan-300 pb-1">تسوق الان</Link>
          </div>
          <img src={discountImg1} alt="discountImg" />
        </div>
        <div className="discount__box discount__box--cyan  flex justify-around flex-row-reverse items-center px-10">
          <div className="discount__info">
            <span className="sm:text-lg font-medium text-sm">خصم 50%</span>
            <h3 className="sm:text-2xl text-xl font-bold">ملابس اطفال</h3>
            <Link to="/product" className="sm:text-lg text-sm border-b-2 border-cyan-300 pb-1">تسوق الان</Link>
          </div>
          <div className="discount__img">
            <img src={discountImg2} alt="discountImg" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-10 sm:px-24 md:px-0 xl:px-24 product mb-24">
        <div className="my-7  text-center">
          <span className="text-xl font-bold border-b-2 border-cyan-300">احدث المنتجات</span>
        </div>
        <div className="home__products">
          <ProductSection limit={8} />
        </div>
      </div>
      <div className="count text-center justify-center items-center flex flex-col gap-6 mb-24 py-10">
        <span className="lg:text-4xl sm:text-3xl text-2xl  font-medium">اكبر  خصم  علي  الاطلاق</span>
        <h3 className="text-4xl text-purple-600 font-black lg:text-8xl md:text-6xl">احدث ملابس الاطفال</h3>
        <div className="counter flex gap-14 flex-wrap justify-center items-center">
          <div>
            <span className="block font-extrabold text-2xl lg:text-4xl md:text-3xl">{days}</span>
            <span className="block font-extrabold text-2xl lg:text-4xl md:text-3xl">يوم</span>
          </div>
          <div>
            <span className="block font-extrabold text-2xl lg:text-4xl md:text-3xl">{hours}</span>
            <span className="block font-extrabold text-2xl lg:text-4xl md:text-3xl">ساعة</span>
          </div>
          <div>
            <span className="block font-extrabold text-2xl lg:text-4xl md:text-3xl">{minutes}</span>
            <span className="block font-extrabold text-2xl lg:text-4xl md:text-3xl">دقيقة</span>
          </div>
          <div>
            <span className="block font-extrabold text-2xl lg:text-4xl md:text-3xl text-purple-600">{seconds}</span>
            <span className="block font-extrabold text-2xl lg:text-4xl md:text-3xl text-purple-600">ثانية </span>
          </div>
        </div>
        <Link to="/product" className="bg-purple-600 py-2 hover:bg-purple-700 transition-colors text-white px-5 rounded-full">تسوق الان</Link>
      </div>
      <div className="product-slider container mx-auto px-10 sm:px-24 md:px-0 xl:px-24 product mb-24">
        <div className="product-slider__container block sm:flex justify-between flex-row items-start gap-6 w-full">
          <div className="navigator flex justify-center mb-3">
            <ul className="border w-44 border-gray-500 rounded-2xl overflow-hidden">
              <li className="py-4 px-5 border-b border-gray-400 bg-color-main text-white">تسوق عبر الفئات</li>
              <li className="py-4 px-5 border-b border-gray-400">
                <Link to="/product">رجالي</Link>
              </li>
              <li className="py-4 px-5 border-b border-gray-400">
                <Link to="/product">حريمي</Link>
              </li>
              <li className="py-4 px-5 border-b border-gray-400">
                <Link to="/product">اطفال</Link>
              </li>
              <li className="py-4 px-5 border-b border-gray-400">
                <Link to="/product">اكسسوارات</Link>
              </li>
              <li className="py-4 px-5">
                <Link to="/product">العاب</Link>
              </li>
            </ul>
          </div>
          <ProductSlider />
        </div>
      </div>
      <div className="container mx-auto px-10 sm:px-24 md:px-0 xl:px-24 product mb-24">
        <div className="my-7  text-center">
          <span className="text-xl font-bold border-b-2 border-cyan-300">البرندات</span>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay
          loop
          className="brand__slider"
          breakpoints={{
            // when window width is >= 640px
            360: {
              width: 360,
              slidesPerView: 3,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 5,
            },
            1080: {
              width: 1080,
              slidesPerView: 6,
            },
          }}
        >
          <SwiperSlide><img src={brand1} alt="brand" /></SwiperSlide>
          <SwiperSlide><img src={brand2} alt="brand" /></SwiperSlide>
          <SwiperSlide><img src={brand3} alt="brand" /></SwiperSlide>
          <SwiperSlide><img src={brand4} alt="brand" /></SwiperSlide>
          <SwiperSlide><img src={brand1} alt="brand" /></SwiperSlide>
          <SwiperSlide><img src={brand2} alt="brand" /></SwiperSlide>
          <SwiperSlide><img src={brand5} alt="brand" /></SwiperSlide>
          <SwiperSlide><img src={brand3} alt="brand" /></SwiperSlide>
        </Swiper>
      </div>
      <div className="ads grid grid-cols-1 sm:grid-cols-2 justify-items-center md:grid-cols-3 gap-4 container mx-auto px-10 sm:px-24 md:px-0 xl:px-24 product">
        <div className="ads__box rounded-lg overflow-hidden">
          <img src={ads3} alt="ads" />
          <div className="ads__info text-center my-3">
            <h3 className="text-xl font-bold mb-2">استمتعي بأجواء مبهره فى الخروجات</h3>
            <span className="text-sm text-gray-500 font-normal">مع باقه من اجمل الملابس الكاجوال البناتي المودرن</span>
          </div>
        </div>
        <div className="ads__box ads__box--revers flex flex-col-reverse sm:flex-col rounded-lg overflow-hidden">
          <div className="ads__info text-center my-3">
            <h3 className="text-xl font-bold mb-2">اشتري اللي يخليك شيك</h3>
            <span className="text-sm text-gray-500 font-normal">مع احدث واجمل ملابش الشباب الحديثه </span>
          </div>
          <img src={ads2} alt="ads" />
        </div>
        <div className="ads__box rounded-lg overflow-hidden">
          <img src={ads1} alt="ads" />
          <div className="ads__info text-center my-3">
            <h3 className="text-xl font-bold mb-2">مع اجمل صيحات الموضه والفاشون</h3>
            <span className="text-sm text-gray-500 font-normal">اطلاله فريده مع افضل تشكيله ملابس شبابي</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default index;
