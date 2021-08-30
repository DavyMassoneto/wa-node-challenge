import City from '../entities/City'

export interface ICityDTO {
  id: number
  name: string
  state_abbreviation: string
}

interface ICitiesRepository {
  findByName(name: string): Promise<City | undefined>

  listByAbbreviation(state_abbreviation: string): Promise<City[]>

  list(): Promise<City[]>

  create({ name, state_abbreviation }: ICityDTO): Promise<City>
}

export default ICitiesRepository
