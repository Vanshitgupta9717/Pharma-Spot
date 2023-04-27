import React from 'react'
import Banner from '../Banner/Banner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGlobe, faHeart, faMap, faMobile } from '@fortawesome/free-solid-svg-icons';
import './Contact.css'
import FormContact from './FormContact';


const Contact = () => {
  return (
    <>
      <Banner title="contact" smtitle="contact" />
      <section className="contact-us">
       <div className="container">
       <div className="row">
         <div className="col-1g-6 col-md-6">
            
            <form>
            <div className="form-control">
              <input placeholder="Your Name">
              </input>
            </div>
            <div className="form-control">
              <input placeholder="Email">
              </input>
            </div>
            <div className="form-control">
              <input placeholder="Phone Number">
              </input>
            </div>
            <select>
              <option>Selecty Department</option>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
            </select>
            <div className="form-control">
              <textarea placeholder="Message"></textarea>
            </div>
            <button>Submit</button>
            </form>
         </div>

         <div className="col-1g-6 col-md-6">
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
       </div>
       </div>
      </section>
    </>
  )
}

export default Contact