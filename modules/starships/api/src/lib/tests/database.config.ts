import { SequelizeStorage, Umzug } from 'umzug';
import * as path from 'path';
import { Sequelize } from 'sequelize';

export const migrator = function (config: any) {
  const sequelize = new Sequelize(config);
  return new Umzug({
    migrations: {
      glob: [
        '**/migrations/*.ts',
        { cwd: path.join(__dirname, '../database') },
      ],
    },
    context: sequelize,
    storage: new SequelizeStorage({
      sequelize,
    }),
    logger: undefined,
  });
};

export const seeder = function (config: any) {
  const sequelize = new Sequelize(config);
  return new Umzug({
    migrations: {
      glob: ['**/seeds/*.ts', { cwd: path.join(__dirname, '../database') }],
    },
    context: sequelize,
    storage: new SequelizeStorage({
      sequelize,
    }),
    logger: undefined,
  });
};
