import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import notFoundImg from '../../assets/404.png';

function NotFound() {
  return (
    <main className="notFound">
      <div className="notFound__container container mx-auto px-4 sm:px-10 md:px-12 lg:px-16 xl:px-20 flex justify-between items-center flex-col sm:flex-row text-center sm:text-start">
        <div className="notFound__info basis-1/2">
          <h2 className="md:text-9xl text-7xl text-color-alt font-extrabold mb-4">404</h2>
          <p className="md:text-2xl text-lg mb-4">
            اووبس!
            <br />
            {' '}
            الصفحة غير موجودة
          </p>
          <p className="text-gray-400 md:text-lg text-sm mb-8">هذة الصفحة غير موجودة او تم حذفها نحن نقترح ان تعود للصفحة الرئيسية</p>
          <Link className="bg-color-cyan-alt text-white shadow-xl py-3 px-8 rounded-3xl" to="/">الصفحة الرئيسية</Link>
        </div>
        <div className="notfound__Img">
          <img src={notFoundImg} alt="NotFound" className="-scale-x-100" />
        </div>
      </div>
    </main>
  );
}

export default NotFound;
