import React, { useEffect, useState } from "react";
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
  // const [lid, SetLid] = useState("");
  const [details, setDetails] = useState([]);
  const [displayCount, setDisplayCount] = useState(3);
  const data = JSON.parse(localStorage.getItem("Adminuser"));
  console.log(data, "data");
  console.log(data[0].id, "_id");
  // SetLid(data[0].id);
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(webUrl.Add_Post, {
        user: data[0].id,
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

  const loadMorePosts = () => {
    setDisplayCount(displayCount + 5); // Increase the number of posts to display
  };

  const getPost = async () => {
    try {
      const response = await axios.get(`${webUrl.Get_Post}${data[0].id}`);
      console.log(response, "response");
      setDetails(response.data.data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);
  return (
    <>
      <UsHeader />
      <DashboradMenu />
      <div className="post-wrp bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 text-left">
              <div className="col-md-10">
                {console.log(details, "detials")}
                {details &&
                  details?.slice(0, displayCount).map((item) => {
                    return (
                      <>
                        {/* <div className="detial">{item.title}</div> */}
                        <div className="postidentity" key={item.id}>
                          <div className="identityimage">
                            <img src={Userimage} alt="user-image" />
                          </div>
                          <div className="identityname">
                            <div className="titlepost">
                              <Link to="/userpage">
                                <h3>{item.title}</h3>
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
                          <p>{item.description}</p>
                        </div>
                      </>
                    );
                  })}
              </div>
              {displayCount < details.length && (
                <div className="morepost-btn text-center">
                  <button onClick={loadMorePosts}>More Post</button>
                </div>
              )}
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
