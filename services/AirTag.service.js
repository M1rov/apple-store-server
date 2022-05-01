const fs = require('fs');
const readAllFiles = require('./readAllFiles')
const airTags = require('../db/AirTag/index.json');

const IMAGES_PATH = 'db/AirTag/images';

class AirTagService {
  getAll() {
    return airTags.reduce((prev, el) => {
      const images = [fs.readFileSync(`${IMAGES_PATH}/${el.id}/hero.jpg`,
        'base64')]
      return [...prev, {...el, images}]
    }, [])
  }

  getOne({id}) {
    return {
      ...airTags.find(el => el.id === id),
      images: readAllFiles(`${IMAGES_PATH}/${id}`)
    }
  }
}

module.exports = new AirTagService();