const fs = require('fs');
const readAllFiles = require('./readAllFiles')
const macs = require('../db/Mac/index.json');

const IMAGES_PATH = 'db/Mac/images';

class MacService {
  getAll() {
    return macs.reduce((prev, el) => {
      const images = [fs.readFileSync(`${IMAGES_PATH}/${el.id}/hero.jpg`,
        'base64')]
      return [...prev, {...el, images}]
    }, [])
  }

  getOne({id}) {
    return {
      ...macs.find(el => el.id === id),
      images: readAllFiles(`${IMAGES_PATH}/${id}`)
    }
  }
}

module.exports = new MacService();