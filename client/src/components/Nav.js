import React from "react";
import { Link } from "react-router-dom";

function Nav() {

    return(
        <div className="container">
        <nav className="nav">
        <img className="logo" src={"https://dolphinseer.files.wordpress.com/2022/05/image-18.png"}/>
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
            <li>
              <Link className="navLink" to={"/login"}>
                Login
              </Link>
            </li>


            
          </ul>
        </nav>
        </div>
    )
}

export default Nav