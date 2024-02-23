import { MigrationError, SequelizeStorage, Umzug } from 'umzug';
import { Sequelize } from 'sequelize';
import { config } from './config';
import * as path from 'path';

const sequelize = new Sequelize(config);

export const migrator = new Umzug({
  migrations: {
    glob: [
      '**/src/lib/database/migrations/*.ts',
      { cwd: path.join(__dirname, '../../../../modules') },
    ],
  },
  context: sequelize,
  storage: new SequelizeStorage({
    sequelize,
  }),
  logger: console,
});
