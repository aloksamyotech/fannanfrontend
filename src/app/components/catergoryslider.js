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
    console.log(data.data.data, "data");
    setCarouseldata(data.data.data);
  };

  const handleClick = async (id) => {
    const response = await axios.get(`webUrl.User_get_Details${id}`);
    navigate(`/list/${id}`);
    console.log(response, "repsonse-data");
  };

  useEffect(() => {
    carouselFunction();
  }, []);

  return (
    <>
      <div className="Categrory-wrp bg-white">
        <div className="container">
          {/* <OwlCarousel className="owl-theme" margin={10} nav items={6}> */}
          {carouseldata &&
            carouseldata?.map((item, index) => {
              return (
                <>
                  <Link to={`/list/${item._id}`}>
                    <div
                      key={item.id}
                      onClick={() => handleClick(item._id)}
                      className="categoryblock"
                    >
                      {index % 3 === 0 ? (
                        <i class="fa-solid fa-plug"></i>
                      ) : index % 5 === 1 ? (
                        <i class="fa-solid fa-ruler"></i>
                      ) : index % 5 === 2 ? (
                        <i class="fa-solid fa-car"></i>
                      ) : index % 5 === 3 ? (
                        <i class="fa-duotone fa-flower-daffodil"></i>
                      ) : (
                        <i class="fa-solid fa-paint-roller"></i>
                      )}
                      {/* <img src={item.image} alt="categrory-image" /> */}
                      <h2 className="category-title">{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                  </Link>
                </>
              );
            })}
          {/* </OwlCarousel> */}
        </div>
      </div>
    </>
  );
};
export default Functionalcarousel;
