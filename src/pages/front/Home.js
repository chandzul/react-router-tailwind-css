import React from 'react';

import girl from '../../components/assets/img/girl.png';
import cambridge from '../../components/assets/img/cambridge.png';
import toefl from '../../components/assets/img/toefl.png';
import {Link} from "react-router-dom";

function Home() {
  return (
    <>
      <main className="lg:relative my-6">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Online learning,</span>
              {/* space */}
              <span className="block text-yellow-400 xl:inline">anything, anytyme, anywhere</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              We prepapre for english qualifications.
            </p>
            <div className="flex mt-6">
              <img className="mr-6" src={cambridge} alt="Cambridge"/>
              <img className="block" src={toefl} alt="Toelf"/>
            </div>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link to="/login" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10">
                  Get started
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link to="/signup" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-400 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  Live demo
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img className="absolute inset-0 w-full h-full object-cover sm:rounded-bl-2xl sm:rounded-tl-2xl" src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2102&amp;q=80" alt="" />
        </div>
      </main>
    </>
  );
}

export default Home;