import React, { useState } from "react";
import postimage from "./../../../assests/images/post1.jpg";
import Artistimage from "./../../../assests/images/avatars/male-4.jpg";
import artistimage from "./../../../assests/images/avatars/female-4.jpg";
import rewardimage from "./../../../assests/images/Rewards.png";
import videoimage from "./../../../assests/images/buildingimage.jpg";
import DashboradMenu from "./../DashboardMenu";
import UsHeader from "../Header/Userheader";
import Userimage from "../../../assests/images/user-png.png";
import customvideo from "../../../assests/videos/example-video.mp4";
import { Link } from "react-router-dom";
import axios from "axios";
import webUrl from "../core-component/webUrl";
const Uspost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const data = JSON.parse(localStorage.getItem("Adminuser"));
  console.log(data, "data");
  console.log(data.id, "_id");
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(webUrl.Add_Post, {
        user: data._id,
        title: title,
        description: description,
      });

      console.log("Post created:", response.data);

      setTitle("");
      setDescription("");
      // Do something with the response, e.g., show success message
    } catch (error) {
      console.error("Error creating post:", error);
      // Handle error, e.g., show error message
    }
  };
  return (
    <>
      <UsHeader />
      <DashboradMenu />
      <div className="post-wrp bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 text-left">
              <div className="col-md-10">
                <div className="postidentity">
                  <div className="identityimage">
                    <img src={Userimage} />
                  </div>
                  <div className="identityname">
                    <div className="titlepost">
                      <Link to="/userpage">
                        <h3>POST</h3>
                      </Link>
                    </div>
                    <div className="post-category">
                      <h6>Post category</h6>
                      <h6>Post category</h6>
                      <h6>Post category</h6>
                    </div>
                  </div>
                </div>
                <div className="post-image">
                  <img src={postimage} />
                </div>
                <div className="post-discription">
                  <div className="post-top">
                    <a href="#">
                      <i className="fa-solid fa-heart"></i>
                    </a>
                    <a href="#">
                      <i className="fa-solid fa-comment"></i>
                    </a>
                    <a href="#">
                      <i className="fas fa-share"></i>
                    </a>
                    <h6>23/12/2022</h6>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
              <div className="col-md-10">
                <div className="postidentity">
                  <div className="identityimage">
                    <img src={Userimage} />
                  </div>
                  <div className="identityname">
                    <div className="titlepost">
                      <h3>POST</h3>
                    </div>
                    <div className="post-category">
                      <h6>Post category</h6>
                      <h6>Post category</h6>
                      <h6>Post category</h6>
                    </div>
                  </div>
                </div>
                <div className="post-image">
                  <img src={postimage} />
                </div>
                <div className="post-discription">
                  <div className="post-top">
                    <a href="#">
                      <i className="fa-solid fa-heart"></i>
                    </a>
                    <a href="#">
                      <i className="fa-solid fa-comment"></i>
                    </a>
                    <a href="#">
                      <i className="fas fa-share"></i>
                    </a>
                    <h6>23/12/2022</h6>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
              <div className="col-md-10">
                <div className="post-image">
                  {/* <img src={postimage} /> */}
                  <h3>Post text will be here.</h3>
                </div>
                <div className="post-discription">
                  <div className="post-top">
                    <a href="#">
                      <i className="fa-solid fa-heart"></i>
                    </a>
                    <a href="#">
                      <i className="fa-solid fa-comment"></i>
                    </a>
                    <a href="#">
                      <i className="fas fa-share"></i>
                    </a>
                    <h6>23/12/2022</h6>
                  </div>
                  <div className="post-category">
                    <h6>Post category</h6>
                    <h6>Post category</h6>
                    <h6>Post category</h6>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
              <div className="col-md-10">
                <div className="post-image">
                  {/* <img src={postimage} /> */}
                  <video autoPlay loop width="100%">
                    <source src={customvideo} type="video/mp4"></source>
                  </video>
                </div>
                <div className="post-discription">
                  <div className="post-top">
                    <a href="#">
                      <i className="fa-solid fa-heart"></i>
                    </a>
                    <a href="#">
                      <i className="fa-solid fa-comment"></i>
                    </a>
                    <a href="#">
                      <i className="fas fa-share"></i>
                    </a>
                    <h6>23/12/2022</h6>
                  </div>
                  <div className="post-category">
                    <h6>Post category</h6>
                    <h6>Post category</h6>
                    <h6>Post category</h6>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
              <div className="col-md-10">
                <div className="post-image">
                  {/* <img src={postimage} /> */}
                  <video autoPlay loop width="100%">
                    <source src={customvideo} type="video/mp4"></source>
                  </video>
                </div>
                <div className="post-discription">
                  <div className="post-top">
                    <Link href="#">
                      <i className="fa-solid fa-heart"></i>
                    </Link>
                    <Link href="#">
                      <i className="fa-solid fa-comment"></i>
                    </Link>
                    <Link href="#">
                      <i className="fas fa-share"></i>
                    </Link>
                    <h6>23/12/2022</h6>
                  </div>
                  <div className="post-category">
                    <h6>Post category</h6>
                    <h6>Post category</h6>
                    <h6>Post category</h6>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
              <div className="morepost-btn text-center">
                <button>More Post</button>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar sidebar-shadow sidebar-sticky fixed">
                <aside className="widget widget-sb-detail post-side">
                  <div className="widget-top">
                    <div className="flex">
                      <img src={Userimage} alt="userImage" />
                      <div className="inline-fx">
                        <h4>Username</h4>
                      </div>
                    </div>
                  </div>
                  <div className="business-info text-left">
                    <h3>Add New Post</h3>
                  </div>
                  <div className="post-new">
                    <form onSubmit={handleSubmit}>
                      <input type="file" id="myFile" name="filename" />
                      <div className="categroy-select">
                        <h4>Title</h4>
                        <input
                          type="text"
                          name="title"
                          placeholder="Title"
                          value={title}
                          onChange={(event) => setTitle(event.target.value)}
                          className="text-field"
                        />
                      </div>
                      <div className="txt-area" style={{ textAlign: "left" }}>
                        <h4>Discription</h4>
                        <textarea
                          rows="5"
                          placeholder="Discription"
                          value={description}
                          onChange={(event) =>
                            setDescription(event.target.value)
                          }
                        ></textarea>
                      </div>
                      <button type="submit" className="Post-submit">
                        Submit
                      </button>
                    </form>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Uspost;
