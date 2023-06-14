import React from "react";
import AppImage from './../../assests/images/assets/app-store.png';
import GoogleImage from './../../assests/images/assets/google-play.png';
const LandingBanner  = ()=>{
    return(
        <>
        <div className="landing-banner business-landing-banner" style={{zIndex:'-1'}}>
            <div className="container">
            <div  className="lb-info">
                <h2  className="text-light">The Fannan App</h2>
                <p  className="text-light">Download the app.</p>
                <div  className="lb-button">
                    <a  href="#" title="App store">
                        <img  src={AppImage} alt="App store"/>
                    </a>
                    <a  href="#" title="Google play">
                        <img  src={GoogleImage} alt="Google play"/>
                    </a>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default LandingBanner;