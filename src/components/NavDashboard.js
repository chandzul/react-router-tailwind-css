import React from 'react';
import { Link } from 'react-router-dom';

import logo from './assets/img/logo.png'

function NavDashboard() {
  return (
  <div class="flex flex-col sm:flex-row bg-yellow-400 px-6">
    <div class="flex-1 flex justify-center md:justify-start">
      <Link to='/'>
        <img class="h-32" src={logo} alt="Name app" />
      </Link>
    </div>
    <div class="flex-1">
      <ul class="flex gap-6 justify-center h-full items-center font-semibold">
        <Link to='/'>
          <li class="lg:mr-6">Home</li>
        </Link>
        <Link to='/courses'>
          <li class="lg:mr-6">Courses</li>
        </Link>
        <Link to='/events'>
          <li class="">Events</li>
        </Link>
      </ul>
    </div>
    <div class="flex-1 my-6 sm:m-0">
      <ul class="flex gap-6 justify-center sm:justify-end h-full items-center font-semibold">
        <Link to='/login'>
          <li><spam class="lg:mr-6">Log in</spam></li>
        </Link>
        <Link to='/signup'>
          <li><spam class="rounded-xl bg-black text-white py-2 px-4">Sign up</spam></li>
        </Link>
      </ul>
    </div>
  </div>
  );
}

export default NavDashboard;