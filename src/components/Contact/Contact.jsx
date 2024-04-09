import React from 'react'
import './Contact.css'
import { FaLongArrowAltRight } from "react-icons/fa";


const Contact = () => {
  return (
    <>
   
    <div className='Contact_mainDiv'>
    <div className="contacthr_div top" >
<hr className='Contact_line' />
</div>
      <div className="Contact_flexContainer">
        <div className="Contact_textContainer">
        <div className="Contact_text">
        Explore our services minimize your budget join!
        
        </div>
        {/* button start */}

        <div className="Service_list_item contact_button">
                    <div className="Service_number_circle">
                    <FaLongArrowAltRight />
                    </div>
                    <div className="Service_number_text">
                    Contact Us
                    </div>
                </div>

        {/* button end */}
        </div>
       
        <div className="Contact_img">
            Image to be placed
        </div>
      </div>
      <div className="contacthr_div bottom" >
<hr className='Contact_line' />
</div>
    </div>
    </>
  )
}

export default Contact
