import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { StarshipsApiModule } from '@randomfighter/starships-api';
import { SequelizeModule } from '@nestjs/sequelize';
import { config } from '@randomfighter/database';

@Module({
  imports: [
    SequelizeModule.forRoot(config),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), '../app/schema.gql'),
    }),
    StarshipsApiModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
