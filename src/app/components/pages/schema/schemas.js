import React from "react";
import * as yup from "yup";
const validationSchema = yup.object().shape({
  firstname: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});
export default validationSchema;
