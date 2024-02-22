import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Starship extends Model {
  @Column(DataType.STRING)
  MGLT!: string;

  @Column(DataType.STRING)
  cargo_capacity!: string;

  @Column(DataType.STRING)
  consumables!: string;

  @Column(DataType.STRING)
  cost_in_credits!: string;

  @Column(DataType.STRING)
  created!: string;

  @Column(DataType.STRING)
  crew!: string;

  @Column(DataType.STRING)
  edited!: string;

  @Column(DataType.STRING)
  hyperdrive_rating!: string;

  @Column(DataType.STRING)
  length!: string;

  @Column(DataType.STRING)
  manufacturer!: string;

  @Column(DataType.STRING)
  max_atmosphering_speed!: string;

  @Column(DataType.STRING)
  model!: string;

  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.STRING)
  passengers!: string;

  @Column(DataType.ARRAY(DataType.STRING))
  films!: string[];

  @Column(DataType.ARRAY(DataType.STRING))
  pilots!: string[];

  @Column(DataType.STRING)
  starship_class!: string;

  @Column(DataType.STRING)
  url!: string;
}
