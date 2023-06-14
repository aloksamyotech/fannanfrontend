import React from "react";
import BannerImage from './../../../assests/images/bg/bg-about.png';
const CmnBanner = (props)=>{
    return(
        <>
        <div className="page-title page-title--small align-left" style={{background: `url(${BannerImage})`,}}>
            <div className="container">
            <div  className="page-title__content">
                <h1  className="page-title__name">{props.mainhead}</h1>
                <p  className="page-title__slogan">{props.subhead}</p>
            </div>
            </div>
        </div>
        </>
    )
}
export default CmnBanner;