/* eslint-disable no-unused-vars */
import React from "react";
import { Formik, Form, Field } from "formik";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../api/axios";
import { urls, privateLinks, publicLinks } from "../constants/links";
import useAuth from "../hooks/useAuth";
import jwtDecode from "../utils/jwt_decode";
import LocalStorageService from "../utils/local_storage";
import Loginpic from "../images/signinblack.svg";

const Login = ({ setUser }) => {
  const { setAuth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="reg-page">
      <div className="main-screen">
        <div
          style={{ backgroundImage: "url(" + Loginpic + ")" }}
          className="left-content"
        >
          <Link to="/" className="logo">
            elephant room
          </Link>
        </div>

        <div className="right-content">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={async (values) => {
              try {
                const response = await axios.post(urls.LOGIN, values);
                LocalStorageService.setToken(response.data);
                setAuth({
                  access: response.data.access,
                  user_id: jwtDecode(response.data.access),
                  isLoggedIn: true,
                });
                toast.success("successfully logged in");
                navigate(privateLinks.Dashboard, { replace: true });
              } catch (error) {
                toast.error("Incorrect email or password");
              }
            }}
          >
            {({ errors, touched }) => (
              <Form className="reg-form">
                <h3 className="form-title">Login</h3>

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

                <button type="submit" className="btn btn-primary btn-submit">
                  Log In
                </button>

                <p className="input-link">
                  <span>Don't have an account?</span>{" "}
                  <Link to={publicLinks.Registration
                } className="input-redirect">
                    Sign up
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
