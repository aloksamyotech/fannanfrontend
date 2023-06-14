import React from "react";
import CmnBanner from "../core-component/cmnBanner";
import Missionabt from "../missionabt";
import Team from "../abtteam";
import Header from ".././Header/header";
import CmnHead from "../core-component/cmnHeading";
const About = ()=>{
    return(
        <>
        <Header/>
        <CmnBanner
        mainhead= "About Us"
        subhead = "Tell you about us"
        />
        <Missionabt/>
        <div className="team-wrp bg-white">
        <CmnHead 
        head = "Meet Our Team"
        />
        </div>
        <Team/>
        <div className="join-team align-center bg-white">
        <CmnHead 
        head = "Join our team"/>
        <div  class="jt-content bg-white">
            <p>We’re always looking for talented individuals and <br/> people who are hungry to do great work.</p>
            <a  href="#" title="View openings" class="btn">View openings</a>
        </div>
        </div>
        </>
    )
}
export default About;