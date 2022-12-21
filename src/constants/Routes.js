/* eslint-disable no-unused-vars */
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicLinks, privateLinks } from "./links";
import RequireAuth from "../components/RequireAuth";
import PersistLogin from "../components/PersistLogin";

const Landing = React.lazy(() => import("../layouts/Landing/Landing"));

function BaseRouter() {
    return (
        <Router>
            <Suspense fallback={<div>Getting you there...</div>}>
                <Routes>
                    <Route exact path={publicLinks.Landing} element={<Landing />} />
                </Routes>
            </Suspense>
        </Router>
    )
}

export default BaseRouter;