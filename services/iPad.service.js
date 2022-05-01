const fs = require('fs');
const readAllFiles = require('./readAllFiles')
const iPads = require('../db/iPad/index.json');

const IMAGES_PATH = 'db/iPad/images';

class iPadService {
  getAll() {
    return iPads.reduce((prev, el) => {
      const images = [fs.readFileSync(`${IMAGES_PATH}/${el.id}/hero.jpg`,
        'base64')]
      return [...prev, {...el, images}]
    }, [])
  }

  getOne({id}) {
    return {
      ...iPads.find(el => el.id === id),
      images: readAllFiles(`${IMAGES_PATH}/${id}`)
    }
  }
}

module.exports = new iPadService();