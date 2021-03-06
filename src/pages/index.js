import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import "../static/style.css";
import HTMLEllipsis from "react-lines-ellipsis/lib/html";

export default ({ data }) => (
  <div className="main-div">
    <Layout>
      <div>
        <h4 className="post-num">
          Total {data.allMarkdownRemark.totalCount} Posts
        </h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className="post-index" key={node.id}>
            <Link
              to={node.fields.slug}
              style={{
                textDecoration: `none`,
                color: `inherit`
              }}
            >
              <div className="index-title">
                <h3 className="index-h3">
                  {node.frontmatter.title}{" "}
                  <span className="index-date"> - {node.frontmatter.date}</span>
                </h3>
              </div>
              <div className="index-ellipsis">
                <HTMLEllipsis
                  unsafeHTML={node.html}
                  maxLine="3"
                  basedOn="letters"
                />
              </div>
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
          html
        }
      }
    }
  }
`;
