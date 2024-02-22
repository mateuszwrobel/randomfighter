import { Test, TestingModule } from '@nestjs/testing';
import { StarshipsApiResolver } from './starships-api.resolver';

describe('StarshipsApiResolver', () => {
  let resolver: StarshipsApiResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StarshipsApiResolver],
    }).compile();

    resolver = module.get<StarshipsApiResolver>(StarshipsApiResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
