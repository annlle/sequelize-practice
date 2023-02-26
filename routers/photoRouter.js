const { Router } = require('express');
const multer = require('multer');
const { STATIC_PATH } = require('../config/path.config.js');
const PhotoController = require('../controllers/Photo.controller');
const { getHeroInstance } = require('../middlewares/hero.mv');
const { getPhotoInstance } = require('../middlewares/photo.mv');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, STATIC_PATH)
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}.${file.originalname}`)
    }
  })

const upload = multer({ storage: storage })

const photoRouter = Router();

photoRouter.post('/:heroId', getHeroInstance, upload.single('starPhoto'), PhotoController.addPhotoToHero);
photoRouter.get('/:photoId', getPhotoInstance, PhotoController.findPhoto);
photoRouter.get('/', PhotoController.findAllPhotos);

module.exports = photoRouter;