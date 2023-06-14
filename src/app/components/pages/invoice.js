import React from "react";
import DashboradMenu from "./../DashboardMenu";
const Invoice = ()=>{
    return(
        <>
        <DashboradMenu/>
        <div className="invoice-wrp">
            <div className="container">
                <div className="member-place-wrap">
                    <div className="member-wrap-top">
                         <h2 >Invoice</h2>
                    </div>
                </div>
                <div  className="member-filter text-left">
                    <div  className="mf-left">
                        <form  action="#" method="GET">
                            <div  className="field-select">
                                <select  name="place_cities">
                                    <option  value="20">Show 20</option>
                                    <option  value="40">Show 40</option>
                                </select>
                            <i  className="la la-angle-down"></i>
                            </div>
                    <div  className="field-select">
                        <select  name="place_cities">
                            <option  value="0">All status</option>
                            <option  value="approve">Approve</option>
                            <option  value="pending">Pending</option>
                            <option  value="cancel">Cancel</option>
                        </select>
                    <i  className="la la-angle-down"></i>
                    </div>
                        </form>
                    </div>
                    <div  className="mf-right">
                        <form  action="#" method="GET" className="site__search__form">
                            <div  className="site__search__field">
                                <span  className="site__search__icon">
                                    <i  className="la la-search"></i>
                                </span>
                                <input  type="text" name="s" placeholder="Search" className="site__search__input"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div  className="row">
                <div  className="col-md-4">
                <div  className="d-flex justify-content-center container mt-5">
                <div  className="card p-3 bg-white">
                {/* <i  className="fa fa-apple"></i> */}
                <div  className="about-product text-center mt-2">
                <img  src="https://i.imgur.com/3VTaSeb.png" width="300"/>
                <div >
                <h4 >Believing is seeing</h4>
                <h6  className="mt-0 text-black-50">Apple pro display XDR</h6>
                </div>
                </div>
                <div  className="stats mt-2">
                <div  className="d-flex justify-content-between p-price">
                <span >Pro Display XDR</span>
                <span >$5,999</span>
                </div>
                <div  className="d-flex justify-content-between p-price">
                <span >Pro stand</span>
                <span >$999</span>
                </div>
                <div  className="d-flex justify-content-between p-price">
                <span >Vesa Mount Adapter</span>
                <span >$199</span>
                </div>
                </div>
                <div  className="d-flex justify-content-between total font-weight-bold mt-4">
                <span >Total</span>
                <span >$7,197.00</span>
                </div>
                </div>
                </div>
                </div>
                <div  className="col-md-4">
                <div  className="d-flex justify-content-center container mt-5">
                <div  className="card p-3 bg-white">
                    {/* <i  className="fa fa-apple"></i> */}
                    <div  className="about-product text-center mt-2">
                        <img  src="https://i.imgur.com/3VTaSeb.png" width="300"/>
                        <div >
                            <h4 >Believing is seeing</h4>
                            <h6  className="mt-0 text-black-50">Apple pro display XDR</h6>
                        </div>
                    </div>
                <div  className="stats mt-2">
                    <div  className="d-flex justify-content-between p-price">
                        <span >Pro Display XDR</span>
                        <span >$5,999</span>
                    </div>
                <div  className="d-flex justify-content-between p-price">
                    <span >Pro stand</span>
                    <span >$999</span>
                </div>
                <div  className="d-flex justify-content-between p-price">
                    <span >Vesa Mount Adapter</span>
                    <span >$199</span>
                </div>
                </div>
                <div  className="d-flex justify-content-between total font-weight-bold mt-4">
                    <span >Total</span>
                    <span >$7,197.00</span>
                </div>
                </div>
                </div>
                </div>
                <div  className="col-md-4">
                    <div  className="d-flex justify-content-center container mt-5">
                        <div  className="card p-3 bg-white">
                            {/* <i  className="fa fa-apple"></i> */}
                        <div  className="about-product text-center mt-2">
                            <img  src="https://i.imgur.com/3VTaSeb.png" width="300"/>
                        <div >
                            <h4 >Believing is seeing</h4>
                            <h6  className="mt-0 text-black-50">Apple pro display XDR</h6>
                        </div>
                    </div>
                    <div  className="stats mt-2">
                        <div  className="d-flex justify-content-between p-price">
                            <span >Pro Display XDR</span>
                            <span >$5,999</span>
                        </div>
                    <div  className="d-flex justify-content-between p-price">
                        <span >Pro stand</span>
                        <span >$999</span>
                    </div>
                    <div  className="d-flex justify-content-between p-price">
                        <span >Vesa Mount Adapter</span>
                        <span >$199</span>
                    </div>
                    </div>
                    <div  className="d-flex justify-content-between total font-weight-bold mt-4">
                        <span >Total</span>
                        <span >$7,197.00</span>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Invoice;