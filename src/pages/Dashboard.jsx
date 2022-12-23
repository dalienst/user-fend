/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Sidenav from "../layouts/Sidenav";
import LogoutButton from "../layouts/LogoutButton";
import { privateLinks, publicLinks } from "../constants/links";
import useAuth from "../hooks/useAuth";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { urls } from "../constants/links";

export default function Dashboard() {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  const controller = new AbortController();
  const { auth } = useAuth();
  const fetchUser = async () => {
    try {
      const response = await axiosPrivate.get(`me/${auth?.user_id}/`);
      setUser(response.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchUser();
    return () => {
      controller.abort();
    };
  }, []);

  function deleteAccount(id) {
    try {
      axiosPrivate.delete(`me/${id}/`);
      toast.success("Account Deleted");
      navigate(publicLinks.Registration, { replace: true });
    } catch (error) {
      toast.error("Cannot delete at the moment. Try again later");
    }
  }

  return (
    <>
      <div className="main">
        <Sidenav />
        <main className="content">
          <nav className="page-nav">
            <h2>Your Dashboard</h2>
            <div className="lout">
              <LogoutButton />
            </div>
          </nav>
          <section className="home">
            <div className="welcome-msg">
              <h3>Hello {user.username}</h3>
              <p>
                Welcome to <strong>elephant room</strong>
                <br />
                This is your Dashboard
              </p>
            </div>
            <div className="row">
              <div className="column">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Your Info</h5>
                    <p className="card-text">
                      Username: <strong>{user.username}</strong>
                      <br></br>Email: <strong>{user.email}</strong>
                    </p>
                    <div className="user-edit">
                      <Link to={privateLinks.EditUser} className="nav-button">
                        Edit Info
                      </Link>
                      <button
                        onClick={() => deleteAccount(user.id)}
                        type="submit"
                        className="delete-nav-button"
                      >
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
