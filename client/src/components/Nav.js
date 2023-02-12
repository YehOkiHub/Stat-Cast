import React from "react";
import { Link } from "react-router-dom";

function Nav() {

    return(
        <div class="container">
        <nav className="nav">
          <ul>
            <li>
              <Link className="navLink" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="navLink" to={"/Stats"}>
                Stats
              </Link>
            </li>
            <li>
              <Link className="navLink" to={"/Teams"}>
                Teams
              </Link>
            </li>
            <li>
              <Link className="navLink" to={"/Shop"}>
                Shop
              </Link>
            </li>
          </ul>
        </nav>
        </div>
    )
}

export default Nav