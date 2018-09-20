import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import "../static/style.css";

export default ({ data }) => (
  <div className="main-div">
    <Layout>
      <div>
        <h4 style={{ marginBottom: `45px` }}>
          {data.allMarkdownRemark.totalCount} Posts
        </h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} style={{ paddingBottom: `45px` }}>
            <Link
              to={node.fields.slug}
              style={{ textDecoration: `none`, color: `inherit` }}
            >
              <h3>
                {node.frontmatter.title}{" "}
                <span style={{ color: `#bbb` }}>
                  {" "}
                  - {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  </div>
);

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
