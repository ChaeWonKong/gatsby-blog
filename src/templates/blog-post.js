import React from "react";
import Layout from "../components/layout";
import "../static/style.css";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div className="post-container">
        <h1 className="post-h1">{post.frontmatter.title}</h1>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
