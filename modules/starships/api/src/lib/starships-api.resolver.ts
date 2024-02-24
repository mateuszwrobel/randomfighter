import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { StarshipsApiService } from './starships-api.service';
import { Starship } from './entities/starship.model';
import { IStarship } from './entities/IStarship';
import { CreateStarship } from './entities/create-starship.model';
import { UpdateStarship } from './entities/update-starship.model';

@Resolver(() => Starship)
export class StarshipsApiResolver {
  constructor(private starshipsApiService: StarshipsApiService) {}

  @Query(() => [Starship])
  async getAllStarships(): Promise<Starship[]> {
    return this.starshipsApiService.findAll().then((starships) => {
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

  @Mutation(() => Starship)
  async createStarship(
    @Args('starship') starship: CreateStarship
  ): Promise<Starship> {
    return this.starshipsApiService.create(starship);
  }

  @Mutation(() => Starship)
  async updateStarship(
    @Args('id') id: number,
    @Args('starship') starship: UpdateStarship
  ): Promise<Starship> {
    return this.starshipsApiService.update(id, starship);
  }

  @Mutation(() => Boolean)
  async deleteStarship(@Args('id') id: number): Promise<boolean> {
    await this.starshipsApiService.remove(id);
    return true;
  }
}
