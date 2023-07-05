/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { Navigation, Pagination } from 'swiper/modules';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import heroImage from '../../assets/hero-image.png';
import heroImage2 from '../../assets/hero-image2.png';
import heroImage3 from '../../assets/hero-image3.png';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';
import './style.scss';

const index = () => (
  <main className="home  container mx-auto px-10 sm:px-24 md:px-0 xl:px-24">
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
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
  </main>
);

export default index;
