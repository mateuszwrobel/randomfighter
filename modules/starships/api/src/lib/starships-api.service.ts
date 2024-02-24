import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Starship } from './entities/starship.model';
import { IStarship } from './entities/IStarship';

@Injectable()
export class StarshipsApiService {
  constructor(@InjectModel(Starship) private starshipModel: typeof Starship) {}

  async findAll(): Promise<Starship[]> {
    return this.starshipModel.findAll();
  }

  async findOne(id: number): Promise<Starship | null> {
    return this.starshipModel.findByPk(id);
  }

  async findOneRandom(): Promise<Starship> {
    const count = await this.starshipModel.count();
    const random = Math.floor(Math.random() * count);
    return (await this.starshipModel.findOne({
      offset: random,
    })) as unknown as Starship;
  }

  async create(data: Omit<IStarship, 'id'>): Promise<Starship> {
    return this.starshipModel.create(data);
  }

  async update(id: number, data: Partial<IStarship>): Promise<Starship> {
    await this.starshipModel.update(data, { where: { id } });
    return this.starshipModel.findByPk(id) as unknown as Starship;
  }

  async remove(id: number): Promise<void> {
    await this.starshipModel.destroy({ where: { id } });
  }
}
