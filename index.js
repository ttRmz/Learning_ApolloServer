const { ApolloServer, gql } = require("apollo-server");

const skills = [
  {
    label: "React",
    asset: "react.png"
  },
  {
    label: "Sass",
    asset: "sass.png"
  },
  {
    label: "GraphQL",
    asset: "graphql.png"
  }
];

const typeDefs = gql`

  type Skill {
    label: String
    asset: String
  }

  type Query {
    skills: [Skill]
  }
`;

const resolvers = {
  Query: {
    skills: () => skills
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
