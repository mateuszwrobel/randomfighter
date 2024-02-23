import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { Field, ObjectType } from '@nestjs/graphql';
import { DataTypes } from 'sequelize';

export interface IStarship {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  films: string[];
  pilots: string[];
  starship_class: string;
  url: string;
  createdAt: string;
  updatedAt: string;
}
@Table
@ObjectType()
export class Starship extends Model<IStarship> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  })
  @Field()
  override id!: number;

  @Column(DataType.STRING)
  @Field()
  MGLT!: string;

  @Column(DataType.STRING)
  @Field()
  cargo_capacity!: string;

  @Column(DataType.STRING)
  @Field()
  consumables!: string;

  @Column(DataType.STRING)
  @Field()
  cost_in_credits!: string;

  @Column(DataType.STRING)
  @Field()
  created!: string;

  @Column(DataType.STRING)
  @Field()
  crew!: string;

  @Column(DataType.STRING)
  @Field()
  edited!: string;

  @Column(DataType.STRING)
  @Field()
  hyperdrive_rating!: string;

  @Column(DataType.STRING)
  @Field()
  length!: string;

  @Column(DataType.STRING)
  @Field()
  manufacturer!: string;

  @Column(DataType.STRING)
  @Field()
  max_atmosphering_speed!: string;

  @Column(DataType.STRING)
  @Field()
  model!: string;

  @Column(DataType.STRING)
  @Field()
  name!: string;

  @Column(DataType.STRING)
  @Field()
  passengers!: string;

  @Column(DataType.ARRAY(DataType.STRING))
  @Field((type) => [String])
  films!: string[];

  @Column(DataType.ARRAY(DataType.STRING))
  @Field((type) => [String])
  pilots!: string[];

  @Column(DataType.STRING)
  @Field()
  starship_class!: string;

  @Column(DataType.STRING)
  @Field()
  url!: string;
}
