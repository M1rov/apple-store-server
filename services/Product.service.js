const MacService = require("./Mac.service");
const iPhoneService = require("./iPhone.service");
const iPadService = require("./iPad.service");
const WatchService = require("./Watch.service");
const AirPodsService = require("./AirPods.service");
const AirTagService = require("./AirTag.service");
const products = require('../db/product/index.json');
const readAllFiles = require("./readAllFiles");

class ProductService {
  getProductsByType({type}) {
    switch (type) {
      case 'mac':
        return MacService.getAll();
      case 'iphone':
        return iPhoneService.getAll();
      case 'ipad':
        return iPadService.getAll();
      case 'watch':
        return WatchService.getAll();
      case 'airpods':
        return AirPodsService.getAll();
      case 'airtag':
        return AirTagService.getAll();
      default:
        return new Error('Wrong product type!')
    }
  }

  getProductById({id}) {
    const product = products.find(product => product.id === id);
    if(!product) {
      return new Error('No product with such id!')
    }
    return {
      ...product,
      images: readAllFiles(`db/product/${product.category}/images/${id}`)
    }
  }
}

module.exports = new ProductService();