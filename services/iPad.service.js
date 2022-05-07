const fs = require('fs');
const products = require('../db/product/index.json');

const IMAGES_PATH = 'db/product/ipad/images';

class iPadService {
  getAll() {
    return products.reduce((prev, el) => {
      if(el.category === 'ipad') {
        const images = [fs.readFileSync(`${IMAGES_PATH}/${el.id}/hero.jpg`,
          'base64')]
        return [...prev, {...el, images}]
      }
      return prev;
    }, [])
  }

}

module.exports = new iPadService();