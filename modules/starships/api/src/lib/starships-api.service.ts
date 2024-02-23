import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Starship } from './entities/starship.model';

@Injectable()
export class StarshipsApiService {
  constructor(@InjectModel(Starship) private starshipModel: typeof Starship) {}

  async findAll(): Promise<Starship[]> {
    console.log('findAll');
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
}
