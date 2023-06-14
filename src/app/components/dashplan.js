import React, { useEffect, useState } from "react";
import planImage from './../../assests/images/assets/img-people.svg';
import avatartImage from './../../assests/images/avatars/male-2.jpg';
const Plan = ()=>{
    const [isLoaded, setIsLoaded] = useState(false);
    const[isPageLoaded, setIsPageLoaded] = useState(false);
    useEffect(() =>{
        setIsLoaded(true);
    },)
        return(
            <>
            <div className="container">
            <div className="upgrade-box text-left">
                   <h1>Choose a plan to submit your work!</h1>
                     <p>Pay as you go service, cancel anytime.</p>
                    <a title="Upgrade now" className="btn" onClick={() =>{this.setIsLoaded(false)}}>Upgrade now</a>
                    <img src={planImage} alt="Upgrade now"/><a _ngcontent-yeo-c13="" href="#" data-close="upgrade-box" class="close"><i _ngcontent-yeo-c13="" class="las la-times"></i></a>
                </div>
            </div>
            </>
        )
    // return(
    //     <>
    //     <div className="container">
    //     <div className="upgrade-box text-left">
    //            <h1>Choose a plan to submit your work!</h1>
    //              <p>Pay as you go service, cancel anytime.</p>
    //             <a title="Upgrade now" className="btn" onClick={() =>{this.setIsLoaded(false)}}>Upgrade now</a>
    //             <img src={planImage} alt="Upgrade now"/><a _ngcontent-yeo-c13="" href="#" data-close="upgrade-box" class="close"><i _ngcontent-yeo-c13="" class="las la-times"></i></a>
    //         </div>
    //     </div>
    //     </>
    // )
}
export default Plan;