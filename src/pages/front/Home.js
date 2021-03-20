import React from 'react';

import girl from '../../components/assets/img/girl.png';
import cambridge from '../../components/assets/img/cambridge.png';
import toefl from '../../components/assets/img/toefl.png';

function Home() {
  return (
    <>
      <div class="container mx-auto my-6">
        <div class="bg-gray-100 dark:bg-gray-800 flex relative z-20 items-center overflow-hidden rounded-xl">
          <div class="px-6 flex h-full relative py-16">
            <div class="sm:w-2/3 lg:w-2/5 flex flex-col h-full content-between ">
              <h1 class=" text-4xl sm:text-6xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                Online learning, anything,
                anytyme,
                anywhere
              </h1>
              <p class="text-sm sm:text-base text-gray-700 dark:text-white my-6">
                Dimension of reality that makes change possible and understandable.
              </p>
              <div class="flex mt-8">
                <a href="#" class="uppercase py-2 px-4 rounded-xl bg-black border-2 border-transparent text-white text-md mr-4 hover:bg-yellow-400">
                  Sign up <span class="material-icons-outlined"></span>
                </a>
              </div>
            </div>
            <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
              <img src={girl} class="max-w-xs md:max-w-full m-auto"/>
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto mb-6 p-3">
        <p class="my-6 text-gray-600">We prepapre for english qualifications</p>
        <div class="flex ">
          <img class="mr-6" src={cambridge} alt="Cambridge" />
          <img class="block" src={toefl} alt="Toelf" />
        </div>
      </div>
    </>
  );
}

export default Home;