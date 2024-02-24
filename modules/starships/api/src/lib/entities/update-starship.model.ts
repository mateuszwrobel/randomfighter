import { InputType, PartialType } from '@nestjs/graphql';
import { CreateStarship } from './create-starship.model';

@InputType()
export class UpdateStarship extends PartialType(CreateStarship) {}
