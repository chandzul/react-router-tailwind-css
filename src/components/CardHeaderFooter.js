import React, { Component } from 'react';

import book from './assets/img/book.svg';

function CardHeaderFooter() {
  return (
    <>
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
          <img src={book} alt="" className="inline-block"/><h6 className="inline-block ml-2"> Vocabulary</h6>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <ul className="list-inside text-gray-400">
            <li className="my-2"><a href=""> <span className="text-black">A1.U1.1</span> the text here</a></li>
            <li className="my-2"><a href=""> <span className="text-black">A1.U1.1</span> the text here</a></li>
            <li className="my-2"><a href=""> <span className="text-black">A1.U1.1</span> the text here</a></li>
            <li className="my-2"><a href=""> <span className="text-black">A1.U1.1</span> the text here</a></li>
            <li className="my-2"><a href=""> <span className="text-black">A1.U1.1</span> the text here</a></li>
          </ul>
        </div>
        <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
          <h6 className="text-gray-400">6 Lessons</h6>
        </div>
      </div>
    </>
  );
}

export default CardHeaderFooter;