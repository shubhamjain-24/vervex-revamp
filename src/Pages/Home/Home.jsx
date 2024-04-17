import React from 'react'
import Intro from '../../components/Intro/Intro'
import Services from '../../components/Services/Services'
import Projects from '../../components/Projects/Projects'
import Marquee1 from '../../components/Marquee/Marquee1'
import Contact from '../../components/Contact/Contact'
import Blogs from '../../components/Blogs/Blogs'
import './Home.css'
import HeroSection from '../../components/Earth/HeroSection'
import Hero_section2 from './Hero_section2'
import StarsCanvas from '../../components/canvas/Stars'

const Home = () => {
  return (
    <>
    <div className="new">
    <Hero_section2/>
    <StarsCanvas/>
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