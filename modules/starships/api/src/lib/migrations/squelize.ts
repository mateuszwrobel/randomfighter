import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import {
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyHasAssociationMixin,
  Association,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
} from 'sequelize';

export class Starship extends Model {
  public id!: number;
  public MGLT!: string;
  public cargo_capacity!: string;
  public consumables!: string;
  public cost_in_credits!: string;
  public created!: string;
  public crew!: string;
  public edited!: string;
  public hyperdrive_rating!: string;
  public length!: string;
  public manufacturer!: string;
  public max_atmosphering_speed!: string;
  public model!: string;
  public name!: string;
  public passengers!: string;
  public films!: string[];
  public pilots!: string[];
  public starship_class!: string;
  public url!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
