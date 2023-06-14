import React from "react";
import TeamImage from './../../assests/images/people/people-1.jpg';
import Teamimage2 from './../../assests/images/people/people-2.jpg';
import Teamimage3 from './../../assests/images/people/people-3.jpg';
import Teamimage4 from './../../assests/images/people/people-4.jpg';
const Team = ()=>{
    return(
        <>
        <div className="bg-white">
        <div className="container">
        <div className="ot-content grid grid-4">
            <div className="grid-item ot-item hover__box">
                <div  className="hover__box__thumb">
                   <img  src= { TeamImage } alt=""/>
                </div>
                <div  className="ot-info text-left">
                  <h3 >Jaspreet Bhamrai</h3>
                  <span  className="job">Co - founder</span>
                </div>
            </div>

            <div  className="grid-item ot-item hover__box">
                <div  className="hover__box__thumb">
                   <img  src= { Teamimage2 } alt=""/>
                </div>
                <div  className="ot-info text-left">
                  <h3 >Jaspreet Bhamrai</h3>
                  <span  className="job">Co - founder</span>
                </div>
            </div>

            <div  className="grid-item ot-item hover__box">
                <div  className="hover__box__thumb">
                   <img  src= { Teamimage3 } alt=""/>
                </div>
                <div  className="ot-info text-left">
                  <h3 >Jaspreet Bhamrai</h3>
                  <span  className="job">Co - founder</span>
                </div>
            </div>

            <div  className="grid-item ot-item hover__box">
                <div  className="hover__box__thumb">
                   <img  src= { Teamimage4 } alt=""/>
                </div>
                <div  className="ot-info text-left">
                  <h3 >Jaspreet Bhamrai</h3>
                  <span  className="job">Co - founder</span>
                </div>
            </div>
        </div>
        
        </div>
        </div>
        </>
    )
}
export default Team;