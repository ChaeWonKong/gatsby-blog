import React from "react";
import "./header.modules.css";
import { Link } from "gatsby";

export default () => (
  <header className="header">
    <h1>
      <Link to="/" className="header-link">
        leonkong.com
      </Link>
    </h1>

    <div className="header-right">
      <ul className="header-list">
        <li>
          <Link to="/about/" className="header-link">
            about
          </Link>
        </li>

        <li>
          <Link to="/" className="header-link">
            <div className="sub-ul">
              devlog
              <ul>
                <li>
                  <Link to="/" className="sub-ul-link">
                    tech
                  </Link>
                </li>
                <li>
                  <Link to="/" className="sub-ul-link">
                    algorithm
                  </Link>
                </li>
                <li>
                  <Link to="/" className="sub-ul-link">
                    front-end
                  </Link>
                </li>
                <li>
                  <Link to="/" className="sub-ul-link">
                    back-end
                  </Link>
                </li>
              </ul>
            </div>
          </Link>
        </li>

        <li>
          <Link to="/" className="header-link">
            projects
          </Link>
        </li>
      </ul>
      <div className="header-search">
        <input className="header-input" placeholder="search" type="text" />
        <button className="header-button">Q</button>
      </div>
    </div>
  </header>
);
