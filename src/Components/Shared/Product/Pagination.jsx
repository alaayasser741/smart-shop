/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePageClick = (page) => {
    onPageChange(page);
  };

  return (
    <div className="flex items-center justify-center mt-8 gap-1" dir="ltr">
      <button
        className="px-3 py-1  disabled:text-gray-400 font-extrabold text-2xl text-black mr-2"
        disabled={currentPage <= 1}
        onClick={() => handlePageClick(currentPage - 1)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <g clipPath="url(#clip0_138_2638)">
            <path d="M19.2739 11.0007H8.10391L12.9839 6.1207C13.3739 5.7307 13.3739 5.0907 12.9839 4.7007C12.5939 4.3107 11.9639 4.3107 11.5739 4.7007L4.98391 11.2907C4.59391 11.6807 4.59391 12.3107 4.98391 12.7007L11.5739 19.2907C11.9639 19.6807 12.5939 19.6807 12.9839 19.2907C13.3739 18.9007 13.3739 18.2707 12.9839 17.8807L8.10391 13.0007H19.2739C19.8239 13.0007 20.2739 12.5507 20.2739 12.0007C20.2739 11.4507 19.8239 11.0007 19.2739 11.0007Z" fill={currentPage <= 1 ? 'gray' : '#323232'} />
          </g>
          <defs>
            <clipPath id="clip0_138_2638">
              <rect width="24" height="24" fill="white" transform="translate(0.273438)" />
            </clipPath>
          </defs>
        </svg>
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`w-12 h-12 text-xl rounded-full ${
            currentPage === index + 1 ? 'bg-color-main text-white' : 'border-gray-300 border rounded-full text-gray-600'
          } mx-1`}
          onClick={() => handlePageClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        className="px-3 py-1  disabled:text-gray-400 font-extrabold text-2xl text-black ml-2"
        disabled={currentPage >= totalPages}
        onClick={() => handlePageClick(currentPage + 1)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
          <path d="M5.29524 14.0118L16.4652 13.9933L11.5933 18.8814C11.204 19.272 11.205 19.912 11.5957 20.3014C11.9863 20.6907 12.6163 20.6897 13.0057 20.299L19.5847 13.6981C19.9741 13.3074 19.973 12.6774 19.5824 12.2881L12.9815 5.70903C12.5908 5.31968 11.9608 5.32073 11.5715 5.71138C11.1821 6.10203 11.1831 6.73203 11.5738 7.12138L16.4619 11.9933L5.29191 12.0118C4.74191 12.0127 4.29266 12.4635 4.29358 13.0135C4.29449 13.5635 4.74524 14.0127 5.29524 14.0118Z" fill={currentPage >= totalPages ? 'gray' : '#323232'} />
        </svg>
      </button>

    </div>
  );
}

export default Pagination;
