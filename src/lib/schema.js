const { makeExecutableSchema } = require("@graphql-tools/schema");

const typeDefs = `
  type Blog {
  id: ID
  createdAt:String
  name: String
  avatar: String
  }
  type Query {
    blogs: [Blog]
  }
`;

const resolvers = {
  Query: {
    blogs: async () => {
      const cacheKey = new Request("https://6717b3deb910c6a6e0298d04.mockapi.io/blog/");
      const res = await fetch(cacheKey);
      if (!res.ok) {
        throw new Error("Lỗi khi lấy dữ liệu từ MockAPI");
      }
      const data = await res.json();
      return data; 
    },
  },
};

module.exports = makeExecutableSchema({ typeDefs, resolvers });
