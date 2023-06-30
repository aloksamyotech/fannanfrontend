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
    setSelectedCategoryId(response.data.data._id);

    const postapi = await axios.get(
      `${webUrl.User_By_Category}${selectedCategoryId}`
    );
    console.log(postapi.data.data, "post detils");
    postsDetails(postapi.data.data, "detisl");
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
                  <div className="category-block row">
                    {posts.map((postitem) => {
                      return (
                        <div className="col-lg-3 col-md-6">
                          <div class="place-item layout-02 place-hover">
                            <div class="place-inner">
                              <div class="place-thumb">
                                <Link to="/Artist" class="entry-thumb">
                                  <img
                                    src="/static/media/07.6e62f3fa86eebcd21e01.jpg"
                                    alt=""
                                  />
                                </Link>
                                <a href="#" title="Author" class="author">
                                  <img
                                    src="/static/media/male-4.781d47d9995f2df3dd6a.jpg"
                                    alt="Author"
                                  />
                                </a>
                              </div>
                              <div class="entry-detail text-left">
                                <div class="entry-head">
                                  <div class="place-type list-item">
                                    <span>{postitem.firstname}</span>
                                  </div>
                                  <div class="place-city">
                                    <a href="#"></a>
                                  </div>
                                </div>
                                <h3 class="place-title">
                                  <a href="04_place-details-1.html"></a>
                                </h3>
                                <div className="folow-section">
                                  <div className="follower-block">
                                    <h4>{postitem.firstname}</h4>
                                    <h3>Software</h3>
                                  </div>
                                  <div className="posts-block">
                                    <h4>Harhsit</h4>
                                    <h3>Mehta</h3>
                                  </div>
                                </div>
                                <div class="entry-bottom">
                                  <div class="place-preview">
                                    <div class="place-rating">
                                      <span>5.0</span>
                                      <i class="la la-star"></i>
                                    </div>
                                    <span class="count-reviews">
                                      (2 Reviews)
                                    </span>
                                  </div>
                                  <div class="place-price">
                                    <span>$$</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Professional;
