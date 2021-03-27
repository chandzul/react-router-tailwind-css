import React from 'react';
import CardHeaderFooter from "../../components/CardHeaderFooter";
import TakeExam from "../../components/TakeExam";
import Calendar from "../../components/Calendar";

function Dashboard() {
  return (
    <>
      <div className="flex flex-col w-auto md:flex-row">
        <div className="flex-auto sm:mr-6">
          {/*main content*/}

          <div className="bg-white shadow-lg rounded-2xl">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Welcome, Alex  Gerando
              </h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>
                  Next class will begin in 1 day 3.20 hours.
                </p>
              </div>
              <div className="mt-5">
                <button type="button" className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm">
                  Start Class
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 w-auto my-6 ">

            <div className=" mb-6">
              <CardHeaderFooter />
            </div>
            <div className=" mb-6">
              <CardHeaderFooter />
            </div>
            <div className=" mb-6">
              <CardHeaderFooter />
            </div>
            <div className=" mb-6">
              <CardHeaderFooter />
            </div>

          </div>

          <TakeExam />

        </div>
        <div className="w-auto md:w-72 ">
          {/*side content*/}

          <Calendar />

        </div>
      </div>


    </>
  );
}

export default Dashboard;