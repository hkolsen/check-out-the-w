import { useStaticQuery, graphql } from "gatsby";

interface HomeQueryResponse {
  markdownRemark: {
    frontmatter: {
      templateKey: string;
      header: string;
      subheader: string;
      aboutHeader: string;
      aboutContent: string;
      programmingList: Array<{
        id: string;
        featured: boolean;
        title: string;
        date: string;
        time: string;
      }>;
    };
  };
}

export const useHomeData = () => {
    const { markdownRemark } = useStaticQuery<HomeQueryResponse>(
      graphql`
      query homeQuery {
        markdownRemark(frontmatter: {templateKey: { eq: "index-page" }}) {
          frontmatter {
            templateKey
            header
            subheader
            aboutHeader
            aboutContent
            programmingList {
              id
              featured
              title
              description
              date
              time
            }
          }
        }
      }
      `
    )
    return markdownRemark;
  }
