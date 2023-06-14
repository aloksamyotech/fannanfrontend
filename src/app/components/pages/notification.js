import React from "react";
import DashboradMenu from "./../DashboardMenu";
const Notification = ()=>{
    return(
   <>
        <DashboradMenu/>
        <div className="Notification-wrp bg-white">
            <div className="container">
            <div  className="row text-left">
   <div  className="col-md-4">
      <div  className="card-box">
         <div  className="card-title">
            <h2 >Lorem ipsum dolor si.</h2>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, </p>
         </div>
         <div  className="card-link"><a  href="" className="c-link">Learn More <i  className="fa fa-angle-right"></i></a></div>
      </div>
   </div>
   <div  className="col-md-4">
      <div  className="card-box">
         <div  className="card-title">
            <h2 >Lorem ipsum dolor si.</h2>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, </p>
         </div>
         <div  className="card-link"><a  href="" className="c-link">Learn More <i  className="fa fa-angle-right"></i></a></div>
      </div>
   </div>
   <div  className="col-md-4">
      <div  className="card-box">
         <div  className="card-title">
            <h2 >Lorem ipsum dolor si.</h2>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, </p>
         </div>
         <div  className="card-link"><a  href="" className="c-link">Learn More <i  className="fa fa-angle-right"></i></a></div>
      </div>
   </div>
</div>
            </div>
        </div>
        </>
    )
}
export default Notification;
