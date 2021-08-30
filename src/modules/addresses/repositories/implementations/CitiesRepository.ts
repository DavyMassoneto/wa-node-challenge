import { getRepository, Repository } from 'typeorm'

import City from '../../entities/City'
import ICitiesRepository, { ICityDTO } from '../ICitiesRepository'

class CitiesRepository implements ICitiesRepository {
  private repository: Repository<City>

  constructor() {
    this.repository = getRepository(City)
  }

  async create({ id, name, state_abbreviation }: ICityDTO): Promise<City> {
    const city = this.repository.create({ id, name, state_abbreviation })

    return this.repository.save(city)
  }

  async createMany(cities: ICityDTO[]): Promise<City[]> {
    const cityEntities = cities.map(({ id, name, state_abbreviation }) =>
      this.repository.create({ id, name, state_abbreviation }),
    )

    return this.repository.save(cityEntities)
  }

  async listByAbbreviation(state_abbreviation: string): Promise<City[]> {
    return this.repository.find({ state_abbreviation })
  }

  async findByName(name: string): Promise<City | undefined> {
    return this.repository.findOne({ name })
  }

  async list(): Promise<City[]> {
    return this.repository.find()
  }
}

export default CitiesRepository
