import React from "react";
import Adash from "../artistMenuDashboard";
import Dashstatics from "./../dasmemberStatis";
import DashMessage from "./../dashsmallmessaages";
const ArtDash = ()=>{
    return(
        <>
        <Adash/>
        <div className="wishlist-wrp">
<div className="container">
        <div  className="member-wrap-top">
            <h2 >Welcome back! Kevin</h2>
        </div>
        <div  className="member-statistical">
   <div  className="row">
      <div  className="col-lg-2 col-6">
         <div  className="item blue">
            <h3 >Active works</h3>
            <span  className="number">0</span><span  className="line"></span>
         </div>
      </div>
      <div  className="col-lg-2 col-6">
         <div  className="item green">
            <h3 >Jobs</h3>
            <span  className="number">12</span><span  className="line"></span>
         </div>
      </div>
      <div  className="col-lg-2 col-6">
         <div  className="item yellow">
            <h3 >Total Reviews</h3>
            <span  className="number">6</span><span  className="line"></span>
         </div>
      </div>
      <div  className="col-lg-2 col-6">
         <div  className="item purple">
            <h3 >Total Views</h3>
            <span  className="number">145</span><span  className="line"></span>
         </div>
      </div>
      <div  className="col-lg-2 col-6">
         <div  className="item green">
            <h3 >Total Earnings</h3>
            <span  className="number">$ 145</span><span  className="line"></span>
         </div>
      </div>
      <div  className="col-lg-2 col-6">
         <div  className="item yellow">
            <h3 >Wallet</h3>
            <span  className="number">$6</span><span  className="line"></span>
         </div>
      </div>
   </div>
    </div>
</div>
<DashMessage />
      </div>
        </>
    )
}
export default ArtDash;