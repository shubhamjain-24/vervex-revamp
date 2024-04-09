import React from 'react'
import './Intro.css'

const Intro = () => {
  return (
    <div className='IntroMaindiv'>
        <div className="Intromainhead">
            VERVE<span className='IntroMainheadHighlight'>X</span>
        </div>
        <div className="Introsubtext">
        "Vervex crafts top-tier websites that captivate users and drive results. Our team's expertise and passion for innovation ensure exceptional digital solutions, empowering your brand online."
        </div>
        <div className="IntroNumbersDiv">
            <div className="IntroNumbersSubDiv1">
                <div className="IntroNumberCount">
                    7+
                </div>
                <div className="IntroNumberText">
                    Projects Done
                </div>
            </div>
            <div className="IntroNumbersSubDiv1">
            <div className="IntroNumberCount">
                    10+
                </div>
                <div className="IntroNumberText">
                    Happy Clients
                </div>
            </div>
            <div className="IntroNumbersSubDiv1">
            <div className="IntroNumberCount">
                    30+
                </div>
                <div className="IntroNumberText">
                    Sprints Completed
                </div>
            </div>
        </div>
    </div>
  )
}
export default Intro
