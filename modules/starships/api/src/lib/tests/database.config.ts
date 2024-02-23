import { memoryStorage, Umzug } from 'umzug';
import * as path from 'path';

const storage = memoryStorage();

export const migrator = new Umzug({
  migrations: {
    glob: ['/migrations/*.ts', { cwd: path.join(__dirname, '../modules') }],
  },
  storage: storage,
  logger: undefined,
});

export const seeder = new Umzug({
  migrations: {
    glob: ['/seeds/*.ts', { cwd: path.join(__dirname, '../modules') }],
  },
  storage: storage,
  logger: undefined,
});
