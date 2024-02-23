import { Options } from 'sequelize/types/sequelize';

export const config: Options = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env['DB_USER'] || 'postgres',
  password: process.env['DB_PASSWORD'] || 'postgres',
  database: process.env['DB_DB'] || 'randomfighter',
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  autoLoadModels: true,
  synchronize: true,
};

// export const config: Options = {
//   dialect: 'sqlite',
//   storage: './db.sqlite',
//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   // @ts-ignore
//   autoLoadModels: true,
//   synchronize: true,
// };
