import { Resolver, Query, Args } from '@nestjs/graphql';
import { StarshipsApiService } from './starships-api.service';
import { Starship } from './entities/starship.model';

@Resolver(() => Starship)
export class StarshipsApiResolver {
  constructor(private starshipsApiService: StarshipsApiService) {}

  @Query(() => [Starship])
  async getAllStarships(): Promise<Starship[]> {
    return this.starshipsApiService.findAll().then((starships) => {
      console.log(starships);
      return starships;
    });
  }

  @Query(() => Starship)
  async getRandomStarship(): Promise<Starship> {
    return this.starshipsApiService.findOneRandom();
  }

  @Query(() => Starship)
  async getStarshipById(@Args('id') id: number): Promise<Starship | null> {
    return this.starshipsApiService.findOne(id);
  }
}
