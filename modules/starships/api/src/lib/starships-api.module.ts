import { Module } from '@nestjs/common';
import { StarshipsApiController } from './starships-api.controller';
import { StarshipsApiService } from './starships-api.service';
import { StarshipsApiResolver } from './starships-api.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { Starship } from './entities/starship.model';

@Module({
  imports: [SequelizeModule.forFeature([Starship])],
  providers: [StarshipsApiService, StarshipsApiResolver],
  exports: [StarshipsApiService, SequelizeModule],
})
export class StarshipsApiModule {}
