import db from '../models';
const { Op } = require("sequelize");


const combatantsController = {
  findAll: async (req, response) => {
    let name = req.query.name;
    var combatants;
    if (name) {
      combatants = await db.combatant.findAll({
        where: {
          name: {
          [Op.in]: [name]
          }
        }
      });
      combatants = combatants[0];
    }
    else {
      combatants = await db.combatant.findAll({
        order: [
          ['score', 'DESC'],
          ['wins', 'DESC']
        ]
      });
    }
    return response.status(200).json(combatants);
  },
  findOne: async (req, response) => {
    const combatant = await db.combatant.findOne({
      where: {id: req.params.id}
    });
    return response.status(200).json(combatant);
  },
  findOneInternal: async (id) => {
    const combatant = await db.combatant.findOne({
      attributes: ['name'],
      where: {id: id}
    });
    return combatant;
  },
  create: async (req, res) => {
    try {
      db.combatant.create(req.body).then((data) => {
        return res.status(200).json(data);
      });
    } catch (error) {
      return res.status(res.statusCode).json(error);
    }
  },
};

export default combatantsController;
