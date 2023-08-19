import React from "react";
import { Accordion} from "react-accessible-accordion";
//import "react-accessible-accordion/dist/fancy-example.css";
//import {MdOutlineArrowDropDown}  from "react-icons/md";
import "./Value.css"
//import data from "../../utils/accordian"
//import Value from "../Value/Value";
const value = () => {
    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                {/* left side */}
                <div className="v-left">
                    <div className="image-container">
                        <img src="./value.png" alt="" />
                    </div>
                </div>

                {/* right side */}
                <div className="flexColStart v-right">
                    <span className="orangeText">Our Value</span>
                    <span className="primaryText">Value We Give to You</span>
                    <span className="secondaryText">
                      we always ready to help by providing the best services for you.
                      <br />
                      we believe a good blace to live can make your life better
                    </span>


                    <Accordion className="accordion"
                     allowMultipleExpanded={false}
                    preExpanded={[0]}>
                    </Accordion>
               </div>
            </div>
        </section>
    );
};
export default value;