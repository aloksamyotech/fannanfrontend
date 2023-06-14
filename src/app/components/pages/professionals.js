import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import CmnBanner from "../core-component/cmnBanner";
import Header from "../Header/header";
import CategoryBlock from "./../../../categoryBlock";
const Professional = () => {
    return (

        <>
            <Header />
            <CmnBanner
                mainhead="Professional"
            />
            <div className="professional-wrp bg-white">



                <div className="container">

                    <div className="row" id="test">
                        <div className="col-md-9 text-left">
                            <h1>Interior Designers</h1>
                        </div>
                        <div className="col-md-3 text-right">
                            <a href="#" className="View-all">View All</a>
                        </div>
                    </div>
                    <div className="category-block">
                        <CategoryBlock />
                    </div>
                    <div className="row" id="test2">
                        <div className="col-md-9 text-left">
                            <h1>Carpenter Designers</h1>
                        </div>
                        <div className="col-md-3 text-right">
                            <a href="#" className="View-all">View All</a>
                        </div>
                    </div>
                    <div className="category-block">
                        <CategoryBlock />
                    </div>
                    <div className="row" id="test2">
                        <div className="col-md-9 text-left">
                            <h1>Carpenter Designers</h1>
                        </div>
                        <div className="col-md-3 text-right">
                            <a href="#" className="View-all">View All</a>
                        </div>
                    </div>
                    <div className="category-block">
                        <CategoryBlock />
                    </div>

                </div>



            </div>
        </>
    )
}
export default Professional;