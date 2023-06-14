import React from "react";
import imageService from './../../assests/images/explore-01.jpg';
const Servicelst = () => {
    let data = [
        {
            id: 1,
            name: "Investment",
            image: imageService,
            category: "category1",
            discription: "Sample Text. CLick to select the text Element.",
            price: "$420"
        },
        {
            id: 2,
            name: "Investment",
            image: imageService,
            category: "category1",
            discription: "Sample Text. CLick to select the text Element.",
            price: "$420"
        },
        {
            id: 3,
            name: "Investment",
            image: imageService,
            category: "category1",
            discription: "Sample Text. CLick to select the text Element.",
            price: "$420"
        },
        {
            id: 4,
            name: "Investment",
            image: imageService,
            category: "category1",
            discription: "Sample Text. CLick to select the text Element.",
            price: "$420"
        },
        {
            id: 5,
            name: "Investment",
            image: imageService,
            category: "category1",
            discription: "Sample Text. CLick to select the text Element.",
            price: "$420"
        }, {
            id: 6,
            name: "Investment",
            image: imageService,
            category: "category1",
            discription: "Sample Text. CLick to select the text Element.",
            price: "$420"
        }
    ]
    return (
        <>
            <div className="service bg-white">
                <div className="container">
                    <div className="row">
                        <div className="service-post-left col-md-6">
                            <button className="service-add-btn">Add Services</button>
                        </div>
                        <div className="service-post-right col-md-6">
                            <form method="post" action="#">
                                <div className="input-group">
                                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                    <button type="button" className="btn btn-outline-primary">search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="servicewrp bg-white">
                        {data.map((item, index) => {
                            return (
                                <>
                                    <div className="service-block">
                                        <img src={item.image}></img>
                                        <h5>{item.name}</h5>
                                        <div className="post-category">
                                            <h6>{item.category}</h6>
                                            <h6>{item.category}</h6>
                                            <h6>{item.category}</h6>
                                        </div>
                                        <p>{item.discription}</p>
                                        <div className="price-wrok">
                                            <span>{item.price}</span>
                                        </div>
                                    </div>
                                </>
                            )

                        })}
                    </div>
                    <div className="pagination align-left">
                        <div  className="pagination__numbers">
                            <span >1</span>
                            <a  title="2" href="#">2</a>
                            <a  title="3" href="#">3</a>
                            <a  title="Next" href="#">
                                <i  className="la la-angle-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Servicelst;