const combatantModel = (sequelize, DataTypes) => {
  const Combatant = sequelize.define(
    'combatant',
    {
      name: DataTypes.STRING,
      alliance: DataTypes.STRING,
      wins: DataTypes.INTEGER,
      semi_wins: DataTypes.INTEGER,
      losses: DataTypes.INTEGER,
      semi_losses: DataTypes.INTEGER,
      draws: DataTypes.INTEGER,
      score: DataTypes.INTEGER,
    },
    {timestamps: false},
  );
  Combatant.associate = function () {
    // associations can be defined here
  };
  Combatant.removeAttribute('createdAt');
  Combatant.removeAttribute('updatedAt');
  return Combatant;
};

export default combatantModel;
