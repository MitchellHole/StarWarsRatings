import db from '../models';
const { Op } = require("sequelize");
const sequence = require('./sequence.json')

import combatantsController from './combatants';


const fightsController = {
  findAll: async (req, response) => {
    let combatantId = req.query.combatantId;
    var fights;
    if (combatantId) {
      fights = await db.fight.findAll({
        where: {
          [Op.or]: [{ winner: combatantId }, { loser: combatantId }]
        }
      });
    }
    else {
      fights = await db.fight.findAll();
    }
    var temp;
    for (let i = 0; i < fights.length; i++) {
      if (fights[i].winner == combatantId) {
        temp = await combatantsController.findOneInternal(fights[i].loser);
        fights[i].loser = temp.name;
      }
      else {
        temp = await combatantsController.findOneInternal(fights[i].winner);
        fights[i].winner = temp.name;
      }
    }

    fights.sort(function(a, b) {
        return sequence.sequence.indexOf(b.source) - sequence.sequence.indexOf(a.source);
    });

    return response.status(200).json(fights);
  },
  findOne: async (req, response) => {
    const fight = await db.fight.findOne({
      where: {id: req.params.id}
    });
    console.log(response);
    return response.status(200).json(fight);
  },

};

export default fightsController;
