/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase';

import './style.scss';

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
const youtubeIcon = () => (
  <svg width="46" height="35" viewBox="0 0 65 58" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Youtube">
      <g id="Youtube_2">
        <path id="back" d="M7.83301 29C7.83301 12.9837 20.5557 0 36.25 0C51.9443 0 64.667 12.9837 64.667 29C64.667 45.0163 51.9443 58 36.25 58C20.5557 58 7.83301 45.0163 7.83301 29Z" fill="#FF0000" />
        <path id="Fill-1" d="M50.7727 21.839C50.4242 20.4724 49.397 19.3962 48.0928 19.031C45.7292 18.3672 36.2505 18.3672 36.2505 18.3672C36.2505 18.3672 26.7718 18.3672 24.408 19.031C23.1037 19.3962 22.0766 20.4724 21.728 21.839C21.0947 24.3159 21.0947 29.4839 21.0947 29.4839C21.0947 29.4839 21.0947 34.6517 21.728 37.1287C22.0766 38.4953 23.1037 39.5715 24.408 39.9369C26.7718 40.6005 36.2505 40.6005 36.2505 40.6005C36.2505 40.6005 45.7292 40.6005 48.0928 39.9369C49.397 39.5715 50.4242 38.4953 50.7727 37.1287C51.4062 34.6517 51.4062 29.4839 51.4062 29.4839C51.4062 29.4839 51.4062 24.3159 50.7727 21.839Z" fill="white" />
        <path id="Fill-2" d="M33.4082 34.7995V25.1328L40.9861 29.9663L33.4082 34.7995Z" fill="#FF0000" />
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

function Login({ type = 0 }) {
  const [registerToggle, setRegisterToggle] = useState(type);
  const [logEmail, setLogEmail] = useState('');
  const [logPassword, setLogPassword] = useState('');
  const [signUsername, setSignUsername] = useState('');
  const [signEmail, setSignEmail] = useState('');
  const [signPassword, setSignPassword] = useState('');
  const [notValid, setNotValid] = useState(0);
  const navigate = useNavigate('');
  { /*
  0 >> valid
  1 >> username is Invalid (sign up)
  2 >> password is Invalid (sign up)
  3 >> email is already exist (sign up)
  4 >> Incorrect password (Login)
  5 >> Email not found (Login)
  */ }
  const LogInHandle = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, logEmail, logPassword)
      .then((userCredential) => {
        localStorage.setItem('accessToken', userCredential.user.accessToken);
      }).then((_s) => {
        navigate('/');
      }).catch((err) => {
        if (err.code === 'auth/wrong-password') {
          setNotValid(4);
          console.log('Incorrect password');
        } else if (err.code === 'auth/user-not-found') {
          setNotValid(5);
          console.log('Email not found');
        } else {
          console.log(err);
        }
      });
  };
  const signUpHandle = (e) => {
    e.preventDefault();
    // ! Validation
    const usernameRegEx = /^[a-zA-Z0-9_-]{2,15}\d$/;
    const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!usernameRegEx.test(signUsername)) {
      return setNotValid(1);
    }

    if (!passwordRegEx.test(signPassword)) {
      return setNotValid(2);
    }
    const user = { email: signEmail, password: signPassword };
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        setNotValid(0);
        localStorage.setItem('accessToken', userCredential.user.accessToken);
        updateProfile(auth.currentUser, {
          displayName: signUsername,
        });
      }).then((_s) => {
        navigate('/');
      }).catch((err) => {
        if (err.code === 'auth/email-already-in-use') {
          setNotValid(3);
        } else {
          console.log(err);
        }
      });
  };

  return (
    <div className="form flex justify-center items-center mt-10 container mx-auto px-4 sm:px-10 md:px-12 lg:px-16 xl:px-20 mb-24">
      <div className="form__container w-full shadow-lg flex flex-col sm:flex-row ">
        <div className={`${registerToggle === 0 ? 'form__img' : 'form__img--signUp'} basis-1/2 flex justify-end items-center`}>
          <div className="toggle__form flex flex-col gap-2">
            <span
              onClick={() => setRegisterToggle(0)}
              className={`${registerToggle === 0 ? 'bg-color-main text-white' : 'bg-white'} rounded-r-3xl font-medium w-32 px-2 py-2 block cursor-pointer`}
            >
              تسجيل الدخول
            </span>
            <span
              onClick={() => setRegisterToggle(1)}
              className={`${registerToggle === 1 ? 'bg-color-main text-white' : 'bg-white'} rounded-r-3xl font-medium w-32 px-2 py-2 block cursor-pointer`}
            >
              انشاء حساب
            </span>
          </div>
        </div>
        <div className="form__info basis-1/2 flex flex-col justify-center items-center p-10 lg:p-16">
          {registerToggle === 0 ? (
            <div className="form__info_content flex flex-col items-center sm:items-start">
              {notValid === 4 ? <p className="text-red-400 my-2 font-bold">تأكد من الباسورد مجددًا</p> : null}
              {notValid === 5 ? <p className="text-red-400 my-2 font-bold">هذا الايميل غير موجود</p> : null}
              <h2 className="text-4xl font-bold mb-12">Smart Shop</h2>
              <h3 className="text-xl font-bold mb-2">تسجيل الدخول</h3>
              <p className="text-gray-400 font-light text-sm mb-10">تسجيل الدخول للمتابعة في موقعنا</p>
              <form onSubmit={LogInHandle}>
                {/* Email */}
                <label className="relative">
                  <input className="w-full border-b py-2 px-3 focus:outline-none" type="email" placeholder="البريد الالكتروني" value={logEmail} onChange={(e) => setLogEmail(e.target.value)} />
                  <span className="absolute left-2 translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <path d="M22 6.22656C22 5.12656 21.1 4.22656 20 4.22656H4C2.9 4.22656 2 5.12656 2 6.22656V18.2266C2 19.3266 2.9 20.2266 4 20.2266H20C21.1 20.2266 22 19.3266 22 18.2266V6.22656ZM20 6.22656L12 11.2266L4 6.22656H20ZM20 18.2266H4V8.22656L12 13.2266L20 8.22656V18.2266Z" fill="black" fillOpacity="0.2" />
                    </svg>
                  </span>
                </label>
                {/* Password */}
                <label className="relative">
                  <input className="w-full border-b py-2 px-3 focus:outline-none" type="password" placeholder="كلمة المرور" value={logPassword} onChange={(e) => setLogPassword(e.target.value)} />
                  <span className="absolute left-3 translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" viewBox="0 0 16 22" fill="none">
                      <path d="M8 16.7266C7.46957 16.7266 6.96086 16.5158 6.58579 16.1408C6.21071 15.7657 6 15.257 6 14.7266C6 13.6166 6.89 12.7266 8 12.7266C8.53043 12.7266 9.03914 12.9373 9.41421 13.3123C9.78929 13.6874 10 14.1961 10 14.7266C10 15.257 9.78929 15.7657 9.41421 16.1408C9.03914 16.5158 8.53043 16.7266 8 16.7266ZM14 19.7266V9.72656H2V19.7266H14ZM14 7.72656C14.5304 7.72656 15.0391 7.93728 15.4142 8.31235C15.7893 8.68742 16 9.19613 16 9.72656V19.7266C16 20.257 15.7893 20.7657 15.4142 21.1408C15.0391 21.5158 14.5304 21.7266 14 21.7266H2C1.46957 21.7266 0.960859 21.5158 0.585786 21.1408C0.210714 20.7657 0 20.257 0 19.7266V9.72656C0 8.61656 0.89 7.72656 2 7.72656H3V5.72656C3 4.40048 3.52678 3.12871 4.46447 2.19103C5.40215 1.25335 6.67392 0.726563 8 0.726562C8.65661 0.726562 9.30679 0.855891 9.91342 1.10716C10.52 1.35844 11.0712 1.72674 11.5355 2.19103C11.9998 2.65532 12.3681 3.20652 12.6194 3.81315C12.8707 4.41977 13 5.06995 13 5.72656V7.72656H14ZM8 2.72656C7.20435 2.72656 6.44129 3.04263 5.87868 3.60524C5.31607 4.16785 5 4.93091 5 5.72656V7.72656H11V5.72656C11 4.93091 10.6839 4.16785 10.1213 3.60524C9.55871 3.04263 8.79565 2.72656 8 2.72656Z" fill="black" fillOpacity="0.2" />
                    </svg>
                  </span>
                </label>
                {/* Submit */}
                <div className="form__btn my-6 flex flex-col lg:flex-row gap-2 justify-between items-center">
                  <input type="submit" value="تسجيل الدخول" className="bg-color-main py-2 px-4 rounded-lg text-white transition-colors hover:bg-color-alt cursor-pointer" />
                  <span className="text-color-cyan-alt text-sm font-semibold cursor-pointer">هل نسيت كلمة المرور؟</span>
                </div>
              </form>
              <h3 className="text-lg font-bold mb-4">او سجل الدخول عبر:</h3>
              <div className="footer__social flex items-center gap-2">
                <a href="https://twitter.com/alaayasser741" target="_blank" rel="noreferrer">
                  <span>{twitterIcon()}</span>

                </a>
                <a href="https://www.facebook.com/alaayasser741/" target="_blank" rel="noreferrer">
                  <span>{facebookIcon()}</span>

                </a>
                <a href="https://www.linkedin.com/in/alaayasser741/" target="_blank" rel="noreferrer">
                  <span>{youtubeIcon()}</span>
                </a>
                <a href="https://wa.me/2001556774943" target="_blank" rel="noreferrer">
                  <span>{whatsappIcon()}</span>
                </a>
              </div>
            </div>
          )
            : (
              <div className="form__info_content flex flex-col items-center sm:items-start">
                {notValid === 3 ? <p className="text-red-400 my-2 font-bold">هذا الحساب مسجل بالفعل</p> : null}
                <h2 className="text-4xl font-bold mb-12">Smart Shop</h2>
                <h3 className="text-xl font-bold mb-2">انشاء حساب </h3>
                <p className="text-gray-400 font-light text-sm mb-10">انشئ حساب مجاني و استمتع به</p>
                <form onSubmit={signUpHandle}>
                  {/* Name */}
                  <label className="relative">
                    <input className="w-full border-b py-2 px-3 focus:outline-none" type="text" placeholder="اسم المستخدم" value={signUsername} onChange={(e) => setSignUsername(e.target.value)} />
                    <span className="absolute left-3 translate-y-1/2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                        <path opacity="0.5" d="M9 10.8516C12.0037 10.8516 18 12.3591 18 15.3516V18.7266H0V15.3516C0 12.3591 5.99625 10.8516 9 10.8516ZM9 0.726562C10.1935 0.726563 11.3381 1.20067 12.182 2.04458C13.0259 2.8885 13.5 4.03309 13.5 5.22656C13.5 6.42004 13.0259 7.56463 12.182 8.40854C11.3381 9.25246 10.1935 9.72656 9 9.72656C7.80653 9.72656 6.66193 9.25246 5.81802 8.40854C4.97411 7.56463 4.5 6.42004 4.5 5.22656C4.5 4.03309 4.97411 2.8885 5.81802 2.04458C6.66193 1.20067 7.80653 0.726563 9 0.726562ZM9 12.9891C5.65875 12.9891 2.1375 14.6316 2.1375 15.3516V16.5891H15.8625V15.3516C15.8625 14.6316 12.3413 12.9891 9 12.9891ZM9 2.86406C8.37343 2.86406 7.77251 3.11297 7.32946 3.55602C6.88641 3.99908 6.6375 4.59999 6.6375 5.22656C6.6375 5.85314 6.88641 6.45405 7.32946 6.8971C7.77251 7.34016 8.37343 7.58906 9 7.58906C9.62657 7.58906 10.2275 7.34016 10.6705 6.8971C11.1136 6.45405 11.3625 5.85314 11.3625 5.22656C11.3625 4.59999 11.1136 3.99908 10.6705 3.55602C10.2275 3.11297 9.62657 2.86406 9 2.86406Z" fill="black" fillOpacity="0.4" />
                      </svg>
                    </span>
                  </label>
                  {notValid === 1 ? <p className="text-red-400 my-2">يجب ان يحتوي اسم المستخدم علي 3-13 حرف ورقم</p> : null}
                  {/* Email */}
                  <label className="relative">
                    <input className="w-full border-b py-2 px-3 focus:outline-none" type="email" placeholder="البريد الالكتروني" value={signEmail} onChange={(e) => setSignEmail(e.target.value)} />
                    <span className="absolute left-2 translate-y-1/2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M22 6.22656C22 5.12656 21.1 4.22656 20 4.22656H4C2.9 4.22656 2 5.12656 2 6.22656V18.2266C2 19.3266 2.9 20.2266 4 20.2266H20C21.1 20.2266 22 19.3266 22 18.2266V6.22656ZM20 6.22656L12 11.2266L4 6.22656H20ZM20 18.2266H4V8.22656L12 13.2266L20 8.22656V18.2266Z" fill="black" fillOpacity="0.2" />
                      </svg>
                    </span>
                  </label>
                  {/* Password */}
                  <label className="relative">
                    <input className="w-full border-b py-2 px-3 focus:outline-none" type="password" placeholder="كلمة المرور" value={signPassword} onChange={(e) => setSignPassword(e.target.value)} />
                    <span className="absolute left-3 translate-y-1/2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" viewBox="0 0 16 22" fill="none">
                        <path d="M8 16.7266C7.46957 16.7266 6.96086 16.5158 6.58579 16.1408C6.21071 15.7657 6 15.257 6 14.7266C6 13.6166 6.89 12.7266 8 12.7266C8.53043 12.7266 9.03914 12.9373 9.41421 13.3123C9.78929 13.6874 10 14.1961 10 14.7266C10 15.257 9.78929 15.7657 9.41421 16.1408C9.03914 16.5158 8.53043 16.7266 8 16.7266ZM14 19.7266V9.72656H2V19.7266H14ZM14 7.72656C14.5304 7.72656 15.0391 7.93728 15.4142 8.31235C15.7893 8.68742 16 9.19613 16 9.72656V19.7266C16 20.257 15.7893 20.7657 15.4142 21.1408C15.0391 21.5158 14.5304 21.7266 14 21.7266H2C1.46957 21.7266 0.960859 21.5158 0.585786 21.1408C0.210714 20.7657 0 20.257 0 19.7266V9.72656C0 8.61656 0.89 7.72656 2 7.72656H3V5.72656C3 4.40048 3.52678 3.12871 4.46447 2.19103C5.40215 1.25335 6.67392 0.726563 8 0.726562C8.65661 0.726562 9.30679 0.855891 9.91342 1.10716C10.52 1.35844 11.0712 1.72674 11.5355 2.19103C11.9998 2.65532 12.3681 3.20652 12.6194 3.81315C12.8707 4.41977 13 5.06995 13 5.72656V7.72656H14ZM8 2.72656C7.20435 2.72656 6.44129 3.04263 5.87868 3.60524C5.31607 4.16785 5 4.93091 5 5.72656V7.72656H11V5.72656C11 4.93091 10.6839 4.16785 10.1213 3.60524C9.55871 3.04263 8.79565 2.72656 8 2.72656Z" fill="black" fillOpacity="0.2" />
                      </svg>
                    </span>
                  </label>
                  {notValid === 2 ? <p className="text-red-400 my-2">يجب ان يتكون الباسورد من 8 حروف وارقام او اكثر وحرف واحد كبير او اكثر</p> : null}
                  {/* Submit */}
                  <div className="form__btn my-6 flex flex-col lg:flex-row gap-2 justify-between items-center">
                    <input type="submit" value="انشاء حساب" className="bg-color-main py-2 px-4 rounded-lg text-white transition-colors hover:bg-color-alt cursor-pointer" />
                  </div>
                </form>
                <h3 className="text-lg font-bold mb-4">او سجل حساب جديد عبر:</h3>
                <div className="footer__social flex items-center gap-2">
                  <a href="https://twitter.com/alaayasser741" target="_blank" rel="noreferrer">
                    <span>{twitterIcon()}</span>

                  </a>
                  <a href="https://www.facebook.com/alaayasser741/" target="_blank" rel="noreferrer">
                    <span>{facebookIcon()}</span>

                  </a>
                  <a href="https://www.linkedin.com/in/alaayasser741/" target="_blank" rel="noreferrer">
                    <span>{youtubeIcon()}</span>
                  </a>
                  <a href="https://wa.me/2001556774943" target="_blank" rel="noreferrer">
                    <span>{whatsappIcon()}</span>
                  </a>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default Login;
