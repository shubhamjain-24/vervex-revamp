import React, { useEffect, useState } from "react";
import "./Blogs.css";
import { FaArrowRightLong } from "react-icons/fa6";
import blogData from "../../Data/Blogdata.json";
import { NavLink } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogData);
  }, []);

  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 20) {
      return words.slice(0, 20).join(' ') + '...';
    }
    return description;
  };
  return (
    <>
      <div className="blogpage_mainContainer">
        <div className="blogpage_textContainer">
          <h1 className="blogpage_mainHead">
            Insights Hub: Stay Ahead with Vervex
          </h1>
          <p className="blogpage_subtext">
            Explore our latest articles and expert insights on technology
            trends, digital strategies, and industry innovations. Empower your
            business with knowledge.
          </p>
        </div>
        <div className="blogpage_flexContainer">
        {blogs.map((blog) => (
          <div key={blog.id} className="blogpage_blogDiv1">
            <img src={blog.image} alt="" className="blogpage_imageDiv" />
            <h3 className="blogpage_blogtittle">{blog.title}</h3>
            <p className="blogpage_description">{truncateDescription(blog.description)}</p>
            <NavLink to={`/blog/${blog.id}`} className="blogpage_button">
              Read More <FaArrowRightLong style={{ marginLeft: "8px" }} />
            </NavLink>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Blogs;
