/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CartDropMenu() {
  const [cartData, setCartData] = useState([1]);
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3005/cart')
      .then((res) => setCartData(res.data))
      .catch((err) => console.log(err));
  }, [loading]);
  const DeleteProduct = (id) => {
    axios.delete(`http://localhost:3005/cart/${id}`)
      .then((res) => { console.log(res.data); setLoading(1); })
      .catch((err) => console.log(err));
  };
  return (
    <div className="bg-white relative w-80 h-screen shadow-lg">
      <div className="dropMenu_cart pt-8">
        {cartData && cartData.map(({
          name, price, QTY, img, size, id,
        }) => (
          <div key={`${id}0001`} className="dropMenu__product_box flex justify-between items-center p-4 border-b">
            <div className="dropMenu__product_info flex gap-4 items-start">
              <img src={`.${img}`} alt="productImg" className="w-16" />
              <div className="dropMenu__product_text">
                <h3 className="font-bold mb-1">{name}</h3>
                <div className="product_Size_Price mb-1 flex items-center gap-6">
                  <span>{size}</span>
                  <span className="text-color-main">
                    {price * QTY}
                    ج.م
                  </span>
                </div>
                <div className="flex w-36 flex-row h-10 rounded-xl overflow-hidden relative bg-transparent">
                  <button
                    type="button"
                    className=" bg-color-cyan-alt text-gray-600 hover:text-gray-700 h-full w-20  cursor-pointer outline-none"
                  >
                    <span
                      className="m-auto text-2xl font-thin"
                    >
                      −
                    </span>
                  </button>
                  <input type="number" className="border-none focus:outline-none text-center w-full bg-color-cyan-alt border font-semibold text-md md:text-base cursor-default flex items-center  outline-none" name="custom-input-number" value={QTY} readOnly />
                  <button
                    type="button"
                    className="bg-color-cyan-alt text-gray-600 hover:text-gray-700 h-full w-20 cursor-pointer"
                  >
                    <span
                      className="m-auto text-2xl font-thin"
                    >
                      +
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="dropMenu__product_delete">
              <span
                aria-label="button"
                onClick={() => DeleteProduct(id)}
                className="font-bold cursor-pointer transition-colors hover:text-red-700"
              >
                X
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 bg-color-cyan-alt h-20 w-full flex justify-between px-4 items-center">
        <span className="text-lg font-bold">المجموع : 1500 جنية</span>
        <Link to="/cart" className="bg-white py-1 px-6 font-bold text-lg rounded-lg">الدفع</Link>
      </div>
    </div>
  );
}

export default CartDropMenu;
