import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import webUrl from "./core-component/webUrl";
import { Link } from "react-router-dom";

const Functionalcarousel = () => {
  const navigate = useNavigate();

  const [carouseldata, setCarouseldata] = useState([]);

  const carouselFunction = async () => {
    const data = await axios.get(webUrl.User_Category);
    console.log(data, "data");
    setCarouseldata(data.data.data);
  };

  const handleClick = async (id) => {
    navigate(`/list/${id}`);
  };

  useEffect(() => {
    carouselFunction();
  }, []);

  return (
    <>
      <div className="Categrory-wrp bg-white">
        <div className="container">
          <OwlCarousel className="owl-theme" margin={10} nav items={6}>
            {carouseldata &&
              carouseldata?.map((item) => {
                return (
                  <>
                    <Link to={`/list/${item._id}`}>
                      <div key={item.id} onClick={() => handleClick(item._id)}>
                        <img src={item.image} alt="categrory-image" />
                        <h2 className="category-title">{item.title}</h2>
                        <p>{item.description}</p>
                      </div>
                    </Link>
                  </>
                );
              })}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};
export default Functionalcarousel;
