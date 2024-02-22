import { Module } from '@nestjs/common';
import { StarshipsApiController } from './starships-api.controller';
import { StarshipsApiService } from './starships-api.service';

@Module({
  controllers: [StarshipsApiController],
  providers: [StarshipsApiService],
  exports: [StarshipsApiService],
})
export class StarshipsApiModule {}
