import React from 'react';
import TakeExam from "../../components/TakeExam";
import BadgeIcon from "../../components/assets/img/badge.svg";

function Exams() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4 w-auto">

        {/*jumbotron take exam*/}
        <div className="jumbotron col-span-3 lg:col-span-2">
          <TakeExam />
        </div>

        {/*ribbon content*/}
        <div className="col-span-3 lg:col-span-1 bg-red-200 shadow-lg rounded-2xl mb-6 px-4 py-5 p-6">
          <h1 className="mb-6 text-2xl text-black font-bold">Awards</h1>
          <div className="flex flex-1 items-center mb-6">
            <div className="flex flex-col w-32 h-32 justify-center items-center mr-4">
              <img alt="profil" src={BadgeIcon} className="mx-auto object-cover h-32 w-32 "/>
            </div>
            <div className="flex-1 pl-1">
              <div className="text-black font-medium dark:text-gray-200 text-sm">
                LEVEL
              </div>
              <div className="font-medium dark:text-white">
                Congratulations! You’re at 71.
              </div>
            </div>
          </div>
          <div className="block m-auto">
            <div>
            <span className="text-sm inline-block text-gray-500 dark:text-gray-100">
                Task done :
                <span className="text-gray-700 dark:text-white font-bold">
                    50
                </span>
                /50
            </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
              <div className="w-1/2 h-full text-center text-xs text-white bg-red-500 rounded-full">
              </div>
            </div>
          </div>
        </div>

        {/*table contente */}
        <div className="col-span-3 p-6 rounded-2xl bg-white">

          <h1 className="font-medium text-xl">Your exams </h1>
          <p className="text-gray-400 mb-4 font-light">Here you will find the details of the exams taken</p>

          <table className="min-w-full leading-normal">
            <thead>
            <tr>
              <th scope="col"
                  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                Vocabulary
              </th>
              <th scope="col"
                  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                Asigned
              </th>
              <th scope="col"
                  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                First open
              </th>
              <th scope="col"
                  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                Completed
              </th>
              <th scope="col"
                  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                Reactive
              </th>
              <th scope="col"
                  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                {/*status*/}
              </th>
            </tr>
            </thead>
            <tbody>
              <TableRow type="V" color="red"/>
              <TableRow type="G" color="blue"/>
              <TableRow type="R" color="green"/>
              <TableRow type="L" color="pink"/>
              <TableRow type="V" color="red"/>
              <TableRow type="R" color="green"/>
            </tbody>
          </table>

        </div>

      </div>
    </>
  );
}

function TableRow({type, color}) {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className={`bg-${color}-500 text-white font-medium px-3 py-1 rounded-2xl`}>{type}</span>
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">
              Possessive adjectives pt1
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          12/09/2020
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          12/09/2020
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          12/09/2020
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
          </span>
          <span className="relative">
              22/32
          </span>
        </span>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          ...
        </p>
      </td>
    </tr>
  );
}

export default Exams;