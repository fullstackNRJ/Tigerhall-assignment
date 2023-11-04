import request, { gql } from "graphql-request";

const endPoint = `https://api.tigerhall.net/v2/`;

const query = gql`
  query contentCards($filter: ContentCardsFilter) {
    contentCards(filter: $filter) {
      edges {
        ... on Podcast {
          name
          image {
            uri
          }
          categories {
            name
          }
          experts {
            title
            firstName
            lastName
            company
          }
        }
      }
    }
  }
`;

export interface Content {
  contentCards: {
    edges: [
      {
        name: string;
        image: {
          uri: string;
        };
        categories: Array<{ name: string }>;
        experts: Array<{
          title: string;
          firstName: string;
          lastName: string;
          company: string;
        }>;
      }
    ];
  };
}

export const searchContent = async (keywords: string = "") => {
  try {
    const variables = {
      filter: {
        limit: 20,
        types: ["PODCAST"],
        keywords,
      },
    };
    const data = await request<Content>(endPoint, query, variables);
    const cardsData = data.contentCards.edges.filter(
      (item) => Object.keys(item).length
    );
    console.log("Data :::", cardsData);
    return cardsData;
  } catch (err) {
    console.error("Error fetching results", err);
  }
  return [];
};

/* export const searchContent = async (keywords: string = "") => {
  try {
    const variables = {
      limit: 20,
      keywords,
      types: ["PODCAST"],
    };

    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        query: query,
        variables: { filter: variables },
      }),
    };
    const { data } = await (await fetch(endPoint, options)).json();

    const cardsData = data.contentCards.edges.filter(
      (item) => Object.keys(item).length
    );
    console.log("Cards data :::", cardsData);
    return cardsData;
  } catch (err) {
    console.error("Error fetching results", err);
  }
  return [];
}; */

export default searchContent;
