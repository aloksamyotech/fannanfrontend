import React from "react";
const Statistics = ()=>{
    return(
        <>
        <div className="container">
        <div className="member-statistical">
                <div className="row">
                <div className="col-lg-3 col-6">
                    <div  className="item blue">
                        <h3 >Active works</h3>
                        <span  className="number">0</span>
                        <span  className="line"></span>
                    </div>
                </div>

                <div className="col-lg-3 col-6">
                    <div  className="item green">
                        <h3 >Bookings Made</h3>
                        <span  className="number">12</span>
                        <span  className="line"></span>
                    </div>
                </div>

                <div  className="col-lg-3 col-6">
                    <div  className="item yellow">
                        <h3 >Total Reviews</h3>
                        <span  className="number">6</span>
                        <span  className="line"></span>
                    </div>
                </div>

                <div  className="col-lg-3 col-6">
                    <div  className="item purple">
                        <h3 >Total Views</h3>
                        <span  className="number">145</span>
                        <span  className="line"></span>
                    </div>
                </div>
                </div>
                </div>
        </div>
        </>
    )
}
export default Statistics;