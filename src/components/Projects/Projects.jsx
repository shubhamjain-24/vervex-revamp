import React from 'react'
import './Projects.css'
import img1 from '../../Images/Project1.png'
import img2 from '../../Images/Project2.png'
import img3 from '../../Images/Project3.png'
const Projects = () => {
  return (
    <div className='ProjectsMainDiv'>
      <div className="Projects_headTextDiv">
        <div className="Project_head">
        Fueling Digital Transformation
        </div>
        <div className="Project_subText">
        Leveraging innovative web and app solutions to drive business growth and digital success.       
         </div>
      </div>
      <div className="Project_itemDiv">
        <div className="Project_item1 Project1">
            <img src={img1} alt="" className="projectItem1img" />
            <div className="projectItem1_text">
                SOPify
            </div>
            <div className="projectItem1_button">
            <div className="projectItem1_button_circle">
                + 
            </div>
            <div className="projectItem1_button_text">
                Explore
            </div>
            </div>
            
        </div>
        <div className="Project_item1 Project2 item2">
            <img src={img2} alt="" className="projectItem1img" />
            <div className="projectItem1_text">
                Beyond Bharat Consultancy
            </div>
            <div className="projectItem1_button">
            <div className="projectItem1_button_circle">
                + 
            </div>
            <div className="projectItem1_button_text">
                Explore
            </div>
            </div>
            
        </div>
      </div>
      <div className="Project_itemDiv Project_itemDiv2">
        <div className="Project_item1 Project2">
            <img src={img3} alt="" className="projectItem1img" />
            <div className="projectItem1_text">
                Tantukosh
            </div>
            <div className="projectItem1_button">
            <div className="projectItem1_button_circle">
                + 
            </div>
            <div className="projectItem1_button_text">
                Explore
            </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Projects
