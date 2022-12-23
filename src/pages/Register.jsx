/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SplitScreen from "../layouts/SplitScreen/SplitScreen";
import welcomeImg from "../images/welblack.svg";
import { publicLinks, urls } from "../constants/links";
import { Form, Formik, Field } from "formik";
import { RegistrationSchema } from "../validation/validation";
import axios from "../api/axios";
import { toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();
  return (
    <div className="reg-page">
      <div className="main-screen">
        <div
          style={{ backgroundImage: "url(" + welcomeImg + ")" }}
          className="left-content"
        >
          <Link to="/" className="logo">
            elephant room
          </Link>
        </div>
        <div className="right-content">
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={RegistrationSchema}
            onSubmit={async (values) => {
              try {
                await axios.post(urls.REGISTER, values);
                toast.success("successfully registered");
                navigate(publicLinks.Login, { replace: true });
              } catch (error) {
                toast.error("registration failed");
              }
            }}
          >
            {({ errors, touched }) => (
              <Form className="reg-form">
                <h3 className="form-title">Register</h3>

                <div className="input-entry">
                  <label htmlFor="username">Username</label>
                  <Field name="username" className="input-field" />
                  {touched.username && errors.username && (
                    <div className="input-error">{errors.username}</div>
                  )}
                </div>

                <div className="input-entry">
                  <label htmlFor="email">Email</label>
                  <Field name="email" className="input-field" />
                  {touched.email && errors.email && (
                    <div className="input-error">{errors.email}</div>
                  )}
                </div>

                <div className="input-entry">
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    name="password"
                    className="input-field"
                  />
                  {touched.password && errors.password && (
                    <div className="input-error">{errors.password}</div>
                  )}
                </div>

                <div className="input-entry">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    className="input-field"
                  />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <div className="input-error">{errors.confirmPassword}</div>
                  )}
                </div>

                <button type="submit" className="btn btn-primary btn-submit">
                  Create Account
                </button>

                <p className="input-link">
                  <span>Already have an account?</span>{" "}
                  <Link to={publicLinks.Login} className="input-redirect">
                    Sign in
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
