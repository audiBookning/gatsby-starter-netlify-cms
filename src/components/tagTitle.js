import { graphql, useStaticQuery } from "gatsby";

const MytagsPageQuery = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query tagsTitleQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "mytags-page" } }) {
          frontmatter {
            tag {
              name
              description
            }
          }
        }
      }
    `
  );
  return markdownRemark.frontmatter;
};

export default MytagsPageQuery;
