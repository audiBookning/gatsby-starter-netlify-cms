import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Content, { HTMLContent } from "../components/Content";
import Layout from "../components/Layout";

export const TraducaoPostTemplate = ({ content, contentComponent, lingua }) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {lingua}
            </h1>
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

TraducaoPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  lingua: PropTypes.string,
};

const traducaoPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <TraducaoPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        lingua={post.frontmatter.lingua}
      />
    </Layout>
  );
};

traducaoPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default traducaoPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        lingua
      }
    }
  }
`;
