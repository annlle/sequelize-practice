const {Hero} = require('../models');

module.exports.getHeroInstance = async (req, res, next) => {
    try {
        const {params: {heroId}} = req;
        const hero = await Hero.findById(heroId);
        if(!hero){
            throw new Error('Hero not found');
        }
        req.heroInstance = hero;
        next();
    } catch (error) {
        next(error);
    }
};