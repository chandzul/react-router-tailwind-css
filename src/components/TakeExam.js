import React, { Component } from 'react';
import dateIcon from './assets/img/date.svg';

function TakeExam() {
  return (
    <>
      <div className="bg-gray-800 shadow-lg rounded-2xl mb-6">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-xl leading-6 font-medium text-white">
            Next Exam
          </h3>
          <div className="mt-2 max-w-xl text-sm text-gray-400">
            <p>
              From its medieval origins to the digital era, learn everything there.
            </p>
          </div>


          <div className="flex flex-col w-auto lg:flex-row mt-2">
            <Config title={'DATE'} data={'Wed., January 20th'} />
            <Config title={'TIME'} data={'10:00 - 11:00 (EST)'}/>
            <Config title={'DURATION'} data={'1 HRS'}/>
          </div>


          <div className="mt-5">
            <button type="button" className="inline-flex items-center justify-center px-6 py-4 border border-transparent font-medium rounded-2xl text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:text-sm">
              Take Exam
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Config({title, data}) {
  return(
    <>
      <div className="flex flex-1 items-center p-4">
        <div className="flex flex-col w-10 h-10 justify-center items-center mr-2">
            <img alt="profil" src={dateIcon} className="mx-auto object-cover h-10 w-10 "/>
        </div>
        <div className="flex-1 pl-1">
          <div className="text-gray-600 dark:text-gray-200 text-sm">
            {title}
          </div>
          <div className="font-medium text-white dark:text-white">
            {data}
          </div>

        </div>
      </div>
    </>
  );
}

export default TakeExam;