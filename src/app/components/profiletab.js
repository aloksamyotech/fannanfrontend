import React, { useEffect, useState } from "react";
import Profieimage from "./../../assests/images/member-avatar.png";
import { Link } from "react-router-dom";
import axios from "axios";
import webUrl from "./core-component/webUrl";
import { Getuserid } from "./core-component/getuserid";
import { Button } from "react-bootstrap";
const Profiletb = () => {
  const [statelist, setState] = useState([]);
  const [stateid, setStateid] = useState("");
  const [city, setCity] = useState([]);
  const [edit, setEdit] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    base_price: 0,
  });
  const [ndata, setData] = useState("");

  const detailmain = () => {
    const data = JSON.parse(localStorage.getItem("Adminuser"));
    console.log(data[0], "localdata");
    setData(data[0]);
    // console.log(ndata.id, "firstname");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdit((prev) => ({ ...prev, [name]: value }));
    console.log(edit);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(webUrl.Admin_State);
        setState(response.data);
        console.log(response.data, "statelsit");
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleApi = async () => {
    const response = await axios.get(`${webUrl.User_get_Details}${ndata.id}`);
    console.log(response.data.data[0], "user response");

    const editdata =
      response.data.data &&
      response.data.data.map((item) => {
        return {
          firstname: item.firstname,
          lastname: item.lastname,
          email: item.email,
          phone: item.phone,
          base_price: item.base_price,
        };
      });

    console.log(editdata);
    setEdit(editdata[0]);
    console.log(edit, "edit data");
  };

  const handleState = (event) => {
    const getStateid = event.target.value;
    console.log(getStateid, "id");
    setStateid(getStateid);
  };
  useEffect(() => {
    const getCity = async () => {
      try {
        const citylist = await axios.get(`${webUrl.Admin_City}${stateid}`);
        setCity(citylist.data);
        console.log(citylist.data, "city");
      } catch (error) {
        console.log(error);
      }
    };
    getCity();
  }, [stateid]);

  const updateUser = async () => {
    // const Id = JSON.parse(localStorage.getItem("UserIsd"));
    console.log(edit);
    const data = await axios.put(`${webUrl.Admin_Update}${ndata.id}`, edit);
    console.log(data.data, "profileapi");
  };

  useEffect(() => {
    detailmain();
  }, []);

  return (
    <>
      <div className="d-flex align-items-start">
        <div
          className="nav flex-column nav-pills me-3 col-md-4 text-left"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className="nav-link active"
            id="v-pills-avatar-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-avatar"
            type="button"
            role="tab"
            aria-controls="v-pills-avatar"
            aria-selected="true"
          >
            Avatar <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
          <button
            className="nav-link"
            id="v-pills-basic-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-basic"
            type="button"
            role="tab"
            aria-controls="v-pills-basic"
            aria-selected="false"
            onClick={handleApi}
          >
            Basic Info <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
          <button
            className="nav-link"
            id="v-pills-address-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-address"
            type="button"
            role="tab"
            aria-controls="v-pills-address"
            aria-selected="false"
          >
            Address <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
          <button
            className="nav-link"
            id="v-pills-Links-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-Links"
            type="button"
            role="tab"
            aria-controls="v-pills-Links"
            aria-selected="false"
          >
            Links <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
        <div className="tab-content col-md-8" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-avatar"
            role="tabpanel"
            aria-labelledby="v-pills-avatar-tab"
          >
            <div className="col-xl-4">
              <form
                action="#"
                className="member-profile form-underline text-left"
              >
                <div className="card mb-6 mb-xl-0">
                  <div className="card-header">Profile Picture</div>
                  <div className="card-body text-center">
                    <img
                      className="img-account-profile rounded-circle mb-2"
                      src={Profieimage}
                      alt=""
                    />
                    <div className="small font-italic text-muted mb-4">
                      JPG or PNG no larger than 5 MB
                    </div>
                    <label for="upload_new">
                      <input
                        id="upload_new"
                        type="file"
                        name="member_avatar"
                        placeholder="Upload new"
                        value=""
                      />
                      Upload new
                    </label>
                  </div>
                </div>
              </form>
            </div>
            <Link
              href="#"
              className="next-btn"
              id="v-pills-basic-tab"
              data-bs-target="#v-pills-basic"
            >
              Next
            </Link>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-basic"
            role="tabpanel"
            aria-labelledby="v-pills-basic-tab"
          >
            <h3>Basic Info</h3>
            <div className="member-wrap">
              <form className="member-profile form-underline text-left">
                <div className="field-input">
                  <label htmlFor="first_name">First name</label>
                  <input
                    type="text"
                    name="firstname"
                    value={edit.firstname}
                    onChange={handleChange}
                    placeholder="First Name"
                  />
                </div>
                <div className="field-input">
                  <label htmlFor="last_name">Last name</label>
                  <input
                    type="text"
                    name="lastname"
                    value={edit.lastname}
                    onChange={handleChange}
                    placeholder="Last Name"
                    id="last_name"
                  />
                </div>
                <div className="field-input">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={edit.email}
                    onChange={handleChange}
                    placeholder="invan@gmail.com"
                    id="email"
                  />
                </div>
                <div className="field-input">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={edit.phone}
                    onChange={handleChange}
                    placeholder="00 2323 323"
                    id="phone"
                  />
                </div>
                <div className="field-input">
                  <label htmlFor="first_name">Basic Pay</label>
                  <input
                    type="text"
                    name="Basic_pay"
                    placeholder="Basic Pay"
                    onChange={handleChange}
                    value={edit.base_price}
                  />
                </div>
              </form>
              <button
                onClick={updateUser}
                classN11ame="next-btn"
                id="v-pills-avatar-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-avatar"
                role="tab"
                aria-controls="v-pills-avatar"
              >
                Next
              </button>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-address"
            role="tabpanel"
            aria-labelledby="v-pills-address-tab"
          >
            <h3>Address Info</h3>
            <div className="member-wrap">
              <form className="member-profile form-underline text-left">
                <div className="field-input">
                  <label htmlFor="first_name">Address</label>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="Invan"
                    id="address"
                  />
                </div>
                <div className="field-input">
                  <label htmlFor="last_name">Location</label>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Location"
                    id="last_name"
                  />
                </div>
                <div className="field-input">
                  <label htmlFor="phone">Country</label>
                  <select
                    type="select"
                    name="select"
                    placeholder="country"
                    id="select"
                  >
                    <option>India</option>
                  </select>
                  {/* <input  type="text" name="phone" placeholder="State" id="phone"/> */}
                </div>
                <div className="field-input">
                  <label htmlFor="phone">State</label>
                  <select
                    type="select"
                    name="select"
                    placeholder="city"
                    id="select"
                    onChange={(e) => {
                      handleState(e);
                    }}
                  >
                    {console.log(statelist, "data new list")}
                    <option>Select any state</option>
                    {statelist &&
                      statelist?.map((item) => {
                        return (
                          <option key={item?._id} value={item?._id}>
                            {item?.name}
                          </option>
                        );
                      })}
                  </select>
                  {/* <input  type="text" name="phone" placeholder="State" id="phone"/> */}
                </div>
                <div className="field-input">
                  <label htmlFor="email">City</label>
                  <select
                    type="select"
                    name="select"
                    placeholder="city"
                    id="select"
                  >
                    {city &&
                      city?.map((item) => (
                        <option key={item?.stateid}>{item?.name}</option>
                      ))}
                  </select>
                  {/* <input  type="email" name="email" placeholder="City" id="email"/> */}
                </div>
              </form>
              <Link
                href="#"
                className="next-btn"
                id="v-pills-basic-tab"
                data-bs-target="#v-pills-basic"
              >
                Next
              </Link>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-Links"
            role="tabpanel"
            aria-labelledby="v-pills-Links-tab"
          >
            <div className="row social-links">
              <div className="col-md-6 text-left">
                <h3>Social Links</h3>
                <p>
                  Add Social links that visible on the homepage of your blog.
                </p>
                <form className="social-block">
                  <div className="btn-group">
                    <button type="button" className="btn btn-default btn-lg">
                      <i className="fab fa-dribbble"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-default btn-lg input-btn"
                    >
                      <input type="url" />
                    </button>
                  </div>
                </form>
                <form className="social-block">
                  <div className="btn-group">
                    <button type="button" className="btn btn-default btn-lg">
                      <i className="fa fa-link" aria-hidden="true"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-default btn-lg input-btn"
                    >
                      <input type="url" />
                    </button>
                  </div>
                </form>
                <form className="social-block">
                  <div className="btn-group">
                    <button type="button" className="btn btn-default btn-lg">
                      <i className="fa-brands fa-instagram"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-default btn-lg input-btn"
                    >
                      <input type="url" />
                    </button>
                  </div>
                </form>
                <Link
                  href="#"
                  className="next-btn"
                  id="v-pills-basic-tab"
                  data-bs-target="#v-pills-basic"
                >
                  Submit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profiletb;
