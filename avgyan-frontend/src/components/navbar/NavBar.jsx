// import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../assets/images/Home_Page/Logo/logo.png";
import "./nav-style.css";
import useAuth from "../../hooks/userAuth.hook";
import { logOut } from "../../api/axios";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
const NavBar = () => {
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    // const accessToken = Cookies.get("accessToken");
    // if (!auth?.accessToken) {
    //   const accessToken = Cookies.get("accessToken");
    //   if (accessToken) {
    //     setAuth({ accessToken });
    //   }
    // }

    if (accessToken) {
      setAuth({ accessToken });
      const decodedToken = jwtDecode(accessToken);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        localStorage.removeItem("accessToken");
      }
    }
  }, [setAuth]);

  const handleLogOut = async () => {
    try {
      await logOut();
      setAuth({});
      localStorage.removeItem("accessToken");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="nav-header">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span>Avgayan</span>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/my-place">My Place</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/course">Courses</Link>
          </li>
          <li>
            <Link to="/contact">Contacts</Link>
          </li>
          <li>
            <Link to="/article">Articles</Link>
          </li>
          <li>
            <Link to="/tutorial">Tutorials</Link>
          </li>
        </ul>
        <div className="cta_btns">
          {auth?.accessToken ? (
            <Link to="/">
              <button onClick={handleLogOut}>LogOut</button>
            </Link>
          ) : (
            <Link to="/auth">
              <button>Get Start</button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
