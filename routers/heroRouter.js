const { Router } = require('express');
const HeroController = require('../controllers/Hero.controller');
const { getHeroInstance } = require('../middlewares/hero.mv');
const pagination = require('../middlewares/pagination.mv');

const heroRouter = Router();

heroRouter.post('/', HeroController.createHero);
heroRouter.post('/powers', HeroController.createHeroWithPowers);
heroRouter.get('/:heroId', getHeroInstance, HeroController.findHero);
heroRouter.get('/', pagination, HeroController.findAllHeroes);
heroRouter.get('/:heroId/powers', HeroController.getHeroWithPowers);
heroRouter.get('/:heroId/photos', HeroController.getHeroWithPhotos);
heroRouter.put('/:heroId', getHeroInstance, HeroController.updateHero);
heroRouter.delete('/:heroId', getHeroInstance, HeroController.deleteHero);

module.exports = heroRouter;