import React from "react";
import Layout from "../components/layout";
import "../static/style.css";
import Ionicon from "react-ionicons";

export default () => (
  <Layout>
    <div className="about">
      <h2>About</h2>
      <hr style={{ borderTop: `1px solid rgb(241, 241, 241)` }} />

      <h1>공 채 원 (Leon)</h1>
      <div style={{ display: `flex`, justifyContent: `center` }}>
        <a href="https://github.com/chaewonkong">
          <Ionicon fontSize="48px" icon="logo-github" />
        </a>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
        voluptatem aliquid cumque sunt sequi quidem nam, illo nesciunt voluptate
        labore consequatur eligendi itaque earum recusandae odio voluptatibus
        omnis maiores. Laborum.
      </p>
      <h2>Skills</h2>
      <ul className="about-ul">
        <li>
          <b>Frontend </b>- React
        </li>
        <li>
          <b>Backend </b>- Node.js, Django, Gatsby
        </li>
        <li>
          <b>DB, Query Language </b>- MySQL, GraphQL
        </li>
        <li>
          <b>Etc </b>- Photoshop, SketchApp
        </li>
      </ul>
      <h2>Projects</h2>
      <ul className="about-ul">
        <li>Subway Optimal Location Finder</li>
        <li>Diary App with pictures</li>
      </ul>
      <h2>Education</h2>
      <ul className="about-ul">
        <li>한국외국어대학교 (HUFS, 2011 ~ 2018)</li>
      </ul>
      <h2>Language</h2>
      <ul className="about-ul">
        <li>English (Business Level)</li>
      </ul>
    </div>
  </Layout>
);
