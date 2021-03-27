import React from 'react';
import TakeExam from "../../components/TakeExam";

function Exercises() {
  return (
    <>
      <div className="grid grid-cols-1 gap-y-6 w-auto">


        <div className="col-span-1">
          <div className="bg-gray-800 shadow-lg rounded-2xl">
            <div className="px-4 py-5 sm:p-6">
              <h1 className=" text-white text-2xl text-black font-bold">
                Quiz A1.6.1
              </h1>
              <div className="mt-2 max-w-xl text-sm text-gray-400">
                <p>
                  From its medieval origins to the digital era, learn everything there
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="col-span-1">
          <div className="grid lg:grid-cols-10 bg-gray-200 rounded-2xl px-6 py-6">
            <div className="grid-col-span-2">
              <h1 className="font-extrabold text-3xl">01</h1>
            </div>
            <div className="col-span-8">
              <h2 className="mb-4 ">Complete the sentences with the correct word(s)</h2>
              <p className="mb-6">
                <span className="bg-blue-400 py-1 px-2 rounded-lg mr-6 font-light">Item 1</span>
                <span className="bg-red-400 py-1 px-2 rounded-lg mr-6 font-light">Item 1</span>
                <span className="bg-green-400 py-1 px-2 rounded-lg mr-6 font-light">Item 1</span>
                <span className="bg-yellow-400 py-1 px-2 rounded-lg mr-6 font-light">Item 1</span>
              </p>
              <ul className="text-gray-500 font-light">
                <li className="mb-2">1.1.- Lorem ipsum _____, consectetur adipisicing elit.</li>
                <li className="mb-2">1.2.- Lorem ipsum dolor sit _______ adipisicing elit.</li>
                <li className="mb-2">1.3.- this _______ dolor sit amet, consectetur adipisicing elit.</li>
                <li className="mb-2">1.4.- Lorem ipsum dolor sit amet, consectetur __________.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="grid lg:grid-cols-10 bg-white rounded-2xl px-6 py-6">
            <div className="grid-col-span-2">
              <h1 className="font-extrabold text-3xl">02</h1>
            </div>
            <div className="col-span-8">
              <h2 className="mb-4 ">Select the best answer to complete the sentences.</h2>
              <ul className="text-gray-500 font-light">
                <li className="mb-2">1.1.- Lorem ipsum _____, consectetur adipisicing elit.</li>
              </ul>
              <label className="flex items-center space-x-3 mb-3">
                <input type="radio" name="checked-demo" className="form-tick  bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent "/>
                <span className="text-gray-700 dark:text-white font-normal">
                  Design
                </span>
              </label>
              <label className="flex items-center space-x-3 mb-3">
                <input type="radio" name="checked-demo" className="form-tick  bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent "/>
                <span className="text-gray-700 dark:text-white font-normal">
                  Outdoors
                </span>
              </label>
              <label className="flex items-center space-x-3 mb-3">
                <input type="radio" name="checked-demo" className="form-tick  bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent "/>
                <span className="text-gray-700 dark:text-white font-normal">
                  Cashier
                </span>
              </label>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="grid lg:grid-cols-10 bg-gray-200 rounded-2xl px-6 py-6">
            <div className="grid-col-span-2">
              <h1 className="font-extrabold text-3xl">03</h1>
            </div>
            <div className="col-span-8">
              <h2 className="mb-4 ">Select the best answer to complete the sentences.</h2>
              <ul className="text-gray-500 font-light">
                <li className="mb-2">1.1.- Lorem ipsum _____, consectetur adipisicing _________ elit.</li>
              </ul>
              <label className="flex items-center space-x-3 mb-3">
                <input type="radio" name="checked-demo2" className="form-tick  bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent "/>
                <span className="text-gray-700 dark:text-white font-normal">
                  Design / Mechanical
                </span>
              </label>
              <label className="flex items-center space-x-3 mb-3">
                <input type="radio" name="checked-demo2" className="form-tick  bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent "/>
                <span className="text-gray-700 dark:text-white font-normal">
                  Outdoors / Indoors
                </span>
              </label>
              <label className="flex items-center space-x-3 mb-3">
                <input type="radio" name="checked-demo2" className="form-tick  bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent "/>
                <span className="text-gray-700 dark:text-white font-normal">
                  Cashier / Paypal
                </span>
              </label>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="grid lg:grid-cols-10 bg-gray-200 rounded-2xl px-6 py-6">
            <div className="grid-col-span-2">
              <h1 className="font-extrabold text-3xl">04</h1>
            </div>
            <div className="col-span-8">
              <h2 className="mb-4 ">Complete the sentences with the correct word(s)</h2>
              <p className="mb-6">
                <span className="bg-yellow-400 py-1 px-2 rounded-lg mr-6 font-light">Item 1</span>
                <span className="bg-yellow-400 py-1 px-2 rounded-lg mr-6 font-light">Item 1</span>
                <span className="bg-yellow-400 py-1 px-2 rounded-lg mr-6 font-light">Item 1</span>
                <span className="bg-yellow-400 py-1 px-2 rounded-lg mr-6 font-light">Item 1</span>
              </p>
              <ul className="text-gray-500 font-light">
                <li className="mb-2">4.1.- Lorem ipsum _____, consectetur adipisicing elit.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Exercises;