import Home from "@/components/Home/controller/Home";
import GraphQLQuery from "@/components/GraphQLQuery";
import { gql } from "graphql-request";

const GET_POSTS = gql`
  query Post {
    posts(limit: 10, page: 1) {
      id
      title
    }
  }
`;

export default async function HomePage() {
  return (
    <GraphQLQuery query={GET_POSTS}>
      <Home/>
    </GraphQLQuery>
  );
}
