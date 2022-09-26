import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logInRegisterActions } from "../pages/store-HW/navBtns";
import authActions from "../store/auth";

let links = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Panel",
    url: "/panelpage",
  },
  {
    label: "About us",
    url: "/aboutus",
  },
];

let authLinks = {
  isLoggedIn: [
    {
      label: "Welcome",
      url: "/profile",
    },
    {
      label: "Logout",
      url: "/logout",
    },
  ],
  isLoggedOut: [
    {
      label: "Login",
      url: "/login",
    },
    {
      label: "Register",
      url: "/register",
    },
  ],
};

const NavBarComponent = () => {
  const [displayBtn, setDisplayBtn] = useState({
    logInBtn: false,
    registerBtn: false,
  });

  let logRegState = useSelector((state) => state.auth.loggedIn);

  const dispatch = useDispatch();

  const displayLogIn = () => {
    dispatch(logInRegisterActions.logIn());
  };
  const displayRegister = () => {
    dispatch(logInRegisterActions.register());
  };

  const handleLogOut = () => {
    dispatch(authActions.logout());
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li> */}
            {links.map((item, idx) => (
              <li className="nav-item" key={idx}>
                <a className="nav-link" href="#">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <button
              className="btn btn-success mx-2 reg-btn"
              onClick={displayLogIn}
            >
              Register
            </button>
            <button
              className={`btn btn-success mx-2 login-btn ${
                logRegState ? "d-none" : ""
              } `}
              onClick={displayRegister}
            >
              Log in
            </button>
            <button
              className={`btn btn-success mx-2 login-btn ${
                logRegState ? "" : "d-none"
              } `}
              onClick={handleLogOut}
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBarComponent;
