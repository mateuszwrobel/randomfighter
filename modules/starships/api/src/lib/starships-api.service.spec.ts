import { Test } from '@nestjs/testing';
import { StarshipsApiService } from './starships-api.service';

describe('StarshipsApiService', () => {
  let service: StarshipsApiService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [StarshipsApiService],
    }).compile();

    service = module.get(StarshipsApiService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
