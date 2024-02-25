import { Test } from '@nestjs/testing';

import { SequelizeModule } from '@nestjs/sequelize';
import { testConfig } from '@randomfighter/database';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { StarshipsApiModule } from '../starships-api.module';
import { migrator, seeder } from './database.config';
import * as request from 'supertest';
import { INestApplication, Module } from '@nestjs/common';

import { getRandomStarship } from '../utils/get-random-starship';
import { schemaPath } from '../config/paths';

function prepareBackendConfig({
  schemaPath,
  module,
  migrator,
  seeder,
}: {
  schemaPath: string;
  module: any;
  migrator: any;
  seeder: any;
}) {
  let app: INestApplication;

  return {
    initializeApp: async () => {
      const fixture = await Test.createTestingModule({
        imports: [generateAppModule(module, schemaPath)],
      }).compile();

      app = fixture.createNestApplication();
      await app.init();
      return app;
    },
    initializeDatabase: async () => {
      await migrator(testConfig).up();
      await seeder(testConfig).up();
    },
    cleanupApp: async () => {
      await app.close();
    },
    cleanupDatabase: async () => {
      await seeder(testConfig).down();
      await migrator(testConfig).down();
    },
  };
}
export function generateAppModule(module: any, schemaPath: string) {
  @Module({
    imports: [
      SequelizeModule.forRoot(testConfig),
      GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        autoSchemaFile: schemaPath,
      }),
      module,
    ],
  })
  class AppModule {}

  return AppModule;
}
const graphqlUrl = '/graphql';
describe('Starship Api module', () => {
  let backendConfig: ReturnType<typeof prepareBackendConfig>;
  let app: INestApplication;

  beforeAll(async () => {
    backendConfig = prepareBackendConfig({
      schemaPath,
      module: StarshipsApiModule,
      migrator,
      seeder,
    });

    await backendConfig.initializeDatabase();
    app = await backendConfig.initializeApp();
  });

  afterAll(async () => {
    await backendConfig.cleanupApp();
    await backendConfig.cleanupDatabase();
  });
  describe('starship api', () => {
    it('should return all starships', () => {
      const graphqlRequest = `
      {
        getAllStarships{
          id
        }
      }
      `;

      return request(app.getHttpServer())
        .post(graphqlUrl)
        .send({
          query: graphqlRequest,
        })
        .expect(200)
        .expect(({ body }) => {
          expect(body.data.getAllStarships.length).toEqual(5);
        });
    });

    it('should return random starship', () => {
      const graphqlRequest = `
      {
        getRandomStarship{
          id
        }
      }
      `;

      return request(app.getHttpServer())
        .post(graphqlUrl)
        .send({
          query: graphqlRequest,
        })
        .expect(200)
        .expect(({ body }) => {
          expect(body.data.getRandomStarship).toBeDefined();
        });
    });

    it('should create new starship', () => {
      const starship = getRandomStarship();
      const gqlStarshipInput = convertObjectToGqlInput(starship);

      const graphqlRequest = `
      mutation {
        createStarship(starship: ${gqlStarshipInput}){
          id
        }
      }
      `;

      return request(app.getHttpServer())
        .post(graphqlUrl)
        .send({
          query: graphqlRequest,
        })
        .expect(200)
        .expect(({ body }) => {
          expect(body.data.createStarship.id).toBeDefined();
        });
    });

    it('should update starship', () => {
      const starship = getRandomStarship();
      const gqlStarshipInput = convertObjectToGqlInput(starship);
      const graphqlRequest = `
      mutation {
        updateStarship(id: 1, starship: ${gqlStarshipInput}){
          id,
          updatedAt
        }
      }
      `;

      return request(app.getHttpServer())
        .post(graphqlUrl)
        .send({
          query: graphqlRequest,
        })
        .expect(200)
        .expect(({ body }) => {
          const updatedAt = body.data.updateStarship.updatedAt;

          expect(new Date(Number(updatedAt)).toISOString()).toEqual(
            starship.updatedAt
          );
        });
    });

    it('should delete starship', () => {
      const graphqlRequest = `
      mutation {
        deleteStarship(id: 1)
      }
      `;

      return request(app.getHttpServer())
        .post(graphqlUrl)
        .send({
          query: graphqlRequest,
        })
        .expect(200)
        .expect(({ body }) => {
          expect(body.data.deleteStarship).toEqual(true);
        });
    });
  });
});

function convertObjectToGqlInput(obj: any): string {
  let gqlInput = '{';
  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      gqlInput += `${key}: [${obj[key]
        .map((item: any) => `"${item}"`)
        .join(', ')}], `;
    } else {
      gqlInput += `${key}: "${obj[key]}", `;
    }
  }
  gqlInput = gqlInput.slice(0, -2); // remove the last comma and space
  gqlInput += '}';
  return gqlInput;
}
