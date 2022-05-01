const fs = require('fs');
const readAllFiles = require('./readAllFiles')
const iPhones = require('../db/iPhone/index.json');

const IMAGES_PATH = 'db/iPhone/images';

class IPhoneService {
  getAll() {
    return iPhones.reduce((prev, el) => {
      const images = [fs.readFileSync(`${IMAGES_PATH}/${el.id}/hero.jpg`,
        'base64')]
      return [...prev, {...el, images}]
    }, [])
  }

  getOne({id}) {
    return {
      ...iPhones.find(el => el.id === id),
      images: readAllFiles(`${IMAGES_PATH}/${id}`)
    }
  }
}

module.exports = new IPhoneService();