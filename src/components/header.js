import React from "react";
import "./header.modules.css";

export default () => (
  <header className="header">
    <h1>leonkong.com</h1>
    <div className="header-right">
      <ul className="header-list">
        <li>about</li>
        <li>devlog</li>
        <li>projects</li>
      </ul>
      <div className="header-search">
        <input className="header-input" placeholder="search" type="text" />
        <button className="header-button">Q</button>
      </div>
    </div>
  </header>
);
