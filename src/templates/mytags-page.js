import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Layout from "../components/Layout";

export const MytagsPageTemplate = ({ name, description }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {name}
              </h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MytagsPageTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};

const MytagsPage = ({ data }) => {
  const { markdownRemark: mytags } = data;
  const tagArray = mytags.frontmatter.tag ? mytags.frontmatter.tag : [];
  console.log("MytagsPage data: ", JSON.stringify(data, null, 2));

  return (
    <Layout>
      {tagArray.map((tag) => (
        <MytagsPageTemplate
          key={tag.name}
          name={tag.name}
          description={tag.description}
        />
      ))}
    </Layout>
  );
};

MytagsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MytagsPage;

export const mytagsPageQuery = graphql`
  query MytagsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        tag {
          name
          description
        }
      }
    }
  }
`;
