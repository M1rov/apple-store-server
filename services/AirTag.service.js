const fs = require('fs');
const products = require('../db/product/index.json');

const IMAGES_PATH = 'db/product/airtag/images';

class AirTagService {
  getAll() {
    return products.reduce((prev, el) => {
      if(el.category === 'airtag') {
        const images = [fs.readFileSync(`${IMAGES_PATH}/${el.id}/hero.jpg`,
          'base64')]
        return [...prev, {...el, images}]
      }
      return prev;
    }, [])
  }

}

module.exports = new AirTagService();