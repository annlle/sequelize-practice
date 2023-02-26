const {Power} = require('../models');

module.exports.getPowerInstance = async (req, res, next) => {
    try {
        const {params: {powerId}} = req;
        const power = await Power.findById(powerId);
        if(!power){
            throw new Error('Power not found');
        }
        req.powerInstance = hero;
        next();
    } catch (error) {
        next(error);
    }
}