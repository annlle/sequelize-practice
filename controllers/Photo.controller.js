const {Photo} = require('../models');

module.exports.addPhotoToHero = async(req, res, next) => {
    try {
        const {heroInstance, file: {filename}} = req;
        const photo = await heroInstance.createPhoto(
            {
                path: filename
            }
        );
        return res.status(201).send(photo);
    } catch (error) {
        next(error);
    }
};

module.exports.findPhoto = async(req, res, next) => {
    try {
        const { photoInstance } = req;
        return res.status(200).send(photoInstance);
    } catch (error) {
        next(error);
    }
};

module.exports.findAllPhotos = async(req, res, next) => {
    try {
        const allPhotos = await Photo.findAll();
        return res.status(200).send(allPhotos);
    } catch (error) {
        next(error);
    }
};