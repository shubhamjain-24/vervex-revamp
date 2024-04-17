import React from "react";
import img1 from '../../Images/Blog1.png'
import { useParams } from "react-router-dom";
import './BlogPage.css'
import blogData from "../../Data/Blogdata.json";
const BlogPage = () => {
    const { id } = useParams();
  const blog = blogData.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }
  return (
    <>
       <div className="blogPage_MainContainer">
        <div className="blogPage_HeadContainer">
          <h1 className="blogPage_tittle">{blog.title}</h1>
          <div className="blogPage_dateDiv">
            <p className="blogPage_author">{blog.author}&nbsp;</p>
            <p className="blogPage_date">{blog.date}</p>
          </div>
        </div>
        <div className="blogPage_textContainer">
          <div className="blogPage_imageContainer">
            <img src={blog.image} alt="" className="blogPage_image" />
          </div>
          <h4 className="blogPage_headline">{blog.headline}</h4>
          <p className="blogPage_description">{blog.description}</p>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
