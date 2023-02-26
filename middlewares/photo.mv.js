const {Photo} = require('../models');

module.exports.getPhotoInstance = async (req, res, next) => {
    try {
        const {params: {photoId}} = req;
        const photo = await Photo.findById(photoId);
        if(!photo){
            throw new Error('Photo not found');
        }
        req.photoInstance = photo;
        next();
    } catch (error) {
        next(error);
    }
}