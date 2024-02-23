import { DataTypes, Sequelize } from 'sequelize';
import { TABLE_NAME } from '../config';

export async function up({ context: sequelize }: { context: Sequelize }) {
  await sequelize.getQueryInterface().createTable(TABLE_NAME, {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    MGLT: {
      type: DataTypes.STRING,
    },
    cargo_capacity: {
      type: DataTypes.STRING,
    },
    consumables: {
      type: DataTypes.STRING,
    },
    cost_in_credits: {
      type: DataTypes.STRING,
    },
    created: {
      type: DataTypes.STRING,
    },
    crew: {
      type: DataTypes.STRING,
    },
    edited: {
      type: DataTypes.STRING,
    },
    hyperdrive_rating: {
      type: DataTypes.STRING,
    },
    length: {
      type: DataTypes.STRING,
    },
    manufacturer: {
      type: DataTypes.STRING,
    },
    max_atmosphering_speed: {
      type: DataTypes.STRING,
    },
    model: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    passengers: {
      type: DataTypes.STRING,
    },
    films: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    pilots: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    starship_class: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });
}

export async function down({ context: sequelize }: { context: Sequelize }) {
  await sequelize.getQueryInterface().dropTable(TABLE_NAME);
}
