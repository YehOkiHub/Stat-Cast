import React from "react";
import { Link } from "react-router-dom";
import Auth from "./../utils/auth";

function Nav() {
  return (
    <div className="container">
      <div className="wrapper">
        <nav className="nav">
          <img
            className="logo"
            src={"https://dolphinseer.files.wordpress.com/2022/05/image-18.png"}
          />
          <ul>
            <li>
              <Link className="navLink" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="navLink" to={"/stats"}>
                Stats
              </Link>
            </li>
            <li>
              <Link className="navLink" to={"/teams"}>
                Teams
              </Link>
            </li>
            <li>
              <Link className="navLink" to={"/shop"}>
                Shop
              </Link>
            </li>

            {!Auth.loggedIn() ? (
              <>
                <li>
                  <Link className="navLink" to={"/login"}>
                    Login
                  </Link>
                </li>{" "}
              </>
            ) : (
              <>
                <li>
                  <Link className="navLink" to={"/profile"}>
                    Profile
                  </Link>
                </li>
                {/* <li>
                  <Link className="navLink" to={"/profile"}>
                    Profile
                  </Link>
                </li> */}
                <li>
                  <Link className="navLink" to={"#"} onClick={Auth.logout}>
                    Logout
                  </Link>
                </li>{" "}
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
