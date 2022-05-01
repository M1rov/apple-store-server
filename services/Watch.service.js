const fs = require('fs');
const readAllFiles = require('./readAllFiles')
const watches = require('../db/Watch/index.json');

const IMAGES_PATH = 'db/Watch/images';

class WatchService {
  getAll() {
    return watches.reduce((prev, el) => {
      const images = [fs.readFileSync(`${IMAGES_PATH}/${el.id}/hero.jpg`,
        'base64')]
      return [...prev, {...el, images}]
    }, [])
  }

  getOne({id}) {
    return {
      ...watches.find(el => el.id === id),
      images: readAllFiles(`${IMAGES_PATH}/${id}`)
    }
  }
}

module.exports = new WatchService();