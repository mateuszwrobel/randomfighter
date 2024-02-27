import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { Field, ObjectType } from '@nestjs/graphql';
import { DataTypes } from 'sequelize';
import { IStarship } from './IStarship';

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
  crew!: string;

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

  @Column(DataType.STRING)
  @Field()
  films!: string;

  @Column(DataType.STRING)
  @Field()
  pilots!: string;

  @Column(DataType.STRING)
  @Field()
  starship_class!: string;

  @Column(DataType.STRING)
  @Field()
  url!: string;

  @Column(DataType.DATE)
  @Field()
  override createdAt!: string;

  @Column(DataType.DATE)
  @Field()
  override updatedAt!: string;
}
