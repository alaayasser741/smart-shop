/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
/* eslint linebreak-style: ["error", "windows"] */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProductSlider from '../Shared/productSlider/ProductSlider';
import headerImg from '../../assets/product-hero.png';
import './style.scss';

function Cart() {
  const [productQTY, setProductQTY] = useState(1);
  const [loading, setLoading] = useState(0);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3005/cart').then((res) => setCartData(res.data)).catch((err) => console.log(err));
  }, [loading]);
  const DeleteProduct = (id) => {
    axios.delete(`http://localhost:3005/cart/${id}`)
      .then((res) => { console.log(res.data); setLoading(1); })
      .catch((err) => console.log(err));
  };
  function incrementQTY() {
    setProductQTY(productQTY + 1);
  }
  function decrementQTY() {
    if (productQTY > 1) {
      setProductQTY(productQTY - 1);
    }
  }
  return (
    <div className="cart">
      <div className="product__header mt-5 mb-10 flex justify-center items-center flex-col gap-4">
        <img src={headerImg} alt="headerImg" className="w-full" />
        <h2 className="text-white md:text-5xl sm:text-3xl text-xl font-extrabold">تسوق احدث المنتجات العصرية</h2>
        <span className="text-red-500 md:text-2xl sm:text-xl text-sm font-medium">
          <Link to="/" className="text-white">الرئيسية</Link>
          {' '}
          /
          {' '}
          <Link to="/product" className="text-white">السلة</Link>
        </span>
      </div>
      <div className="cart container mx-auto px-4 sm:px-10 md:px-12 lg:px-16 xl:px-20 mb-24">
        <h3 className="text-lg font-bold">سلة التسوق</h3>
        <div className="cart__content flex flex-col lg:flex-row gap-8 ">
          <div className="cart__products flex-1">
            <table className="text-sm text-right cart__table overflow-x-auto">
              <thead className="text-lg ">
                <tr>
                  <th scope="col" className="px-6 py-3">المنتج</th>
                  <th scope="col" className="px-6 py-3">السعر</th>
                  <th scope="col" className="px-6 py-3">الكمية</th>
                  <th scope="col" className="px-6 py-3">المجموع</th>
                </tr>
              </thead>
              <tbody>
                {cartData.length > 0 ? cartData.map(({
                  name, QTY, price, img, size, color, id,
                }) => (
                  <tr key={id}>
                    <td className="flex gap-4 items-center px-6 py-4">
                      <span onClick={() => DeleteProduct(id)} className="text-lg font-bold transition-colors text-color-main hover:text-red-600 cursor-pointer">X</span>
                      <img src={img} alt="prodcutImg" className="w-24" />
                      <div className="cart__product_info flex flex-col gap-1 items-start">
                        <h3 className="text-lg font-bold">{name}</h3>
                        <p className="text-sm font-normal">
                          اللون :
                          {' '}
                          <span>{color}</span>
                        </p>
                        <p className="text-sm font-normal">
                          المقاس :
                          {' '}
                          <span>{size}</span>
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-lg font-bold">
                      {price}
                      ج.م
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex w-24 flex-row h-10 rounded-xl overflow-hidden relative bg-transparent">
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
                        <input type="number" className=" focus:outline-none text-center w-full bg-white border font-semibold text-md hover:text-black focus:text-black  md:text-base cursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={QTY} readOnly />
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
                    </td>
                    <td className="px-6 py-4 text-lg font-bold">
                      {price * QTY}
                      ج.م
                    </td>
                  </tr>
                )) : <span className="text-xl mt-4 block text-center text-gray-400">قم بإضافة بعض المنتجات للسلة</span>}
              </tbody>
            </table>
          </div>
          <div className="cart__payment basis-1/3">
            <div className="payment shadow-lg p-4 rounded-md w-full">
              <h3 className="text-lg font-bold mb-2">الكوبون</h3>
              <p className="text-gray-400 mb-4">أدخل رمز الكوبون الخاص بك إذا كان لديك واحد.</p>
              <form className="flex gap-2 mb-8 flex-col sm:flex-row">
                <input type="text" placeholder="رمز الكوبونِ" className="border py-1 px-2 rounded-md focus:outline-none" />
                <input type="submit" value="تأكيد الكوبون" className="bg-color-main text-white py-1 px-4 rounded-lg cursor-pointer hover:bg-color-alt transition-colors" />
              </form>
              <h3 className="text-lg font-bold mb-2">ملحوظة</h3>
              <p className="text-gray-400 mb-8">اضافة ملحوظة للبائع ...</p>
              <textarea className="w-full border rounded-md resize-none h-32 p-4 focus:outline-none mb-6" placeholder="اكتب ملحوظتك هنا ..." />
              <div className="payment__total_price flex justify-between mb-4">
                <span className="font-medium">المجموع الفرعي</span>
                <span className="font-medium">6000 ج.م</span>
              </div>
              <div className="payment__total_price flex justify-between mb-4">
                <span className="font-medium">المجموع الإجمالي</span>
                <span className="font-medium">6000 ج.م</span>
              </div>
              <p className="text-gray-400 mb-4">الشحن والضرائب محسوبة عند الدفع</p>
              <div className="payment__btn flex justify-between">
                <button className="bg-color-main text-white py-1 px-4 rounded-lg cursor-pointer hover:bg-color-alt transition-colors" type="button">تحديث السلة</button>
                <button className="bg-color-main text-white py-1 px-4 rounded-lg cursor-pointer hover:bg-color-alt transition-colors" type="button">الدفع</button>
              </div>
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

export default Cart;
