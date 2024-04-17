import React from "react";
import "./ContactUs.css";
import img from "../../Images/contactUs.jpg";
import img2 from '../../Images/contact2.jpg'
import img3 from '../../Images/contact3.jpg'

const ContactUs = () => {
  return (
    <>
      <div className="contactUs_mainCotnainer">
        <div className="contactUs_flexContainer">
          <div className="ContactUs_headContainer">
            <h1 className="contactUs_head">Contact Us</h1>
            <p className="contactUs_head_subtext">
            Reach out to us today for personalized IT solutions and exceptional customer support. Your success is our priority
            </p>
          </div>
          <div className="contactUs_imageContainer">
            <img src={img} alt="" className="contactUs_image" />
          </div>
        </div>
        <div className="contactUs_floatContainer">
          <div className="contact_floating1">
            <div className="contact_floating_imageContainer">
              <img src={img2} alt="" className="floating_image" />
            </div>
            <h2 className="floatingHead">
              Talk to a member of our sales team.
            </h2>
            <p className="floating_subText">
              We'll help you find the right product and pricing for your bussiness.
            </p>
            <button className="floating_button">
              Contact Sales
            </button>
          </div>

          {/* floating 3 */}
          <div className="contact_floating1">
          <div className="contact_floating_imageContainer">
              <img src={img3} alt="" className="floating_image" />
            </div>
            <h2 className="floatingHead">
              Talk to a member of our sales team.
            </h2>
            <p className="floating_subText">
              We'll help you find the right product and pricing for your bussiness.
            </p>
            <button className="floating_button">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
