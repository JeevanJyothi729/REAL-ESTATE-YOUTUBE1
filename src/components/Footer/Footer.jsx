import React from "react";
import "./Footer.css"

const Footer = () => {
    return (
        <section className="f-wrapper">
           <div className="paddings innerwidth flexCenter f-container">

            {/* left side*/}
            <div className="flexColStart f-left">
                <img src="https://github.com/ZainRk/RealEstate-web-starterpack/blob/master/public/logo2.png?raw=true" alt="" width={120}/>

                <span className="secondaryText">
                    Our vision is to make all people <br />
                    the best place to live for them.
                </span>
            </div>

            <div className="flexColStart f-right">
                <span className="primaryText">Information</span>
                <span className="secondaryText">145 New York, FL 4571, USA</span>


                <div className="flexCenter f-menu">
                      <span>Property</span>
                      <span>Services</span>
                      <span>Products</span>
                      <span>About Us</span>
                </div>
            </div>
           </div>
        </section>
    )
}

export default Footer;