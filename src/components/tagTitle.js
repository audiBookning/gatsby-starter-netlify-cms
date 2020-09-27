/* import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const MytagsTitle = ({ data }) => {
  const { markdownRemark: mytags } = data;
  const tagArray = mytags.frontmatter.tag ? mytags.frontmatter.tag : [];
  console.log("MytagsTitle data: ", JSON.stringify(data, null, 2));
  const tagTitle = tagArray.filter((tag) => tag.name === "paisagem");

  return <div>{tagTitle.description}</div>;
};

MytagsTitle.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MytagsTitle;

export const mytagsPageQuery = graphql`
  query tagsTitleQuery($id: String!) {
    markdownRemark(frontmatter: { templateKey: { eq: "mytags-page" } }) {
      frontmatter {
        tag {
          name
          description
        }
      }
    }
  }
`;
 */
