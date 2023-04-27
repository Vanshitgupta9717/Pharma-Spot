import React from 'react'
import FormContact from './FormContact'
import HeroBg from "../../img/Herobg2.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGlobe, faHeart, faMap, faMobile } from '@fortawesome/free-solid-svg-icons';

function Contact2() {
  return (
    <section
    className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="contact"
    >
        <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-indigo-600 px-4 py-1 rounded-full">
        <p className="text-base text-3xl text-white font-light">
            CONTACT US
          </p>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
            Get In 
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Touch
          </span>
        </p>
        <FormContact />
        
        </div>

        <div className="py-2 flex-1 flex items-center relative">

        <div className="side">
                <div className="overlay">
                <h3>Contact US For Any Informations </h3>
                <li><FontAwesomeIcon icon={faMap}/>Location</li>
                <hr />
                <p>Delhi Technological University, New Delhi, INDIA</p>
                <li><FontAwesomeIcon icon={faEnvelope}/>Email & Phone</li>
                <hr />
                <p>Codecrusadors@gmail.com</p>
                <p>+91 9717161673</p>
                <li><FontAwesomeIcon icon={faGlobe}/>Follow Us</li>
                <ul>
                <li><FontAwesomeIcon icon={faHeart}/></li>
                <li><FontAwesomeIcon icon={faGlobe}/></li>
                <li><FontAwesomeIcon icon={faMobile}/></li>
                <li><FontAwesomeIcon icon={faGlobe}/></li>
                </ul>
                </div>
            </div>
        </div>


    </section>
  )
}

export default Contact2