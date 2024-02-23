import { Sequelize } from 'sequelize';
import { IStarship } from '../../entities/starship.model';
import { TABLE_NAME } from '../config';

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function getRandomStarship(): IStarship {
  return {
    MGLT: `${getRandomInt(100)}`,
    cargo_capacity: `${getRandomInt(10000)}`,
    consumables: `${getRandomInt(10)} days`,
    cost_in_credits: `${getRandomInt(1000000)}`,
    created: new Date().toISOString(),
    crew: `${getRandomInt(100)}`,
    edited: new Date().toISOString(),
    hyperdrive_rating: `${getRandomInt(10)}`,
    length: `${getRandomInt(1000)}`,
    manufacturer: `Manufacturer ${getRandomInt(100)}`,
    max_atmosphering_speed: `${getRandomInt(1000)}`,
    model: `Model ${getRandomInt(100)}`,
    name: `Starship ${getRandomInt(100)}`,
    passengers: `${getRandomInt(1000)}`,
    films: [`Film ${getRandomInt(10)}`],
    pilots: [`Pilot ${getRandomInt(10)}`],
    starship_class: `Class ${getRandomInt(10)}`,
    url: `http://starships.api/${getRandomInt(1000)}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

const starships: IStarship[] = Array.from({ length: 5 }, getRandomStarship);

export async function up({ context: sequelize }: { context: Sequelize }) {
  await sequelize.getQueryInterface().bulkInsert(TABLE_NAME, starships);
}

export async function down({ context: sequelize }: { context: Sequelize }) {
  await sequelize.getQueryInterface().bulkDelete(TABLE_NAME, {});
}
