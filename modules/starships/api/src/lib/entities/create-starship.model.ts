import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateStarship {
  @Field()
  MGLT!: string;

  @Field()
  cargo_capacity!: string;

  @Field()
  consumables!: string;

  @Field()
  cost_in_credits!: string;

  @Field()
  crew!: string;

  @Field()
  hyperdrive_rating!: string;

  @Field()
  length!: string;

  @Field()
  manufacturer!: string;

  @Field()
  max_atmosphering_speed!: string;

  @Field()
  model!: string;

  @Field()
  name!: string;

  @Field()
  passengers!: string;

  @Field()
  films!: string;

  @Field()
  pilots!: string;

  @Field()
  starship_class!: string;

  @Field()
  url!: string;

  @Field()
  createdAt!: string;

  @Field()
  updatedAt!: string;
}
