import React from "react";
import Missionimage from './../../assests/images/about-2.jpg';
const Missionabt = ()=>{
    return(
        <>
        <div className="site-content bg-white">
            <div className="container">
                <div className="company-info flex-inline">
                    <img src={Missionimage} alt="mission-image"/>
                    <div className="ci-content text-left">
                        <span>Our Company</span>
                        <h2>Mission statement</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Missionabt;