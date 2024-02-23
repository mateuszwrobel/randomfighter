import { Test } from '@nestjs/testing';

import { SequelizeModule } from '@nestjs/sequelize';
import { config } from '@randomfighter/database';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { StarshipsApiModule } from '../starships-api.module';
import { migrator, seeder } from './database.config';
import * as request from 'supertest';
import { INestApplication, Module } from '@nestjs/common';

function generateAppModule(module: any) {
  @Module({
    imports: [
      SequelizeModule.forRoot(config),
      GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        autoSchemaFile: join(process.cwd(), './schema.gql'),
      }),
      module,
    ],
  })
  class AppModule {}

  return AppModule;
}

describe('AppService', () => {
  let app: INestApplication;

  beforeAll(async () => {
    await migrator.up();
    await seeder.up();

    const fixture = await Test.createTestingModule({
      imports: [generateAppModule(StarshipsApiModule)],
    }).compile();

    app = fixture.createNestApplication();
    await app.init();
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      const graphqlRequest = `
      {
        getAllStarships{
          id
        }
      }
      `;

      return request(app.getHttpServer())
        .post('/graphql')
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
        .post('/graphql')
        .send({
          query: graphqlRequest,
        })
        .expect(200)
        .expect(({ body }) => {
          console.log(body.data.getRandomStarship);
          expect(body.data.getRandomStarship).toBeDefined();
        });
    });
  });
});
