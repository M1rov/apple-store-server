const express = require('express');
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors');
const schema = require('./schema/product/index')
const MacService = require('./services/Mac.service')
const iPhoneService = require('./services/iPhone.service')
const iPadService = require('./services/iPad.service')
const WatchService = require('./services/Watch.service')
const AirPodsService = require('./services/AirPods.service')
const AirTagService = require('./services/AirTag.service')

const PORT = 5000;

const app = express();
app.use(cors());

const root = {
  getAllMacs: MacService.getAll,
  getMac: MacService.getOne,
  getAllIPhones: iPhoneService.getAll,
  getIPhone: iPhoneService.getOne,
  getAllIPads: iPadService.getAll,
  getIPad: iPadService.getOne,
  getAllWatches: WatchService.getAll,
  getWatch: WatchService.getOne,
  getAllAirPods: AirPodsService.getAll,
  getAirPods: AirPodsService.getOne,
  getAllAirTag: AirTagService.getAll,
  getAirTag: AirTagService.getOne,
}

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema,
  rootValue: root
}))

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
})