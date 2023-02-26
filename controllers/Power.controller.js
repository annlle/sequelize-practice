const {Power} = require('../models/');

module.exports.createPower = async (req, res, next) =>{
    try {
       const {body} = req;
       const createdPower = await Power.create(body);
       return res.status(201).send(createdPower);
    } catch (error) {
        next(error);
    }
};

module.exports.updatePower = async(req, res, next) => {
    try {
        const {params: {id}, body} = req;
        const founded = await Power.findByPk(id);

        const updated = await founded.update(body)

        if(updated){
            return res.status(200).send();
        } else{
            return res.status(204).send();
        }
    } catch (error) {
        next(error);
    }
};

module.exports.findPower = async (req, res, next) =>{
    try{
    const {params:{id}} = req;
    const findOne = await Power.findByPk(id);
    return res.status(200).send(findOne);
    } catch (error) {
        next(error);
    }

};

module.exports.findAllPowers = async (res, next) =>{
    try {
      const results = await Power.findAll();
      return res.status(200).send(results);
    } catch (error) {
        next(error);
    }
};

module.exports.deletePower = async (req, res, next) =>{
    try {
        const {params:{id}} = req;
        const result = await Power.findByPk(id);
        const deleted = await result.destroy(id)

        if(deleted){
            return res.status(200).send('Successfully deleted');
        } else{
            return res.status(204).send('Nothing to delete');
        }
    } catch (error) {
        next(error);
    }
};
///////

module.exports.addPowerToHero = async(req, res, next) => {
    try {
        const {heroInstance,powerInstance } = req;
        const result = await heroInstance.addPower(powerInstance);
        return res.status(200).send('Power successfully added');
    } catch (error) {
        next(error);
    }
};

module.exports.deletePowerFromHero = async(req, res, next) => {
    try {
        const {heroInstance, powerInstance } = req;
        const result = await heroInstance.removePower(powerInstance);
        return res.status(200).send('Power successfully deleted');
    } catch (error) {
        next(error);
    }
};
