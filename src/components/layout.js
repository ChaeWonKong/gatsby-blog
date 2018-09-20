import React from "react";
import "./layout.modules.css";
import Header from "./header";

export default ({ children }) => (
  <div>
    <Header />
    <div className="container">
      <div className="post">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit,
          aliquid! Culpa aperiam maiores ipsam fugit eos quae debitis, ex unde
          hic vero! Placeat accusantium dignissimos optio quia delectus et
          cupiditate unde odit veniam maiores. Quam consequuntur provident
          accusamus deserunt qui sapiente amet veniam velit illo possimus! Ipsum
          asperiores dolorum voluptatibus!
        </p>
        {children}
      </div>
    </div>
  </div>
);
