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
      const cache = caches.default; // Xác định cache
      const cacheKey = new Request("https://6717b3deb910c6a6e0298d04.mockapi.io/blog/");
      const cachedResponse = await cache.match(cacheKey);
      
      // Kiểm tra cached response
      if (!cachedResponse) {
        console.error("No cached response found for:", cacheKey);
      } else {
        console.log("Found cached response:", cachedResponse);
      }

      // Nếu không tìm thấy cached response, gọi fetch
      const res = await fetch(cacheKey);
      if (!res.ok) {
        throw new Error("Lỗi khi lấy dữ liệu từ MockAPI");
      }

      const data = await res.json(); // Lấy dữ liệu từ response

      // Tạo Response mới cho cache
      const newResponse = new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      });

      // Lưu Response vào cache
      await cache.put(cacheKey, newResponse.clone());
      return data; // Trả về dữ liệu
    },
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
