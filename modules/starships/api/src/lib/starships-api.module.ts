import { Module } from '@nestjs/common';
import { StarshipsApiService } from './starships-api.service';
import { StarshipsApiResolver } from './starships-api.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { Starship } from './entities/starship.model';

@Module({
  imports: [SequelizeModule.forFeature([Starship])],
  providers: [StarshipsApiService, StarshipsApiResolver],
  exports: [SequelizeModule],
})
export class StarshipsApiModule {}
