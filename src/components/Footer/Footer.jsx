import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";




const Footer = () => {
  return (
    <div className='Footer_maincontainer'>
      <div className="Footer_gridContainer">
        <div className="Footer_gridDiv1">
            <div className="Footer_gridDiv1_heading">
                VERVE<span className='footer_head_highlight'>X</span>
            </div>
            <div className="Footer_Div1_iconsDiv">
                <div className="footer_div1_text">
                    Follow us 
                </div>
                <div className="Footer_icons">
                <FaInstagram className='footer_icon' />
                <FaWhatsapp className='footer_icon' />
                <CiFacebook className='footer_icon' />
                <FaXTwitter className='footer_icon' />
                <FaLinkedinIn className='footer_icon' />
                </div>
            </div>
            <div className="footer_div1_text">
                    Find Us Here
                </div>
                <div className="footer_div1_text" style={{marginTop:"20px",color:"#777",fontSize:"16px"}}>
                    AH 107 Mahalaxmi Nagar <br />
                    Indore Madhya Pradesh
                </div>
        </div>
        <div className="Footer_gridDiv1">
        <div className="Footer_gridDiv1_heading2">
                Company
            </div>
            <ul className="footer_listitems">
                <li className="footer_item">Home</li>
                <li className="footer_item">About Us</li>
                <li className="footer_item">Contact Us</li>
                <li className="footer_item">Services</li>
                <li className="footer_item">Projects</li>
            </ul>
        </div>
        {/* div  3 */}
        <div className="Footer_gridDiv1">
        <div className="Footer_gridDiv1_heading2">
                Services
            </div>
            <ul className="footer_listitems">
                <li className="footer_item">Web Development</li>
                <li className="footer_item">App Development</li>
                <li className="footer_item">Search Engine Optimization </li>
                <li className="footer_item">AI/ML Development</li>
                <li className="footer_item">IOT Development</li>
                <li className="footer_item">Graphic Design</li>
                <li className="footer_item">
                    Product Management
                </li>
            </ul>
        </div>
        <div className="Footer_gridDiv1">
        <div className="Footer_gridDiv1_heading2">
                Any Queries?
            </div>
            <div className="Footer_email_text">
            Kindly provide your email, and we'll promptly address your queries
            </div>
            <div className="Footer_input">
                <input type="text" placeholder=" Enter your email " className="footer_email" />
                <div className="footer_arrow">
            <FaArrowRight  />
            </div>
            </div>
            <div className="Footer_contactUs">
            <div className="Footer_gridDiv1_heading2 email_section_heading">
                Mail us at
            </div>
            <a  className="Footer_mail"href="mailto:vervex.technology@gmail.com">vervex.technology@gmail.com</a>
            </div>
        </div>
       
      </div>
      <div className="testemonialhr_div footerhr">
<hr className='testemonial_line' />
<div className="Footer_copyright_text">
<FaRegCopyright style={{marginRight:"5px"}} /> Copyright VERVEX All rights reserved
</div>
</div>

    </div>
  ) 
}

export default Footer
