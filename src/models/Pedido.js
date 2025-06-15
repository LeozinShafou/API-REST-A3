import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Cliente } from './Cliente.js';

export const Pedido = sequelize.define('Pedido', {
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

Cliente.hasMany(Pedido);
Pedido.belongsTo(Cliente);