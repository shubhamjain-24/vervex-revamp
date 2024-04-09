import React from 'react'
import './Services.css'
import img1 from '../../Images/Service.png'

const Services = () => {
  return (
    <div className='Services_mainDiv
    '>
        <div className="Services_imgDiv">
            <img src={img1} alt="" className="ServiceImage" />
        </div>
        <div className="Services_textDiv">
            <div className="Services_headText">
            Services which we Provide!
            </div>
            <div className="ServiceListdiv">
                <div className="Service_list_item">
                    <div className="Service_number_circle">
                        1
                    </div>
                    <div className="Service_number_text">
                    Web Development
                    </div>
                </div>
                {/*Item 2  */}
                <div className="Service_list_item">
                    <div className="Service_number_circle">
                        2
                    </div>
                    <div className="Service_number_text">
                    App Development
                    </div>
                </div>

                 {/*Item 3  */}
                 <div className="Service_list_item">
                    <div className="Service_number_circle">
                        3
                    </div>
                    <div className="Service_number_text">
                    Graphic Designing
                    </div>
                </div>

                {/*Item 4  */}
                <div className="Service_list_item">
                    <div className="Service_number_circle">
                        4
                    </div>
                    <div className="Service_number_text">
                    Search Engine Optimization
                    </div>
                </div>

                  {/*Item 5  */}
                  <div className="Service_list_item">
                    <div className="Service_number_circle">
                        5
                    </div>
                    <div className="Service_number_text">
                    AI/ML Development
                    </div>
                </div>

  {/*Item 6  */}
  <div className="Service_list_item">
                    <div className="Service_number_circle">
                        6
                    </div>
                    <div className="Service_number_text">
                    IOT
                    </div>
                </div>

 {/*Item 7  */}
 <div className="Service_list_item">
                    <div className="Service_number_circle">
                        7
                    </div>
                    <div className="Service_number_text">
                    Product Management 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
