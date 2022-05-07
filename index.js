const express = require('express');
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors');
const schema = require('./schema/product/index')
const ProductService = require('./services/Product.service')

const PORT = 5000;

const app = express();
app.use(cors());

const root = {
  getProductsByType: ProductService.getProductsByType,
  getProductById: ProductService.getProductById,
}

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema,
  rootValue: root
}))

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
})