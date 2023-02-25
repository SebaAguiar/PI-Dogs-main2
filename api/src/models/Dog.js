const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      default: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      default: 'perrito no querido',
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
      default: '1 - 2'
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
      default: '1 - 2'
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: true,
      default: '5 - 10'
    },
  }, {
    timestamps: false
  });
};
