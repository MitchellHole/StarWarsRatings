const fightModel = (sequelize, DataTypes) => {
  const Fight = sequelize.define(
    'fight',
    {
      winner: DataTypes.INTEGER,
      loser: DataTypes.INTEGER,
      is_draw: DataTypes.BOOLEAN,
      rating: DataTypes.INTEGER,
      source: DataTypes.STRING,
      result: DataTypes.STRING,
    },
    {},
  );
  Fight.associate = function () {
    // associations can be defined here
  };
  Fight.removeAttribute('createdAt');
  Fight.removeAttribute('updatedAt');
  return Fight;
};

export default fightModel;
