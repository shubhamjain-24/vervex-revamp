import React from 'react'
import './Testemonials.css'
import img1 from '../../Images/Profile1.jpg'
import img2 from '../../Images/Profile2.jpg'
import img3 from '../../Images/Profile3.jpg'
import { FaLongArrowAltRight } from "react-icons/fa";

const Testemonials = () => {
  return (
    <div className='testemonials_mainDiv'>
      <div className="testemonials_textDiv">
        <div className="testemonial_headText">
        Discover the Stories Behind Our Successes!
        </div>
        <div className="testemonial_subText">
        Step into the world of our clients' achievements, where our solutions have turned dreams into reality, and success stories into legacies.
        </div>
      </div>

      <div className="testemonial_blog">
        <div className="testemonial_card1">
            <img src={img1} alt="" className="testemonial_card_image" />
            <div className="testemonial_card_head">
            SOPify
            </div>
            <div className="testemonial_card_subText">
            Vervex has been our incredible partner, Their website building services has transformed our online presence, our site now not only looks fantastic but also works seamlessly
            </div>
        </div>
        <div className="testemonial_card1">
        <img src={img2} alt="" className="testemonial_card_image" />
            <div className="testemonial_card_head">
            Tantukosh
            </div>
            <div className="testemonial_card_subText">
            Vervex has been our incredible partner, Their website building services has transformed our online presence, our site now not only looks fantastic but also works seamlessly
            </div>
        </div>
        <div className="testemonial_card1">
        <img src={img3} alt="" className="testemonial_card_image" />
            <div className="testemonial_card_head">
            Beyond Bharat Consultancy
            </div>
            <div className="testemonial_card_subText">
            Vervex has been our incredible partner, Their website building services has transformed our online presence, our site now not only looks fantastic but also works seamlessly
            </div>
        </div>
      </div>
      <div className="Testemonial_button_Container">
      <div className="Service_number_circle">
                    <FaLongArrowAltRight />
                    </div>
                    <div className="Service_number_text" style={{marginLeft:"10px"}}>
                    Contact Us
                    </div>
      </div>
      <div className="testemonialhr_div">
<hr className='testemonial_line' />
</div>
    </div>
  )
}

export default Testemonials
