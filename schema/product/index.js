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
    getAllMacBooks: [Product]
    getMacBook(id: ID!): Product
    getAllIPhones: [Product]
    getIPhone(id: ID!): Product
    getAllIPads: [Product]
    getIPad(id: ID!): Product
    getAllWatches: [Product]
    getWatch(id: ID!): Product
    getAllAirPods: [Product]
    getAirPods(id: ID!): Product
    getAllAirTag: [Product]
    getAirTag(id: ID!): Product
  }
`)