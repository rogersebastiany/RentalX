import { getRepository, Repository } from "typeorm";

import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";

import { ICreateRentalDTO } from "../../dtos/ICreateRentalDTO";
import { Rental } from "../entities/Rental";

class RentalsRepository implements IRentalsRepository {
  private repository: Repository<Rental>;
  constructor() {
    this.repository = getRepository(Rental);
  }

  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    const openByCar = this.repository.findOne({ car_id });
    return openByCar;
  }
  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    const openByIser = this.repository.findOne({ user_id });
    return openByIser;
  }
  async create({
    car_id,
    expected_return_date,
    user_id,
    id,
    end_date,
    total,
  }: ICreateRentalDTO): Promise<Rental> {
    const rental = this.repository.create({
      car_id,
      expected_return_date,
      user_id,
      id,
      end_date,
      total,
    });

    await this.repository.save(rental);

    return rental;
  }

  async findById(id: string): Promise<Rental> {
    const rental = await this.repository.findOne(id);
    return rental;
  }
}

export { RentalsRepository };
