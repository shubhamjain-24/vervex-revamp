import React from 'react'
import Intro from '../../components/Intro/Intro'
import Services from '../../components/Services/Services'
import Projects from '../../components/Projects/Projects'
import Marquee1 from '../../components/Marquee/Marquee1'
import Contact from '../../components/Contact/Contact'
import Blogs from '../../components/Blogs/Blogs'
import './Home.css'

const Home = () => {
  return (
    <>
    <div className="new">

    </div>
        <Intro/>
        <Services/>
        <Projects/>
        <Marquee1/>
        <Contact/>
        <Blogs/>
    </>
  )
}

export default Home