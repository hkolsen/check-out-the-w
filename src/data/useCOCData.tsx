import { useStaticQuery, graphql } from "gatsby";

interface COCQueryResponse {
  markdownRemark: {
    html: string;
    frontmatter: {
      templateKey: string;
    };
  };
}

export const useCOCData = () => {
    const { markdownRemark } = useStaticQuery<COCQueryResponse>(
      graphql`
      query COCQuery {
        markdownRemark(frontmatter: {templateKey: { eq: "coc-page" }}) {
          html
          frontmatter {
            templateKey
          }
        }
      }
      `
    )
    return markdownRemark;
  }
