import React from 'react'
import './Footer.css'
import footerlogo from "../../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPhone, faSquare } from '@fortawesome/free-solid-svg-icons'
import instagram from "../../assets/instagram.png"
import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"



function Footer() {
  return (
    <footer>
        <div className='container'>
        <div className="row">
        <div className="col-md-3 col-sm-6">
            <img src={footerlogo} className='footerlogo' />
            <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, 
               dolore smod tempor incididunt ut labore et.</p>
               <div className="footer-contact">
                 <div className="footer-icon">
                  <FontAwesomeIcon icon={faPhone} />
                 </div>
                 <div className="footer-text">
                      <h6>Contact Us </h6>
                      <h4>+91 9717161673</h4>
                 </div>
               </div>
        </div>
        <div className="col-md-3 col-sm-6">
            <h2>Quick Links</h2>
            <ul>
            <li> <a href="#"> Home </a> </li>
            <li> <a href="#"> About </a> </li>
            <li> <a href="#"> Blog </a> </li>
            <li> <a href="#"> FAQ's </a> </li>
            <li> <a href="#"> Our Team </a> </li>
            </ul>
        </div>
        <div className="col-md-3 col-sm-6">
        <h2>Our Services</h2>
            <ul>
            <li> <a href="#"> Precise Diagnosis </a> </li>
            <li> <a href="#"> Ambulance Services </a> </li>
            </ul>
        </div>
        <div className="col-md-3 col-sm-6 ">
            <h2>Subscribe</h2>
            <form>
            <input type="email" placeholder="Enter Email"/>
            <button type="submit" > Subscribe Now </button>
            </form>
            <ul className="social">
            <li><a href="#"> <img src={instagram} /></a></li>
            <li><a href="#"> <img src={twitter} /></a></li>
            <li><a href="#"> <img src={facebook} /></a></li>
            </ul>
        </div>

        </div>
          
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-1g-12 col-md-12">
                <span>Copyright © 2023 Design & Developed by Team Code Crusadors </span>
              </div>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer