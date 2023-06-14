import React from "react";
import Featureimage from "./../../assests/images/workspace/features-01.png";
const Feature = ()=>{
    return(
        <>
        <div className="features layout-02 bg-white">
            <div className="container">
                 <div className="row">
                    <div className="col-12 col-lg-4 col-md-4">
                    <div  className="features-item">
                        <img  src={Featureimage} alt=""/>
                        <div  className="features-content text-left">
                            <h3 >Extraordinarily Easy</h3>
                            <p >Lorem Ipsum is simply dummy text of the printing</p>
                        </div>
                    </div>
                    </div>
                    <div  className="col-12 col-lg-4 col-md-4">
                        <div  className="features-item">
                            <img  src={Featureimage} alt=""/>
                            <div  className="features-content text-left">
                                <h3 >Truly Transparent</h3>
                                <p >Lorem Ipsum is simply dummy text of the printing</p>
                            </div>
                        </div>
                    </div>
                    <div  className="col-12 col-lg-4 col-md-4">
                        <div  className="features-item">
                            <img  src={Featureimage} alt=""/>
                            <div  className="features-content text-left">
                                <h3 >Truly Transparent</h3>
                                <p >Lorem Ipsum is simply dummy text of the printing</p>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
        </>
    )
}
export default Feature;