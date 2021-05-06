import { useStaticQuery, graphql } from "gatsby";

interface EventsQueryResponse {
  markdownRemark: {
    frontmatter: {
      templateKey: string;
      aboutHeader: string;
      aboutContent: string;
    };
  };
}

export const useEventsData = () => {
    const { markdownRemark } = useStaticQuery<EventsQueryResponse>(
      graphql`
      query eventsQuery {
        markdownRemark(frontmatter: {templateKey: { eq: "events-page" }}) {
          frontmatter {
            templateKey
            aboutHeader
            aboutContent
          }
        }
      }
      `
    )
    return markdownRemark;
  }
