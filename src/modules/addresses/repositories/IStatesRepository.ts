import State from '../entities/State'

export interface IStateDTO {
  id: number
  name: string
  abbreviation: string
}

interface IStatesRepository {
  findByName(name: string): Promise<State | undefined>

  findByAbbreviation(abbreviation: string): Promise<State | undefined>

  list(): Promise<State[]>

  create({ name, abbreviation }: IStateDTO): Promise<State>
}

export default IStatesRepository
