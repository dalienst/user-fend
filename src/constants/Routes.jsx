/* eslint-disable no-unused-vars */
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicLinks, privateLinks } from "./links";
import RequireAuth from "../components/RequireAuth";
import PersistLogin from "../components/PersistLogin";

const Landing = React.lazy(() => import("../layouts/Landing/Landing"));
const Error = React.lazy(() => import("../pages/PageNotFound"));
const Registration = React.lazy(() => import("../pages/Register"));
const Login = React.lazy(() => import("../pages/Login"));
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const Profile = React.lazy(() => import("../pages/Profile"));

function BaseRouter() {
  return (
    <Router>
      <Suspense fallback={<div>Getting you there...</div>}>
        <Routes>
          <Route exact path={publicLinks.Landing} element={<Landing />} />
          <Route path={publicLinks.Error} element={<Error />} />
          <Route path={publicLinks.Registration} element={<Registration />} />
          <Route path={publicLinks.Login} element={<Login />} />

          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth />}>
              <Route path={privateLinks.Dashboard} element={<Dashboard />} />
              <Route path={privateLinks.Profile} element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default BaseRouter;
