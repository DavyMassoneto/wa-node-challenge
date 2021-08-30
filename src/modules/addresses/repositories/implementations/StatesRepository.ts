import { getRepository, Repository } from 'typeorm'

import State from '../../entities/State'
import IStatesRepository, { IStateDTO } from '../IStatesRepository'

class StatesRepository implements IStatesRepository {
  private repository: Repository<State>

  constructor() {
    this.repository = getRepository(State)
  }

  async create({ id, name, abbreviation }: IStateDTO): Promise<State> {
    const state = this.repository.create({ id, name, abbreviation })

    return this.repository.save(state)
  }

  async findByAbbreviation(abbreviation: string): Promise<State | undefined> {
    return this.repository.findOne({ abbreviation })
  }

  async findByName(name: string): Promise<State | undefined> {
    return this.repository.findOne({ name })
  }

  async findById(id: number): Promise<State | undefined> {
    return this.repository.findOne({ id })
  }

  async list(): Promise<State[]> {
    return this.repository.find()
  }
}

export default StatesRepository
