import React from 'react';
import PropTypes from 'prop-types';

About.propTypes = {

};

function About() {
  return (
    <div>
      <h1 className='text-4xl'>About Page</h1>

      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src='https://s.gravatar.com/avatar/9a01546f13f3ac1f91dd46af99a7e800' alt="Display" />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            Blessing Krofegha
          </div>
          <p className="text-gray-700 text-base">
            When i’m not coding i switch to netflix with biscuits and cold tea as my companion. <span></span>😜
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Software Engineer</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Writter</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2 ml-20">#Public Speaker</span>
        </div>
      </div>

    </div>
  );
}

export default About;