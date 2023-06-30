import { Button } from "bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import post from "./app/components/Post";
const Catgoryblck = () => {
  const CnContent = [
    {
      id: "1",
      sub: "Nightlife",
      city: "Bordeaux",
      place: "Jardin Club",
      followerTitle: "Followers",
      followers: "44",
      postTitle: "Posts",
      postContent: "56",
    },
    {
      id: "2",
      sub: "Nightlife",
      city: "Bordeaux",
      place: "Jardin Club",
      followerTitle: "Followers",
      followers: "56",
      postTitle: "Posts",
      postContent: "102",
    },
    {
      id: "3",
      sub: "Nightlife",
      city: "Bordeaux",
      place: "Jardin Club",
      followerTitle: "Followers",
      followers: "98",
      postTitle: "Posts",
      postContent: "102",
    },
    {
      id: "4",
      sub: "Nightlife",
      city: "Bordeaux",
      place: "Jardin Club",
      followerTitle: "Followers",
      followers: "56",
      postTitle: "Posts",
      postContent: "102",
    },
  ];

  return (
    <>
      <div className="row">
        {CnContent.map((categ) => (
          <div className="col-lg-3 col-md-6" key={categ.id}>
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
                      <span>{categ.sub}</span>
                    </div>
                    <div class="place-city">
                      <a href="#">{categ.city}</a>
                    </div>
                  </div>
                  <h3 class="place-title">
                    <a href="04_place-details-1.html">{categ.city}</a>
                  </h3>
                  <div className="folow-section">
                    <div className="follower-block">
                      <h4>{categ.followerTitle}</h4>
                      <h3>{categ.followers}</h3>
                    </div>
                    <div className="posts-block">
                      <h4>{categ.postTitle}</h4>
                      <h3>{categ.postContent}</h3>
                    </div>
                  </div>
                  <div class="entry-bottom">
                    <div class="place-preview">
                      <div class="place-rating">
                        <span>5.0</span>
                        <i class="la la-star"></i>
                      </div>
                      <span class="count-reviews">(2 Reviews)</span>
                    </div>
                    <div class="place-price">
                      <span>$$</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Catgoryblck;
