const {buildSchema} = require('graphql');

module.exports = buildSchema(`
  type Product {
    id: ID
    title: String
    images: [String]
    price: Float
    description: String
  }
  
  type Query {
    getProductsByType(type: String!): [Product]
    getProductById(id: ID!): Product
  }
`)