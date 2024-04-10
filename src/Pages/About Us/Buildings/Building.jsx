import React from "react";
import "./Buildings.css";
import img1 from "../../../Images/building1.png";
import img2 from "../../../Images/building2.png";
import img3 from "../../../Images/building3.png";

const Building = () => {
  return (
    <>
      <div className="building_mainCotnainer">
        <div className="building_headTextContainer">
            <div className="bulinding_headText">
            Empowering Growth with IT Solutions - Vervex
            </div>
            <div className="building_subText">
            Vervex specializes in website development, application design, SEO strategies, and product management. We tailor bespoke solutions for each client, maximizing online presence and driving growth. Partner with us for digital excellence.
            </div>
        </div>
        <div className="building_subContainer">
          <div className="building_div1">
            <div className="building_imageContainer">
            <div className="buildings_data">
                   <p className="buildingDescription">
                   Boost your small store with <span className="buildingText2">VERVE</span> <span className="buildingText3">X</span> Start your digital journey.
                   </p>
                </div>
                <div className="building_whiteCircle">
                    <div className="building_whiteCircle2">
                    </div>
                </div>
              <img src={img1} alt="" className="building_image" />
            </div>
          </div>

          {/* div 2 */}
          <div className="building_div2">
          <div className="building_imageContainer">
            <div className="buildings_data">
                   <p className="buildingDescription">
                   Grow exponentially with <span className="buildingText2">VERVE</span> <span className="buildingText3">X</span> Power your success.
                   </p>
                </div>
                <div className="building_whiteCircle">
                    <div className="building_whiteCircle2">
                    </div>
                </div>
              <img src={img2} alt="" className="building_image buildings_image2" />
            </div>
          </div>

          {/* div3 */}
          <div className="building_div3">
          <div className="building_imageContainer">
            <div className="buildings_data">
                   <p className="buildingDescription">
                   Scale to the top with <span className="buildingText2">VERVE</span> <span className="buildingText3">X</span> Lead your industry.
                   </p>
                </div>
                <div className="building_whiteCircle">
                    <div className="building_whiteCircle2">
                    </div>
                </div>
              <img src={img3} alt="" className="building_image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Building;
