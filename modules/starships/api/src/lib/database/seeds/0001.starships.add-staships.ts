import { Sequelize } from 'sequelize';
import { TABLE_NAME } from '../config';
import { IStarship } from '../../entities/IStarship';
import { getRandomStarship } from '../../utils/get-random-starship';

const starships: IStarship[] = Array.from({ length: 5 }, getRandomStarship);

export async function up({ context: sequelize }: { context: Sequelize }) {
  await sequelize.getQueryInterface().bulkInsert(TABLE_NAME, starships);
}

export async function down({ context: sequelize }: { context: Sequelize }) {
  await sequelize.getQueryInterface().bulkDelete(TABLE_NAME, {});
}
