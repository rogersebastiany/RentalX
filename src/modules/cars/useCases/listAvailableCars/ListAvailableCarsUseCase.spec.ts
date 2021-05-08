import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });
  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car brand",
      category_id: "2e0fce39-3348-4fe5-bb33-04eb79830ce8",
      daily_rate: 120.0,
      description: "Car description",
      fine_amount: 40.0,
      license_plate: "ABC-1324",
      name: "Car1",
    });
    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car_brand_test",
      category_id: "2e0fce39-3348-4fe5-bb33-04eb79830ce8",
      daily_rate: 120.0,
      description: "Car description",
      fine_amount: 40.0,
      license_plate: "ABC-1324",
      name: "Car",
    });
    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_brand_test",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car_brand",
      category_id: "2e0fce39-3348-4fe5-bb33-04eb79830ce8",
      daily_rate: 120.0,
      description: "Car description",
      fine_amount: 40.0,
      license_plate: "ABC-1324",
      name: "Car_name_test",
    });
    const cars = await listAvailableCarsUseCase.execute({
      name: "Car_name_test",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car_brand_test",
      category_id: "12345",
      daily_rate: 120.0,
      description: "Car description",
      fine_amount: 40.0,
      license_plate: "ABC-1324",
      name: "Car2",
    });
    const cars = await listAvailableCarsUseCase.execute({
      category_id: "12345",
    });

    expect(cars).toEqual([car]);
  });
});
