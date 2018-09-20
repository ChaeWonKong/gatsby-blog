import React from "react";
import "./layout.modules.css";
import Header from "./header";

export default ({ children }) => (
  <div>
    <Header />
    <div className="container">
      <div className="post">{children}</div>
    </div>
  </div>
);
