import React from 'react'
import './Marquee1.css'
import Marquee from "react-fast-marquee";

const Marquee1 = () => {
    

  return (
   <>
   <Marquee gradient={true} pauseOnHover={true}className='MarqueeTag'>
    <div className="marqueeText">React JS</div>
    <div className="marqueeText">Node JS</div>
    <div className="marqueeText">Express JS</div>
    <div className="marqueeText">Vue JS</div>
    <div className="marqueeText">Next JS</div>
    <div className="marqueeText">Mongo DB</div>
</Marquee>
<Marquee gradient={true} pauseOnHover={true} direction='right' className='MarqueeTag2'>
    <div className="marqueeText">AI</div>
    <div className="marqueeText">ML</div>
    <div className="marqueeText">Java</div>
    <div className="marqueeText">Python</div>
    <div className="marqueeText">My Sql</div>
    <div className="marqueeText">Java Script</div>
</Marquee>
{/* <div className="hrdiv">
<hr className='line' />
</div> */}

   </>
  )
}

export default Marquee1
