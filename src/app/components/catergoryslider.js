import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { HashLink } from "react-router-hash-link";
import axios from "axios";
import webUrl from "./core-component/webUrl";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Functionalcarousel = () => {
  const { _id } = useParams();
  // const [getId, newGetid] = useState("");
  const [carouseldata, setCarouseldata] = useState([]);
  const [user, setUsers] = useState([]);

  const carouselFunction = async () => {
    const data = await axios.get(webUrl.User_Category);
    console.log(data, "data");
    setCarouseldata(data.data.data);
  };

  const fetchUsersByCategory = async () => {
    try {
      const response = await fetch(`${webUrl.User_By_Category}${_id}`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    carouselFunction();
    fetchUsersByCategory();
  }, [_id]);

  return (
    <>
      <div className="Categrory-wrp bg-white">
        <div className="container">
          <OwlCarousel className="owl-theme" loop margin={10} nav items={6}>
            {carouseldata &&
              carouseldata?.map((item) => {
                return (
                  <>
                    <Link to={`/list/${item._id}`}>
                      <div key={item.id}>
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
