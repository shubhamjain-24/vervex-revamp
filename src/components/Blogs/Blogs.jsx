import React from 'react'
import './Blogs.css'
import img1 from '../../Images/Blog1.png'
import img2 from '../../Images/Blog2.png'
import img3 from '../../Images/Blog3.png'
import { FaLongArrowAltRight } from "react-icons/fa";


const Blogs = () => {
  return (
    <div className='Blog_mainContainer'>
      <div className="Blog_buttonContainer blogbutton" >
      <div className="Service_number_circle">
         +
        </div>
        <div className="Service_number_text" style={{marginLeft:"10px"}}>
                Recents Blogs
        </div>
      </div>
      <div className="Blog_dataContainer">
        <div style={{cursor:"pointer"}} className="Blog_subcontainer1">
            <img src={img1} alt="" className="blogimage" />
            <div className="Blog_date">
            Shubham Jain, 09 March 2024
            </div>
            <div className="blog_title Main_tittle">
            The Evolution of Cloud Computing
            </div>
            <div className="blog_desc blog1dec">
            "Embark on a journey through the remarkable advancements in cloud technology, a transformative force reshaping businesses worldwide. From traditional server setups to dynamic cloud infrastructure, witness the evolution driving unparalleled efficiency, scalability, and innovation, propelling organizations toward newfound heights of success and competitiveness in today's digital landscape."
            </div>
        </div>
        <div className="Blog_subcontainer2 ">
          {/* blog2 */}
            <div style={{cursor:"pointer"}}className="blog_smallContainer blog2 small_blog_1">            
        <img src={img2} alt="" className="blogimage" />
            <div className="blog_title small_blog">
            Decoding Blockchain: A Primer            </div>
            <div className="blog_desc small_blog_desc">
            Unravel the complexities of blockchain and its potential to revolutionize industries, empowering secure, transparent transactions.
            </div>
            </div>
            {/* blog3 */}
            <div className="blog_smallContainer blog2 small_blog_2 blog_3">  
        <img src={img3} alt="" className="blogimage" />
            <div  className="blog_title small_blog">
            AI Revolutionizing Healthcare       </div>
            <div className="blog_desc small_blog_desc">
            Explore the integration of AI in healthcare, transforming patient care and medical research with innovative technology. This is the power of AI.
            </div>
            </div>
        </div>
      </div>
      <div style={{marginTop:"60px"}} className="Service_list_item contact_button">
                    <div className="Service_number_circle">
                    <FaLongArrowAltRight />
                    </div>
                    <div className="Service_number_text">
                    See More Blogs
                    </div>
                </div>
    </div>
  )
}

export default Blogs
