const { Router } = require('express');
const PowerController = require('../controllers/Power.controller');
const { getPowerInstance } = require('../middlewares/power.mv');
const { getHeroIntance } = require('../middlewares/hero.mv');


const powerRouter = Router();

powerRouter.post('/', PowerController.createPower);
powerRouter.get('/:powerId', getPowerInstance, PowerController.findPower);
powerRouter.get('/', PowerController.findAllPowers);
powerRouter.put('/:powerId/:heroId', getPowerInstance, getHeroIntance, PowerController.addPowerToHero);
powerRouter.put('/:powerId', getPowerInstance, PowerController.updatePower);
powerRouter.delete('/:powerId', getPowerInstance, PowerController.deletepower);

module.exports = powerRouter;