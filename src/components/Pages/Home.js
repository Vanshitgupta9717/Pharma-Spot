import React from 'react';
import headerimg from '../../assets/doctorheader.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSquare } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <section
    className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full"
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
      <div className="flex items-center gap-2 justify-center bg-indigo-600 px-4 py-1 rounded-full">
      <p className="text-base text-white font-light">
           One Place For Best Medicines
          </p>
      </div>
      <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
      Protect & Take Care Of Your
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
          Health
          </span>
        </p>

        <div className="flex items-center gap-2 justify-center bg-indigo-600 px-4 py-1 rounded-full">
        <p className="text-base text-white font-light cursor-pointer">
           Read More
          </p>
          </div>
      </div>

      <div className="py-2 flex-1 flex items-center relative">
      <img
          src={headerimg}
          className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />
      </div>

    </section>
  )
}

export default Home