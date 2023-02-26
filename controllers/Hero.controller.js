const {Hero,Power,Photo} = require('../models/');

module.exports.createHero = async(req, res, next) => {
    try {
        const { body } = req;
        const createdHero = await Hero.create(body);
            return res.status(201).send(createdHero);
    } catch (error) {
        next(error);
    }
};

module.exports.updateHero = async(req, res, next) => {
    try {
        const { HeroInstance, body } = req;
        const updated = await HeroInstance.update(body);
        return res.status(200).send(updated);
    } catch (error) {
        next(error);
    }
};

module.exports.findHero = async(req, res, next) => {
    try {
       // const {params:{id}} = req;
       // const findOne = await Hero.findByPk(id);
        const { HeroInstance } = req;
        return res.status(200).send(HeroInstance);
    } catch (error) {
        next(error);
    }
};

module.exports.findAllHeroes = async(req, res, next) => {
    try {
        const { pagination } = req;
        const heroes = await Hero.findAll({
            ...pagination
        });
        return res.status(200).send(heroes);
    } catch (error) {
        next(error);
    }
};

module.exports.deleteHero = async (req, res, next) =>{
    try {
        const {params:{id}} = req;
        const rows = await Hero.destroy(
            {
             where: {
                    id
                }
            }
        )

        if(rows){
            return res.status(200).send('Successfully deleted');
        } else{
            return res.status(204).send('Nothing to delete');
        }
    } catch (error) {
        next(error);
    }
};
////////////

module.exports.getHeroWithPowers = async(req, res, next) => {
    try {
        const {params: {heroId}} = req;
        const heroWithPowers = await Hero.findByPk(heroId, {
            include: {
                model: Power
            }
        });
            return res.status(200).send(heroWithPowers);
    } catch (error) {
        next(error);
    }
};

module.exports.getHeroWithPhotos = async(req, res, next) => {
    try {
        const {params: {heroId}} = req;
        const heroWithPhotos = await Hero.findByPk(heroId, {
            include: {
                model: Photo
            }
        });
            return res.status(200).send(heroWithPhotos);
    } catch (error) {
        next(error);
    }
};

