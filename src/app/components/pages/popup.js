import axios from "axios";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import validationSchema from "./schema/schemas";
import * as Yup from "yup";
const PopUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginOpen, setOpen] = useState(true);
  const [isShown] = useState(false);
  const [id, setId] = useState(true);
  const [idt, setIdt] = useState(1);
  const openPopup = () => {
    setIsOpen(!isOpen);
    setOpen(false);
  };
  const loginopenPopup = () => {
    setOpen(!loginOpen);
    setIsOpen(false);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const loginhandleClose = () => {
    setOpen(false);
  };
  //   const handleChange = () => {
  //     setId(false);
  //     setIdt(2);
  //   };
  const handleChangeagain = () => {
    setId(true);
    setIdt(1);
  };
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();
  const categoryList = async () => {
    try {
      const response = await axios.get(
        "http://159.65.150.199:7602/admin/get/all/category"
      );
      setOptions(response.data.category);
      console.log(response, "Categories");
    } catch (error) {
      //errorors
      console.log(error);
    }
  };
  useEffect(() => {
    categoryList();
  }, []);

  const validationSchema = Yup.object({
    firstname: Yup.string().required("firstname is required"),
    lastname: Yup.string().required("lastname is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
    category: Yup.string().required("Category is required"),
  });

  const validationLogin = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    axios
      .post("http://localhost:7000/user/register", values) // Replace with your API endpoint
      .then((response) => {
        console.log(response.data);
        resetForm();
        setIsOpen(true);
        // navigate("/user/dashboard");
        localStorage.setItem("User", JSON.stringify(values));
        setIsOpen(!isOpen);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const newhandleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const data = axios.post("http://localhost:7000/user/login", values);
      resetForm();
      console.log(data, "userDetails");
      const token = (await data).data;
      navigate("/user/dashboard");
      localStorage.setItem("Adminuser", JSON.stringify(token));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="right-header__login">
        <Link title="Login" className="open-login" onClick={loginopenPopup}>
          Login
        </Link>
      </div>
      <div className="right-header__button btn">
        <Link title="Sign Up" className="open-signup" onClick={openPopup}>
          <span>Sign up</span>
        </Link>
      </div>
      {isOpen && (
        <div className="popup-wrp">
          <div className="popup popup-form open">
            <Link
              title="Close"
              href="#"
              className="popup__close"
              onClick={handleClose}
            >
              <i className="las la-times la-24-black"></i>
            </Link>
            <ul className="choose-form">
              <li className="nav-signup">
                <a
                  title="Sign Up"
                  href="#signup"
                  onClick={handleChangeagain}
                  className={`${idt == 1 ? "active" : ""}`}
                >
                  Sign Up
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
                  firstname: "",
                  lastname: "",
                  email: "",
                  password: "",
                  category: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form className="form-sign form-content" id="signup">
                  <div className="field-inline">
                    <div className="field-input">
                      <Field
                        type="text"
                        placeholder="First Name"
                        name="firstname"
                      />
                      <ErrorMessage
                        name="firstname"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="field-input">
                      <Field
                        type="text"
                        placeholder="Last Name"
                        name="lastname"
                      />
                      <ErrorMessage
                        name="lastname"
                        component="div"
                        className="error"
                      />
                    </div>
                  </div>
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
                  <div className="field-input">
                    <label htmlFor="phone">Category: </label>
                    <Field
                      as="select"
                      name="category"
                      placeholder="country"
                      className="select-field"
                    >
                      <option>Select any category</option>
                      {console.log(options, "data")}
                      {options &&
                        options.map((item) => {
                          return (
                            <>
                              <option value={item._id}>{item.title}</option>
                            </>
                          );
                        })}
                    </Field>
                    <ErrorMessage
                      name="category"
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
                      <a title="Privacy Policy" href="#">
                        Privacy Policy
                      </a>
                      <span className="checkmark">
                        <i className="fa-solid fa-check"></i>
                      </span>
                    </label>
                  </div>
                  <input type="submit" name="Sign Up" value="Submit" />
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      )}

      {loginOpen && (
        <div className="popup-wrp">
          <div className="popup popup-form open">
            <Link
              title="Close"
              href="#"
              className="popup__close"
              onClick={loginhandleClose}
            >
              <i className="las la-times la-24-black"></i>
            </Link>
            <ul className="choose-form">
              <li className="nav-signup">
                <a
                  title="Sign Up"
                  href="#signup"
                  onClick={handleChangeagain}
                  className={`${idt == 1 ? "active" : ""}`}
                >
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default PopUp;
