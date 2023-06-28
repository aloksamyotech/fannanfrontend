import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CmnBanner from "../core-component/cmnBanner";
import Header from "../Header/header";
import CategoryBlock from "./../../../categoryBlock";
import axios from "axios";
import webUrl from "../core-component/webUrl";
const Professional = () => {
  const [categories, setCategories] = useState([]);
  const [posts, postsDetails] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const Categoryandpostapi = async (id) => {
    const response = await axios.get(webUrl.User_Category);
    console.log(response.data.data, "category");
    setCategories(response.data.data);
    setSelectedCategoryId(response.data.data.id);

    const postapi = await axios.get(`${webUrl.Get_Post}${selectedCategoryId}`);
    console.log(postapi, "post detils");
    postsDetails(postapi, "detisl");
  };

  useEffect(() => {
    Categoryandpostapi();
  }, [selectedCategoryId]);
  return (
    <>
      <Header />
      <CmnBanner mainhead="Professional" />
      <div className="professional-wrp bg-white">
        <div className="container">
          {categories.map((item) => {
            return (
              <>
                <div
                  className="row"
                  key={item.id}
                  onMouseEnter={() => setSelectedCategoryId(item._id)}
                >
                  <div className="col-md-9 text-left">
                    <h1>{item.title}</h1>
                  </div>
                  <div className="category-block">
                    <CategoryBlock />
                  </div>
                </div>
              </>
            );
          })}
          <div className="row" id="test2">
            <div className="col-md-9 text-left">
              <h1>Carpenter Designers</h1>
            </div>
            <div className="col-md-3 text-right">
              <a href="#" className="View-all">
                View All
              </a>
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
              <a href="#" className="View-all">
                View All
              </a>
            </div>
          </div>
          <div className="category-block">
            <CategoryBlock />
          </div>
        </div>
      </div>
    </>
  );
};
export default Professional;
