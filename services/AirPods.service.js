const fs = require('fs');
const readAllFiles = require('./readAllFiles')
const airPods = require('../db/AirPods/index.json');

const IMAGES_PATH = 'db/AirPods/images';

class AirPodsService {
  getAll() {
    return airPods.reduce((prev, el) => {
      const images = [fs.readFileSync(`${IMAGES_PATH}/${el.id}/hero.jpg`,
        'base64')]
      return [...prev, {...el, images}]
    }, [])
  }

  getOne({id}) {
    return {
      ...airPods.find(el => el.id === id),
      images: readAllFiles(`${IMAGES_PATH}/${id}`)
    }
  }
}

module.exports = new AirPodsService();