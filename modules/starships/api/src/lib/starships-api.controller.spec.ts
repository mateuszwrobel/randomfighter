import { Test } from '@nestjs/testing';
import { StarshipsApiController } from './starships-api.controller';
import { StarshipsApiService } from './starships-api.service';

describe('StarshipsApiController', () => {
  let controller: StarshipsApiController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [StarshipsApiService],
      controllers: [StarshipsApiController],
    }).compile();

    controller = module.get(StarshipsApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
