import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import webUrl from "./core-component/webUrl";
const MyModal = () => {
  const [loginOpen, setOpen] = useState(true);
  const navigate = useNavigate();
  const validationLogin = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
  });

  const newhandleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const data = await axios.post(webUrl.User_login, values);
      resetForm();
      console.log((await data).data.data, "newuserDetails");
      navigate("/user/dashboard");
      localStorage.setItem("Adminuser", JSON.stringify(data.data.data));
      const Id = localStorage.setItem("UserId", JSON.stringify(data._id));
      console.log(Id, "id hona");
    } catch (error) {
      console.log(error);
    }
  };

  const loginhandleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {loginOpen ? (
        <div className="popup-wrp">
          <div className="popup popup-form open">
            <Link
              title="Close"
              className="popup__close"
              onClick={loginhandleClose}
            >
              <i className="las la-times la-24-black"></i>
            </Link>
            <ul className="choose-form">
              <li className="nav-signup">
                <a title="Sign Up" href="#signup">
                  Login
                </a>
              </li>
            </ul>
            <p className="choose-more">
              Continue with{" "}
              <Link title="Facebook" href="#" className="fb">
                Facebook
              </Link>{" "}
              or{" "}
              <Link title="Google" href="#" classNameName="gg">
                Google
              </Link>
            </p>
            <p className="choose-or">
              <span>Or</span>
            </p>

            <div className="popup-content">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={validationLogin}
                onSubmit={newhandleSubmit}
              >
                <Form className="form-sign form-content" id="signup">
                  <div className="field-input">
                    <Field type="email" placeholder="Email" name="email" />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className="field-input">
                    <Field
                      type="password"
                      placeholder="Password"
                      name="password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className="field-check">
                    <label htmlFor="accept">
                      <input type="checkbox" id="accept" value="" />
                      Accept the{" "}
                      <Link title="Terms" className="alo" href="#">
                        Terms
                      </Link>{" "}
                      and{" "}
                      <Link title="Privacy Policy" href="#">
                        Privacy Policy
                      </Link>
                      <span className="checkmark">
                        <i className="fa-solid fa-check"></i>
                      </span>
                    </label>
                  </div>
                  <input type="submit" name="Sign Up" value="Submit" />
                </Form>
              </Formik>
              {/* <ToastContainer /> */}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default MyModal;
