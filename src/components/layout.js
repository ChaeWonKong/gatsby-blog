import React from "react";
import "./layout.modules.css";
import Header from "./header";
import MetaTags from "react-meta-tags";

export default ({ children }) => (
  <div>
    <MetaTags>
      <title>Leon Kong's Blog</title>
      <meta name="viewport" content="width=divice-width, user-scalable=no" />
    </MetaTags>
    <Header />
    <div className="container">
      <div className="post">{children}</div>
    </div>
  </div>
);
